<template>
	<div class="user">
		<img :src="user.lastUserObject.pfpUrl" class="pfp" />
		<p>{{ user.lastUserObject.username }} ({{ user.id }})</p>
		<div class="scope-select-container">
			<div
				v-for="scope in scopes"
				v-bind:key="scope.scopeName"
				class="scope-select"
			>
				<input
					type="checkbox"
					:id="user.id + scope.scopeName"
					:name="user.id + scope.scopeName"
					:checked="scope.enabled"
				/>
				<label :for="user.id + scope.scopeName">{{
					scope.scopeName
				}}</label>
			</div>
		</div>
		<button @click="handleUpdate()">Update</button>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { EventBus } from "../../eventBus";
	import { Application, ApplicationRunningState } from "../../viewer/app";
	import { API_URL } from "../../config";
	import {
		DbUserEntry,
		HCUser,
		UserScopes,
	} from "../../../../VTOLLiveViewerCommon/dist/shared.js";

	@Component({ components: {} })
	export default class User extends Vue {
		@Prop() user: DbUserEntry;
		scopes: { scopeName: string; value: UserScopes; enabled: boolean }[] = [];

		async mounted() {
			const allScopes = Object.keys(
				UserScopes
			) as (keyof typeof UserScopes)[];

			allScopes.forEach((scope) => {
				const scopeValue = UserScopes[scope];
				this.scopes.push({
					scopeName: scope,
					value: scopeValue,
					enabled: this.user.scopes.includes(scopeValue),
				});
			});
		}

		public handleUpdate() {
			const allScopes = Object.keys(
				UserScopes
			) as (keyof typeof UserScopes)[];

			const scopes: UserScopes[] = [];
			allScopes.forEach((scope) => {
				const inputField = document.getElementById(
					this.user.id + scope
				) as HTMLInputElement;

				console.log(`${scope}: ${inputField.checked}`);

				if (inputField.checked) {
					scopes.push(UserScopes[scope]);
				}
			});

			Application.instance.client.adminSetUserScopes(this.user.id, scopes);
		}
	}
</script>

<style>
.user p {
	margin-top: 0px;
	padding-top: 6px;
	margin-left: 35px;
	font-size: 14px;
}

.pfp {
	width: 25px;
	float: left;
}

.scope-select {
	display: inline-block;
}

.scope-select label {
	font-size: 12px;
	margin-left: 0;
	padding-top: 0px;
	padding-bottom: 8px;
	padding-right: 16px;
	display: inline;
	color: white;
	font-family: monospace;
}

.scope-select-container {
	padding-bottom: 10px;
	display: inline-block;
}
</style>
