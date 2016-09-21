import React, {component} from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

//Components
// import {Header} from './todo-header';
import {TodoList} from './todo-list';
import {todos} from './todos';


const app = function() {

	const router = Backbone.Router.extend({
		routes: {
			'allTasks': 'showAllTasks',
			'completeTasks': 'showCompleteTasks',
			'incompleteTasks': 'showIncompleteTasks',
			'*default': 'redirect'
		},

		showAllTasks: function() {
			console.log('ROUTER: >> showAllTasks')
			ReactDOM.render(<TodoList />,document.querySelector('.container'))
		},

		showCompleteTasks: function() {
			console.log('ROUTER: >> showCompleteTasks')
		},

		showIncompleteTasks: function() {
			console.log('ROUTER: >> showIncompleteTasks')
		},

		redirect: function() {
			console.log('ROUTER: Redirecting...')
			location.hash = 'allTasks'
		},

		initialize: function() {
			Backbone.history.start()
		}

	})

	new router()
    
}

app()