/**
 * Created by WERT on 13-Nov-16.
 */

class Todo {
	constructor(title) {
		this.title = title;
		this.state = Todo.states.active;
	}

	static get states() {
		return {
			active: "active",
			completed: "completed"
		}
	}

	complete() {
		this.state = Todo.states.completed;
	}

	activate() {
		this.state = Todo.states.active;
	}

	rename(new_title) {
		this.title = new_title;
	}
}

module.exports = Todo;
