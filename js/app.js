(function (window) {
	'use strict';

	var getNewActiveItem = require('./utils/Templater').getNewActiveItem;
	var getCompletedItem = require('./utils/Templater').getCompletedItem;
	var Todo = require('./models/Todo');

	var ENTER_CODE = 13;

	var textBoxView = document.querySelector('input');
	var todoListView = document.querySelector('.todo-list');
	var closeButtons = document.getElementsByClassName('destroy');

	var todoList = [];

	textBoxView.addEventListener('keypress', e => {
		var key = e.which || e.keyCode;
		if (key === ENTER_CODE) {
			addNewTodo(textBoxView.value);
		}
	});

	function addNewTodo(title) {
		todoList.push(new Todo(title));
		todoListView.innerHTML += getNewActiveItem(title);
		console.log(todoList);
		console.log(closeButtons[0].parentNode);
	}

	function removeLastChild() {

	}

})(window);
