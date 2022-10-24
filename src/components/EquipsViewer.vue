<template>
	<div v-if="entity != null" class="equips">
		<button class="equip-btn" v-on:click="dropDown()">Loadout</button>
		<div class="content" :class="{ shown: state, hidden: !state }">
			<!-- <div v-for="(weapon, index) in equips()" v-bind:key="index">
				<p>{{ weapon }}</p>
			</div> -->
			<p>Missiles: {{ missiles() }}</p>
			<p>Equipment: {{ equips() }}</p>
			<p>Fuel: {{ fuel() }}%</p>
		</div>
	</div>
</template>


<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { Entity } from "../viewer/entityBase/entity";

	@Component
	export default class EquipsViewer extends Vue {
		entity: Entity | null = null;
		state = false;

		mounted() {
			EventBus.$on("focused-entity", (entity: Entity) => {
				this.entity = entity;
			});
		}

		missiles() {
			if (this.entity == null) return "";
			return this.entity.equipManager.getWeapons();
		}

		equips() {
			if (this.entity == null) return "";
			return this.entity.equipManager.getEquips();
		}

		fuel() {
			if (this.entity == null) return "";
			const fuel = this.entity.equipManager.getFuel();
			return Math.round(fuel * 100);
		}

		dropDown() {
			this.state = !this.state;
		}
	}
</script>

<style scoped>
p {
	color: white;
	font-family: monospace;
	margin-left: 10px;
	margin-top: 5px;
	margin-bottom: 0px;
	text-align: left;
}

.equip-btn {
	width: 100%;
	margin-left: 5px;
	margin-right: 5px;
	border-style: none;
	background-color: rgba(151, 151, 151, 0.6);
	color: white;
	font-family: monospace;
	font-size: 16px;
	border-radius: 5px;
}

.equip-btn:hover {
	background-color: rgba(151, 151, 151, 0.8);
}

.content {
	display: block;
}

.hidden {
	max-height: 0px;
	display: none;
}
</style>