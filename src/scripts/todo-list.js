import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'react';

//Models
import {todos} from './todos';



//Views
export const SplashView = React.createClass({

	render: function() {
		return (
			<div className="container-fluid">
				<Nav />
				<Header />	

			</div>
		)
	}
})

//AllTasks
export const TodoListView = React.createClass({
render: function() {
		return (
			<div className="container-fluid">
				<Nav />
				<TaskBar />	
			</div>
		)
	}

})

//Components
export const Nav = React.createClass({
	render: function(){
		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
			     <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			            <span className="sr-only">Toggle navigation</span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			            <span className="icon-bar"></span>
			          </button>
			          <a className="navbar-brand" href="#">To Act!</a>
			        </div>
			        <div id="navbar" className="navbar-collapse collapse">
			          <form className="navbar-form navbar-right">
			            <div className="form-group">
			              <input type="text" placeholder="Email" className="form-control" />
			            </div>
			            <div className="form-group">
			              <input type="password" placeholder="Password" className="form-control" />
			            </div>
			            <button type="submit" className="btn btn-success">Sign in</button>
			          </form>
			        </div>
			      </div>
			</nav>
		)
	}
})

export const TaskAdder = React.createClass({
	render: function(){
		return(
			<div>
				<input type="text" placeholder="What task is next?" /><a className="btn btn-lg btn-success" href="#" role="button">Add task</a>
			</div>
		)
	}
})


export const TaskBar = React.createClass({
	render: function(){
		return(
			
        		<div className="container todo-container">
        				<TaskAdder />
        			<div className="task-bar">
        				<a className="btn btn-lg btn-default" href="#" role="button">All</a>
        				<a className="btn btn-lg btn-info" href="#incompleteTasks" role="button">Current</a>
        				<a className="btn btn-lg btn-primary" href="#completeTasks" role="button">Completed</a>
					</div>

					<div className="jumbotron">
						
						<ul>
							<li>Task1</li>
						</ul>
					</div>
        		</div>
      	
		)
	}
})

export const Header = React.createClass({
	render: function(){
		return(
			<div className="jumbotron">
        		<div className="container">
        			<img src={'http://i.imgur.com/iSreVyD.png'} />
        		</div>
                <h3>A to-do list for heroes</h3>
        		<p className="lead">The world isn't going to save itself... What will you do next?</p>
        		
      		</div>
		)
	}
})





