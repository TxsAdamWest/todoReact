import React, {component} from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

//Components
// import {Header} from './todo-header';
import {SplashView} from './todo-list';
import {TodoListView} from './todo-list';
import {todos} from './todos';


const app = function() {

	const router = Backbone.Router.extend({
		routes: {
			'signin' : 'showSignIn',
			'allTasks': 'showAllTasks',
			'completeTasks': 'showCompleteTasks',
			'incompleteTasks': 'showIncompleteTasks',
			'*default': 'redirect'
		},

		showSignIn: function() {
			console.log('ROUTER: >> showSignIn')
			ReactDOM.render(<SplashView />,document.querySelector('.container'))
		},


		showAllTasks: function() {
			console.log('ROUTER: >> showAllTasks')
			ReactDOM.render(<TodoListView />,document.querySelector('.container'))
		},

		showCompleteTasks: function() {
			console.log('ROUTER: >> showCompleteTasks')
		},

		showIncompleteTasks: function() {
			console.log('ROUTER: >> showIncompleteTasks')
		},

		redirect: function() {
			console.log('ROUTER: Redirecting...')
			location.hash = 'signin'
		},

		initialize: function() {
			Backbone.history.start()
		}

	})

	new router()
    
}

app()