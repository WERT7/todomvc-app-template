/**
 * Created by WERT on 13-Nov-16.
 */

class Todo {
	constructor(title) {
		this.title = title;
		this.state = states.active;
	}

	static get states() {
		return {
			active: "active",
			completed: "completed"
		}
	}

	complete() {
		this.state = states.completed;
	}

	activate() {
		this.state = states.active;
	}

	rename(new_title) {
		this.title = new_title;
	}
}

