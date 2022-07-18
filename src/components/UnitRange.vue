<template>
	<div id="data" v-show="currentFocus != null">
		<h3 v-if="currentFocus != null">
			{{ currentFocus.owner.pilotName }} [{{ currentFocus.displayName }}]
			A: {{ comma(Math.floor(mToFt(currentFocus.position.y))) }}ft H:
			{{ Math.abs(Math.floor(radToDeg(currentFocus.rotation.y))) }} S:
			{{ Math.floor(msToKnots(currentFocus.velocity.length())) }}kt G:
			{{ currentFocus.gForce.toFixed(1) }} /
			{{ currentFocus.maxGForce.toFixed(1) }}
		</h3>
		<div
			v-for="{ entity, isLockingUs, isLocking } in getDataEntities(
				entities
			)"
			:key="entity.id"
		>
			<p
				:class="{
					lockedBy: isLockingUs,
					isLocking: isLocking,
				}"
			>
				{{ entity.owner.pilotName }} [{{ entity.displayName }}] B:
				{{ bearing(currentFocus, entity) }} R:
				{{ Math.round(range(currentFocus, entity)) }}nm A:
				{{ comma(Math.floor(mToFt(entity.position.y))) }}ft vC:
				{{ Math.floor(msToKnots(closure(currentFocus, entity))) }}
				<!-- {{ isLockedBy(entity) }} -->
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { deg, ftToMi, msToKnots, mToFt, addCommas } from "../viewer/app";
	import { PlayerVehicle } from "../viewer/entities/playerVehicle";
	import { Entity } from "../viewer/entityBase/entity";
	import EntityComponent from "./Entity.vue";

	@Component({ components: { EntityComponent } })
	export default class UnitRange extends Vue {
		entities: Entity[] = [];
		currentFocus: Entity | null = null;
		// private incomingLocks: Set<number> = new Set();
		// private outgoingLock: number | null = null;

		// entityDists: Record<string, { dist: number; time: number }> = {};

		mounted() {
			EventBus.$on("entities", (e: Entity[]) => {
				this.entities = e;
			});
		}

		getDataEntities(
			e: Entity[]
		): { entity: Entity; isLockingUs: boolean; isLocking: boolean }[] {
			if (e.length == 0) return [];
			const cur = e[0].app.currentFocus;
			this.currentFocus = cur;
			if (!cur) {
				// this.incomingLocks.clear();
				// this.outgoingLock = null;
				return [];
			}

			// this.incomingLocks.clear();
			// this.outgoingLock = null;
			// if (cur instanceof PlayerVehicle) {
			// 	const incomingLocks = cur.getLockingMe();
			// 	incomingLocks.forEach((l) => this.incomingLocks.add(l.id));
			// 	this.outgoingLock = cur.lockLine.lockedEntity?.id ?? null;
			// }

			const valid = e.filter((entity) => {
				// If showInBra and on other team
				if (entity.showInBra && entity.team != cur.team) return true;

				// If focus is locked onto them
				if (
					cur instanceof PlayerVehicle &&
					cur.lockLine?.isLockedTo(entity)
				)
					return true;

				// If they are locked onto focus
				if (
					entity instanceof PlayerVehicle &&
					entity.lockLine?.isLockedTo(cur)
				)
					return true;
				return false;
			});

			const distCache: Record<string, number> = {};
			return valid
				.sort((a, b) => {
					let d1 = distCache[a.id]
						? distCache[a.id]
						: a.position.distanceTo(cur.position);
					let d2 = distCache[b.id]
						? distCache[b.id]
						: b.position.distanceTo(cur.position);
					distCache[a.id] = d1;
					distCache[b.id] = d2;

					// return this.entityDists[a.id]?.dist - this.entityDists[b.id]?.dist;
					return d1 - d2;
				})
				.map((entity) => {
					return {
						entity: entity,
						isLockingUs:
							entity instanceof PlayerVehicle &&
							entity.lockLine?.isLockedTo(cur), //this.isLockedBy(entity),
						isLocking:
							cur instanceof PlayerVehicle &&
							cur.lockLine?.isLockedTo(entity),
					};
				});
		}

		// isLockedBy(entity: Entity): boolean {
		// 	return this.incomingLocks.has(entity.id);
		// }

		// isLocking(entity: Entity): boolean {
		// 	return entity.id == this.outgoingLock;
		// }

		closure(main: Entity, target: Entity) {
			const tmp = main.position.subtract(target.position);
			const rVel = main.velocity.subtract(target.velocity);
			return -rVel.dot(tmp) / tmp.length();
			// return -rVel.dot(tmp) / tmp.length
		}

		comma(num: number) {
			return addCommas(num);
		}

		bearing(a: Entity, b: Entity) {
			const delta = a.position.subtract(b.position);
			delta.y = 0;
			const angles = delta.toAngles();
			let bearing = Math.floor(deg(angles.theta)) + 90;
			if (bearing < 0) bearing += 360;
			return bearing;
		}

		range(a: Entity, b: Entity) {
			return ftToMi(mToFt(a.position.distanceTo(b.position)));
		}

		mToFt(v: number) {
			return mToFt(v);
		}

		radToDeg(v: number) {
			return deg(v);
		}

		msToKnots(v: number) {
			return msToKnots(v);
		}
	}
</script>

<style scoped>
#data {
	background: rgba(0, 0, 0, 0.6);
	padding-right: 10px;
	padding-bottom: 5px;
	margin-bottom: 25px;
	position: fixed;
	right: 0;
	bottom: 0;
	margin-right: 10px;
}
p {
	color: white;
	font-family: monospace;
	margin-left: 10px;
	margin-top: 5px;
	margin-bottom: 0px;
}
h3 {
	color: white;
	font-family: monospace;
	margin-left: 10px;
	margin-top: 5px;
	margin-bottom: 0px;
}

.lockedBy {
	color: red;
}

.isLocking {
	color: green;
}
</style>