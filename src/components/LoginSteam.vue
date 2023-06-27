<template>
	<div class="steambutton">
		<a v-bind:href="actionUrl">
			<div v-if="isLoggedIn" class="logout-pfp">
				<img v-bind:src="user.pfpUrl" />
				<p>{{ user.username }}</p>
				<p>Logout</p>
			</div>

			<div v-if="!isLoggedIn">
				<i class="fa fa-steam-square icon"></i>
				<p>Login</p>
			</div>
		</a>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { ENV_IS_DEV } from "../.env";
	import { EventBus } from "../eventBus";
	import { getLoggedInUser, isLoggedIn } from "../viewer/client/cookies";
	import { HCUser } from "../../../VTOLLiveViewerCommon/dist/src/shared.js";
	import { LOGIN_URL, LOGOUT_URL } from "../config";

	@Component({ components: {} })
	export default class LoginSteam extends Vue {
		actionUrl = "http://localhost:80/auth/steam/login";
		isLoggedIn = false;
		user: HCUser | null = null;

		mounted() {
			this.isLoggedIn = isLoggedIn();
			this.user = getLoggedInUser();
			if (this.isLoggedIn) {
				this.actionUrl = LOGOUT_URL;
			} else {
				this.actionUrl = LOGIN_URL;
			}
		}
	}
</script>

<style>
.logout-pfp {
	display: grid;
	place-items: center;
}

.logout-pfp img {
	padding-bottom: 5px;
}

.steambutton {
	right: 8px;
	top: 5px;
	font-size: 45px;
	position: absolute;
}

.steambutton .icon {
	color: white;
}

.steambutton p {
	/* margin-top: -0.25em; */
	font-size: 14px;
	margin-top: 0px;
	margin-bottom: 0;
}
</style>