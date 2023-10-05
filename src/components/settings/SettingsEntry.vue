<template>
	<div class="settings-entry">
		<p class="settings-entry-text">{{ name }}</p>
		<select v-if="type == SettingType.Dropdown" @change="update()" v-model="value" class="settings-select">
			<option v-for="option in Settings.getOptions(name)" :key="oName(option)" :value="oVal(option)" :selected="value == oVal(option)">
				{{ oName(option) }}
			</option>
		</select>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { EventBus } from "../../eventBus";
	import { Settings, SettingType, SettingName } from "../../viewer/settings";

	@Component({ components: {} })
	export default class SettingsEntry extends Vue {
		SettingType = SettingType;
		Settings = Settings;

		@Prop()
		name!: SettingName;

		@Prop()
		type!: string;

		value = "";

		mounted() {
			this.value = Settings.get(this.name);
		}

		update() {
			console.log(`Updating setting ${this.name} to ${this.value}`);

			Settings.set(this.name, this.value);
		}

		oVal(option: string | { value: string }) {
			return typeof option == "string" ? option : option.value;
		}

		oName(option: string | { name: string }) {
			return typeof option == "string" ? option : option.name;
		}
	}
</script>

<style>
.settings-entry {
}

.settings-entry-text {
	font-size: 12px;
	text-align: left;
	display: inline;
}

.settings-select {
	margin-left: 15px;
}
</style>
