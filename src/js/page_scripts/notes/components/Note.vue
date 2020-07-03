<template>
	<div class="note small-12 medium-6 large-4">
		<div
			class="note__content columns small-11"
			v-show="!isEditing"
		>
			<h2 class="note__title">{{ note.title }}</h2>
			<div class="note__text text-ord">{{ note.text }}</div>
			<div
				class="note__picture"
				v-if="note.picture"
			>
				<img :src="note.picture.path" alt="">
			</div>
			<button
				class="button primary"
				@click="startEditing"
				v-show="!isEditing"
			>Edit</button>
			<button
				class="button alert"
				@click="deleteThisNote(note)"
			>Delete</button>
		</div>
		<div
			class="note__edit columns small-11"
			v-show="isEditing"
		>
			<input
				class="h2"
				type="text"
				placeholder="Enter title"
				ref="title"
				v-model="note.title"
			/>
			<textarea
				placeholder="Enter text"
				ref="text"
				v-model="note.text"
			></textarea>
			<input
				class="text-small"
				type="file"
				name="picture"
				@change="onFileSelected"
			>
			<button
				class="button success"
				@click="editNote(note.id, note.title, note.text, selectedPicture)"
			>Save</button>
			<button
				class="button alert"
				@click="stopEditing"
			>Cancel</button>
		</div>
	</div>
</template>

<script>
	import {mapActions} from "vuex";

	export default {
		name: "Note",
		props: ['note'],
		data: function() {
			return {
				isEditing: false,
				selectedPicture: null
			}
		},
		methods: {
			...mapActions(['addNote', 'deleteNote']),
			deleteThisNote: function(note) {
				this.deleteNote(note);
			},
			onFileSelected: function(event) {
				this.selectedPicture = event.target.files[0];
				console.log(this.selectedPicture);
			},
			editNote: function(id, title, text, picture) {
				const fd = new FormData();

				if (id) {
					fd.append('id', id);
				}
				if (title) {
					fd.append('title', title);
				}
				if (text) {
					fd.append('text', text);
				}
				if (picture) {
					fd.append('picture', picture, picture.name);
				}

				this.addNote(fd)
					.then(() => {this.isEditing = false});
			},
			startEditing: function() {
				this.isEditing = true;
			},
			stopEditing: function() {
				this.isEditing = false;
			}
		}
	}
</script>

<style scoped>

</style>