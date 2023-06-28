<template>
	<div :class="{ 'greyout-wrapper': greyout == true }">
		<a
			href="javascript:void(0);"
			id="start"
			class="fancy-btn"
			:class="{ greyout: greyout == true }"
			v-on:click="handleClick()"
		>
			<p class="btn-txt">View {{ text }}</p>
		</a>
	</div>
</template>


<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";

	@Component({})
	export default class WelcomeStartButton extends Vue {
		@Prop() text: string;
		@Prop() redirect: string;
		@Prop() greyout: string;

		// set_greyout = false;

		// mounted() {
		// console.log(this.greyout, typeof this.greyout);
		// if (this.greyout == "true") this.set_greyout = true;
		// else this.set_greyout = false;
		// }

		handleClick() {
			location.pathname = this.redirect;
		}
	}
</script>

<style>
:root {
	--color-red: #1aa850;
	--color-white: #fff;
	--speed-normal: 0.5s;
	--speed-fast: 0.2s;
}

.fancy-btn {
	/* letter-spacing: 2px; */
	/* text-transform: uppercase; */

	background-color: rgba(31, 31, 31, 0.5);

	transition: var(--speed-normal);
	border: 1px solid var(--color-red);
	padding: 5px;

	width: fit-content;
	height: 25px;

	display: flex;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 25px;
	padding-bottom: 0px;
	padding-bottom: 7px;

	text-decoration: none;
}

.fancy-btn:hover {
	border: 1px solid transparent;
	background: var(--color-red) url("pixelgreen.png");
	transition-delay: 0.8s;
	background-size: 180px;
	animation: animate var(--speed-fast) steps(8) forwards;
}

.btn-txt {
	font-family: monospace;
	font-size: 24px;
	text-decoration: none;
	text-align: center;
	margin: 0px;
	color: var(--color-white) !important;
}

.greyout {
	pointer-events: none;
	opacity: 0.4;
}

.greyout-wrapper {
	cursor: not-allowed;
}

@keyframes animate {
	0% {
		background-position-y: 0;
	}
	100% {
		background-position-y: -480px;
	}
}
</style>
