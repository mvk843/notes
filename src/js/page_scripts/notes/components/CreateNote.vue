<template>
	<div class="notes__create columns">
		<button
			class="create__btn button success"
			@click="startCreating"
			v-show="!isCreating"
		>Create Note</button>
		<div
			class="create__note"
			v-show="isCreating"
		>
			<input
				class="h2"
				type="text"
				placeholder="Enter title"
				ref="title"
				v-model="noteTitle"
			/>
			<textarea
				class="text-ord"
				placeholder="Enter text"
				rows="5"
				ref="text"
				v-model="noteText"
			></textarea>
			<input
				type="file"
				name="picture"
				@change="onFileSelected"
			/>
			<button
				class="button success"
				@click="addNewNote"
			>Create</button>
			<button
				class="button alert"
				@click="endCreating"
			>Cancel</button>
		</div>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		name: "CreateNote",
		data: function() {
			return {
				isCreating: false,
				noteTitle: '',
				noteText: '',
				selectedPicture: null
			}
		},
		methods: {
			...mapActions(['addNote']),
			startCreating: function() {
				this.isCreating = true;
			},
			endCreating: function() {
				this.isCreating = false;
			},
			onFileSelected: function(event) {
				this.selectedPicture = event.target.files[0];
				console.log(this.selectedPicture);
			},
			addNewNote: function() {
				const fd = new FormData();

				if (this.noteTitle) {
					fd.append('title', this.noteTitle);
				}
				if (this.noteText) {
					fd.append('text', this.noteText);
				}
				if (this.selectedPicture) {
					fd.append('picture', this.selectedPicture, this.selectedPicture.name);
				}

				this.addNote(fd)
					.then(() => {this.isCreating = false});
			},
		}
	}
</script>

<style scoped>

</style>