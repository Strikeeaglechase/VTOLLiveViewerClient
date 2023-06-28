<template>
	<div class="steambutton">
		<div @click="handleClick()">
			<div v-if="isLoggedIn" class="logout-pfp">
				<img v-bind:src="user.pfpUrl" />
				<p>{{ user.username }}</p>
				<p>Logout</p>
			</div>

			<div v-if="!isLoggedIn">
				<i class="fa fa-steam-square icon"></i>
				<p>Login</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { ENV_IS_DEV } from "../.env";
	import { EventBus } from "../eventBus";
	import {
		getLoggedInUser,
		isLoggedIn,
		eraseCookie,
	} from "../viewer/client/cookies";
	import { HCUser } from "../../../VTOLLiveViewerCommon/dist/src/shared.js";
	import { COOKIE_DOMAIN, LOGIN_URL, LOGOUT_URL } from "../config";

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

		handleClick() {
			// console.log(`LoginSteam: handleClick()`);
			// console.log(`LoginSteam: isLoggedIn: ${this.isLoggedIn}`);
			if (this.isLoggedIn) {
				eraseCookie("user_token", COOKIE_DOMAIN);
				// console.log(`LoginSteam: cookie erased`);
			}
			window.location.assign(this.actionUrl);
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

.steambutton {
	cursor: pointer;
}
</style>