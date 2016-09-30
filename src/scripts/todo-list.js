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

export const TodoListView = React.createClass({
render: function() {
		console.log(this.props)
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
	_handleAddTask: function(event){
		event.preventDefault();
		console.log("Form submitted!")
	},

	_handleChange: function(event){
		let task = (event.target.value);
		console.log(task);
	},

	render: function(){
		return(
			<div className="task-adder">
				<div className="container">
					<img className="hero" src={"http://i.imgur.com/EROSbyw.gif"} />
				
				<form onSubmit={this._handleAddTask}>
					<input onChange={this._handleChange} className="col-md-8" type="text" placeholder="What task is next?" /><button className="col-md-4 btn btn-lg btn-default">Add task</button>
				</form>
				</div>
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
        				<a className="btn btn-lg btn-warning" href="#allTasks" role="button">All</a>
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
        		<p className="lead">The world isn't going to save itself... what will you do next?</p>
        		
      		</div>
		)
	}
})





