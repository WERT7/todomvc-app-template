(function (window) {
	'use strict';

	var ENTER_CODE = 13;
	var NEW_ITEM_TEMPLATE

	var textBox = document.querySelector('input');
	var todoList = document.querySelector('.todo-list');

	textBox.addEventListener('keypress', e => {
		var key = e.which || e.keyCode;
		if (key === ENTER_CODE) {
			console.log(textBox.value);
		}
	});

	import { getCompletedItem } from 'utils/Timplater';

	console.log(getCompletedItem('zzz'));

})(window);
