<template>
	<div id="sidebar">
		<SettingsPopoutButton />
		<div v-for="entity in filterSidebar(entities)" :key="entity.id">
			<EntityComponent :entity="entity" />
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { MissileEntity } from "../viewer/entities/genericMissileEntity";
	import { Entity } from "../viewer/entityBase/entity";
	import { EntityViewData } from "../viewer/entityBase/entityViewData.js";
	import EntityComponent from "./Entity.vue";
	import SettingsPopoutButton from "./settings/SettingsPopoutButton.vue";
	@Component({ components: { EntityComponent, SettingsPopoutButton } })
	export default class Sidebar extends Vue {
		entities: EntityViewData[] = [];

		mounted() {
			EventBus.$on("entities", (e: EntityViewData[]) => {
				this.entities = e;
				// console.log(`Sidebar: ${e.length} entities`);
			});
		}

		filterSidebar(e: EntityViewData[]): EntityViewData[] {
			// return e.filter((e) => e.showInSidebar);
			return e
				.filter(e => {
					if (e.isMissile) return false;
					if (!e.isActive) return false;
					if (e.showInSidebar) return true;
					if (e.isCurrentFocus) return true;

					if (!e.hasFoundValidOwner) return false;
					// return e.app.currentFocus.id == e.owner.entityId && e.id == e.owner.entityId && e.isActive;
					return false;
				})
				.slice()
				.sort((a, b) => this.sortEntitys(a, b));
		}

		private sortEntitys(a: EntityViewData, b: EntityViewData) {
			if (a.isCurrentFocus) return -1;
			if (b.isCurrentFocus) return 1;
			if (a.isMissile) return -1;
			if (b.isMissile) return -1;
			if (!a.hasFoundValidOwner) return -1;
			if (!b.hasFoundValidOwner) return 1;

			return a.owner.pilotName.localeCompare(b.owner.pilotName);
		}
	}
</script>

<style>
#sidebar {
	height: 100%;
	right: 0;
	position: fixed;
	pointer-events: none;
}
</style>
