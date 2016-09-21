import React, {component} from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';


// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

//Components
import {Header} from './todo-header';
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
			location.hash = 'allTasks'
		},

		initialize: function() {
			Backbone.history.start()
		}

	})

	new router()
    
}

app()