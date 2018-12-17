import React from 'react';

export const TodoList = props => {
	const singleTaskNames = props.map(function (singleTask) {
		<li key={singleTask.id} onClick={this.props.onClick}>
			{singleTask.text}
		</li>
	});

	return (
		<div>
			Tasks:
			<ul>
				{singleTaskNames}
			</ul>
		</div>
	)
};
