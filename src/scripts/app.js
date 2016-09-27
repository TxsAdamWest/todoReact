import React, {component} from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

//Components
import {SplashView} from './todo-list';
import {TodoListView} from './todo-list';

//Models
import {todos} from './todos';
import {TaskCollection} from './models';


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
			ReactDOM.render(<TodoListView tasklist={new TaskCollection()}/>,document.querySelector('.container'))
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