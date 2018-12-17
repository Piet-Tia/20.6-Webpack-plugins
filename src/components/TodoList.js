import React from 'react';

class TodoList extends React.Component {
	render() {
		const singleTaskNames = this.props.tasks.map(singleTask =>
			<li key={singleTask.id} onClick={this.props.onClick}>
				{singleTask.text}
			</li>
		);
		return (
			<div>
				Tasks:
			<ul>
					{singleTaskNames}
				</ul>
			</div>
		)
	}
}
export default TodoList;
