/**
 * Created by WERT on 13-Nov-16.
 */
var PLACEHOLDER = 'title';

var ACTIVE_TODO_ITEM = String.raw`<li>
	<div class="view">
		<input class="toggle" type="checkbox">
		<label>title</label>
		<button class="destroy"></button>
	</div>
	<input class="edit" value="Rule the web">
</li>`;

var COMPLETED_TODO_ITEM = String.raw`<li class="completed">
	<div class="view">
		<input class="toggle" type="checkbox" checked>
		<label>title</label>
		<button class="destroy"></button>
	</div>
	<input class="edit" value="Create a TodoMVC template">
</li>`;

function getNewActiveItem(title) {
	return ACTIVE_TODO_ITEM.replace(PLACEHOLDER, title);
}

function getCompletedItem(title) {
	return COMPLETED_TODO_ITEM.replace(PLACEHOLDER, title);
}

module.exports = {
	getNewActiveItem,
	getCompletedItem
};
