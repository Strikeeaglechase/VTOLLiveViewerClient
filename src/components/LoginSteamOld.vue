<template>
	<a href="#" class="steambutton">
		<span><p>Login</p></span>
		<div class="icon">
			<i class="fa fa-steam-square"></i>
		</div>
	</a>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	// import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	// import LobbyEntry from "./LobbyEntry.vue";

	@Component({ components: {} })
	export default class LoginSteam extends Vue {
		// mounted() {}
	}
</script>

<style>
.steambutton {
	display: block;
	background-color: #6f9f31;
	width: 270px;
	height: 50px;
	line-height: 50px;
	margin: auto;
	color: #fff;
	position: absolute;
	cursor: pointer;
	overflow: hidden;
	border-radius: 5px;

	right: 5px;
}

.steambutton p {
	margin-top: -0.25em;
}

.steambutton span {
	font-family: "Exo 2", sans-serif;
	font-weight: bold;
	letter-spacing: 0.1em;
	width: 75%;
	font-size: 14px;
	text-transform: uppercase;
	left: 0;
	-webkit-transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
	transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
}

.steambutton span,
.steambutton .icon {
	display: block;
	height: 100%;
	text-align: center;
	position: absolute;
	top: 0;
}

.steambutton .icon .fa {
	font-size: 30px;
	line-height: 50px;
	-webkit-transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4),
		height 0.25s ease;
	transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4),
		height 0.25s ease;
}

.steambutton .icon {
	width: 25%;
	right: 0;
	-webkit-transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
	transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
	margin-top: -0.25em;
}

.steambutton span,
.steambutton .icon {
	display: block;
	height: 100%;
	text-align: center;
	position: absolute;
	top: 0;
}

.fa {
	display: inline-block;
	font: normal normal normal 14px/1 FontAwesome;
	font-size: inherit;
	text-rendering: auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	transform: translate(0, 0);
}

.steambutton span:after {
	content: "";
	background-color: #5d8628;
	width: 2px;
	height: 70%;
	position: absolute;
	top: 15%;
	right: -1px;
}

.steambutton.success span,
.steambutton:hover span {
	left: -72%;
	opacity: 0;
}

.steambutton.success .icon,
.steambutton:hover .icon {
	width: 100%;
}

.steambutton.success .icon .fa,
.steambutton:hover .icon .fa {
	font-size: 40px;
}
</style>
