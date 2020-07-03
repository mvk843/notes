<template>
	<div>
		<CreateNote></CreateNote>
		<NoteList></NoteList>
	</div>
</template>

<script>
	import NoteList from './components/NoteList';
	import CreateNote from './components/CreateNote';

	export default {
		name: 'Notes',
		components: {
			NoteList,
			CreateNote
		}
	}
</script>

<style>

</style>