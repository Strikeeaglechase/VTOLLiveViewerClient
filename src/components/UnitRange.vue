<template>
	<div class="container">
		<div>
			<canvas class="control-inputs" width="75px" height="75px" id="control-inputs-box"></canvas>
		</div>

		<div id="data">
			<h3 v-if="currentFocus != null">
				{{ currentFocus.owner.pilotName }} [{{ currentFocus.displayName }}] A: {{ comma(Math.floor(mToFt(currentFocus.position.y))) }}ft H:
				{{ Math.abs(Math.floor(radToDeg(currentFocus.rotation.y))) }} S: {{ Math.floor(msToKnots(currentFocus.velocity.length())) }}kt G:
				{{ currentFocus.gForce.toFixed(1) }} /
				{{ currentFocus.maxGForce.toFixed(1) }}
			</h3>
			<div v-for="{ entity, isLockingUs, isLocking } in getDataEntities(entities)" :key="entity.id">
				<p
					:class="{
						lockedBy: isLockingUs,
						isLocking: isLocking
					}"
				>
					{{ entity.owner.pilotName }} [{{ entity.displayName }}] B: {{ bearing(currentFocus, entity) }} R: {{ Math.round(range(currentFocus, entity)) }}nm
					A: {{ comma(Math.floor(mToFt(entity.position.y))) }}ft vC:
					{{ Math.floor(msToKnots(closure(currentFocus, entity))) }}
					<!-- {{ isLockedBy(entity) }} -->
				</p>
			</div>
			<div>
				<br />
				<EquipsViewer />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { deg, ftToMi, msToKnots, mToFt, addCommas, Application } from "../viewer/app";
	import { PlayerVehicle } from "../viewer/entities/playerVehicle";
	import { Entity } from "../viewer/entityBase/entity";
	import { EntityViewData } from "../viewer/entityBase/entityViewData.js";
	import EntityComponent from "./Entity.vue";
	import EquipsViewer from "./EquipsViewer.vue";

	@Component({ components: { EntityComponent, EquipsViewer } })
	export default class UnitRange extends Vue {
		entities: EntityViewData[] = [];
		currentFocus: EntityViewData | null = null;
		// private incomingLocks: Set<number> = new Set();
		// private outgoingLock: number | null = null;

		// entityDists: Record<string, { dist: number; time: number }> = {};

		mounted() {
			EventBus.$on("entities", (e: EntityViewData[]) => {
				this.entities = e;
			});
			EventBus.$on("focused-entity", (entity: EntityViewData) => {
				this.currentFocus = entity;
			});
		}

		getDataEntities(e: EntityViewData[]): { entity: EntityViewData; isLockingUs: boolean; isLocking: boolean }[] {
			if (e.length == 0) return [];
			if (this.currentFocus == null) return [];
			// if (Application.instance.currentFocus != this.currentFocus) {
			// 	console.error(`currentFocus is not the same as Application.instance.currentFocus`);
			// 	return [];
			// }

			const focus = this.currentFocus as EntityViewData;

			const valid = e.filter(entity => {
				// If showInBra and on other team
				if (entity.showInBra && entity.team != focus.team) return true;

				// If focus is locked onto them
				if (focus.isPlayer && focus.lockedOnto == entity.id) return true;

				// If they are locked onto focus
				if (entity.isPlayer && entity.lockedOnto == focus.id) return true;
				return false;
			});

			const distCache: Record<string, number> = {};
			return valid
				.sort((a, b) => {
					let d1 = distCache[a.id] ? distCache[a.id] : a.position.distanceTo(focus.position);
					let d2 = distCache[b.id] ? distCache[b.id] : b.position.distanceTo(focus.position);
					distCache[a.id] = d1;
					distCache[b.id] = d2;

					// return this.entityDists[a.id]?.dist - this.entityDists[b.id]?.dist;
					return d1 - d2;
				})
				.map(entity => {
					return {
						entity: entity,
						isLockingUs: entity.isPlayer && entity.lockedOnto == focus.id, //this.isLockedBy(entity),
						isLocking: this.currentFocus.isPlayer && this.currentFocus.lockedOnto == entity.id
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
.container {
	position: fixed;
	right: 0;
	bottom: 0;
}

.control-inputs {
	right: 10px;
	top: -55px;
	position: absolute;
	opacity: 0.5;
}

#data {
	background: rgba(0, 0, 0, 0.6);
	padding-right: 10px;
	padding-bottom: 5px;
	padding-top: 2px;
	margin-bottom: 15px;
	margin-right: 10px;
}

p {
	color: white;
	font-family: monospace;
	margin-left: 10px;
	margin-top: 5px;
	margin-bottom: 0px;
	text-align: left;
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