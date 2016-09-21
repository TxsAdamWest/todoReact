import React from 'react';
import ReactDOM from 'react-dom';


//Components
import {Header} from './todo-header';
import {todos} from './todos';

export const TodoList = React.createClass({

	render: function() {
		return (
			<div className="container-fluid">
				<Header />	
				
			</div>
		)
	}
})

