<template>
	<div class="replay-upload-btn">
		<form
			action="fileupload"
			method="post"
			enctype="multipart/form-data"
			id="replay-upload-form"
		>
			<label for="replay-upload">
				{{ hasFile ? "Uploading..." : "Upload VTGR File" }}
			</label>
			<input
				type="file"
				id="replay-upload"
				accept=".vtgr"
				@change="fileUploaded($event)"
			/>
		</form>
	</div>
</template>


<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { LocalVTGRHandler } from "../viewer/localVTGRHandler";
	// import { getCookie } from "../../../../VTOLLiveViewerCommon/dist/src/cookieHelper";

	@Component({})
	export default class ReplayUpload extends Vue {
		hasFile = false;

		fileUploaded(event: Event) {
			console.log("File Selected!");
			const target = event.target as HTMLInputElement;
			const file = target.files ? target.files[0] : null;
			console.log(file);
			if (file) {
				this.hasFile = true;
				LocalVTGRHandler.handleFile(file);
			}
			// (target.parentElement as HTMLFormElement)?.submit();
		}
	}
</script>

<style>
.replay-upload-btn {
	position: absolute;
}

.replay-upload-btn label {
	border: 1px solid white;
	font-family: monospace;
	color: white;
	display: inline-block;
	padding: 6px 12px;
	margin: 7px 7px;
	cursor: pointer;
}

.replay-upload-btn label:hover {
	background-color: #eee;
	color: #000;
}

.replay-upload-btn input[type="file"] {
	/* font-family: monospace;
	font-size: 24px;
	text-decoration: none;
	text-align: center;
	margin: 0px; */
	display: none;
}
</style>
