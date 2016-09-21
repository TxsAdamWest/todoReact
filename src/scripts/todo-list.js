import React from 'react'
import ReactDOM from 'react-dom'


//Components
import {Header} from './todo-header'


export const TodoList = React.createClass({

	render: function() {
		return (
			<div className="container-fluid">
				<table>
					<thead>
						<th>Task</th>
						<th>Action</th>
					</thead>

					<Header />

				</table>
			</div>
		)
	}
})

