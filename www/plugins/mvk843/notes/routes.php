<?php

use Illuminate\Http\Request;
use Mvk843\Notes\Models\Note;

Route::get('api/notes', function() {

	$notes = Note::with('picture')->get();

	return $notes;

});

Route::post('api/add-note', function(Request $data) {

	if (isset($data['id']) && !empty($data['id'])) {
		$note = Note::find($data['id']);
	} else {
		$note = new Note();
	}

	if ($data['picture']) {
		$picture = Input::file('picture');
		$note->picture = $picture;
	}
	if ($data['title']) {
		$note->title = $data['title'];
	}
	if ($data['text']) {
		$note->text = $data['text'];
	}
	$note->save();

});

Route::post('api/delete-note', function(Request $data) {

	Note::destroy($data['id']);

});