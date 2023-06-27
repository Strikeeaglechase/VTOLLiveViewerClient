<template>
	<div class="admin-page">
		<div class="controls">
			<p>Admin</p>
			<input
				id="admin-search"
				type="text"
				class="admin-search"
				@input="updateSearch()"
			/>
		</div>

		<div class="member-list">
			<!-- <div > -->
			<!-- {{ user.username }} ({{ user.id }}) -->
			<User
				v-for="user in userQueryResult"
				v-bind:key="user.id"
				:user="user"
			/>
			<!-- </div> -->
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { EventBus } from "../../eventBus";
	import { Application, ApplicationRunningState } from "../../viewer/app";
	import { API_URL } from "../../config";
	import { DbUserEntry } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
	import User from "./User.vue";

	@Component({ components: { User } })
	export default class AdminPage extends Vue {
		// async mounted() {
		// 	setInterval(() => this.updateSearch(), 1000);
		// }

		userQueryResult: DbUserEntry[] = [];

		updateSearch() {
			const client = Application.instance.client;
			if (!client) return;

			client.onUserQueryResult = (users) => this.onSearchResults(users);
			const search = document.getElementById(
				"admin-search"
			) as HTMLInputElement;
			client.adminSearchUsers(search.value);
			// client.adminSearchUsers("C");
		}

		onSearchResults(users: DbUserEntry[]) {
			this.userQueryResult = users;
			// this.userQueryResult = [];
			// for (let i = 0; i < 30; i++) {
			// 	this.userQueryResult.push(users[0]);
			// }
		}
	}
</script>

<style>
.admin-page {
	display: grid;

	padding-left: 20px;
	padding-top: 20px;
	margin-top: 0px;
	font-size: 24px;

	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	max-height: 100%;
}

.admin-page p {
	text-align: left;
	margin-top: 0px;
	margin-bottom: 0px;
}

.lobbySearchBar {
	text-align: center;
	padding-top: 10px;
}

.admin-search {
	color: white;
	font-family: monospace;
	border: 1px white solid;
	background: none;
}

.member-list {
	overflow-y: scroll;
}
</style>
