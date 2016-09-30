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
			'home': 'home',
			'*default': 'redirect'
		},

		showSignIn: function() {
			console.log('ROUTER: >> home')
			ReactDOM.render(<SplashView />, document.querySelector('.container'))
		},


		home: function() {
			console.log('ROUTER: >> showAllTasks')
			ReactDOM.render(<TodoListView taskColl={new TaskCollection()}/>,document.querySelector('.container'))
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