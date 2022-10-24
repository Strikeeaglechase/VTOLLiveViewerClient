<template>
	<div
		class="entity"
		v-bind:class="{
			'team-a': entity.team == teams.A,
			'team-b': entity.team == teams.B,
			'thick-border': entity.app.currentFocus == entity,
		}"
	>
		<p>{{ entity.owner.pilotName }} ({{ entity.displayName }})</p>
		<button v-on:click="focus()">Focus</button>
	</div>
</template>


<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { Entity } from "../viewer/entityBase/entity";

	import { Team } from "../../../VTOLLiveViewerCommon/dist/src/shared.js";

	@Component
	export default class EntityComponent extends Vue {
		@Prop()
		entity!: Entity;
		teams = Team;

		focus() {
			this.entity.focus();
		}
	}
</script>

<style scoped>
p {
	font-family: Anonymous Pro, monospace;
	display: inline;
	margin-right: 5px;
}

.thick-border {
	border-width: 2px !important;
}

button {
	/* font-weight: bold; */
	font-family: Anonymous Pro, monospace;
	background-color: #434c53;
	color: #ffffff;
	border-width: 1px;
	border-color: #000a0f;
	padding-top: 2px;
	padding-bottom: 2px;
	transition: color 0.25s;
	font-size: 1em;
}

button:hover {
	background-color: #434c53;
	-webkit-box-shadow: inset 0px 0px 6px 5px rgb(0 0 0 / 30%);
	box-shadow: inset 0px 0px 6px 5px rgb(0 0 0 / 30%);
	transition: color 0.25s;
}

.entity {
	max-width: 250px;
	background-color: rgba(50, 50, 50, 0.6);
	color: white;
	margin-right: 10px;
	padding: 5px 5px 5px 7px;
	margin-top: 7px;

	border-width: 1px;
	border-style: solid;

	pointer-events: auto;

	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

.team-a {
	border-color: blue;
}
.team-b {
	border-color: red;
}
</style>
