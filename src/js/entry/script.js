import '../common';
import notesPageScript from '../page_scripts/notes';

$ (function (jQuery) {

	if ($('.p-notes').length) {
		notesPageScript(window, document, jQuery);
	}

});