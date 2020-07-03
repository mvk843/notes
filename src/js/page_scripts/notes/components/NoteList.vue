<template>
	<div>
		<h1 class="notes__title columns">Note List</h1>
		<div class="notes__container row">
			<Note
				v-for="note in notes"
				:note="note"
				:key="note.id"
			></Note>
		</div>
	</div>
</template>

<script>
	import Note from "./Note";
	import { mapActions, mapState } from 'vuex';

	export default {
		name: "NoteList",
		components: {
			Note
		},
		computed: {
			...mapState(['notes'])
		},
		created() {
			this.getNotes();
		},
		methods: {
			...mapActions(['getNotes']),
		}
	}
</script>

<style scoped>

</style>