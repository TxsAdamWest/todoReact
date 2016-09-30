//Dependencies
import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import { Image } from 'react';

//Models
import {TaskModel} from './models';
import {TaskCollection} from './models';


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

	getInitialState: function(){
		return {
			taskColl: this.props.taskColl,
			viewType: 'all'
		}
	},

	_addTask: function(newTask){
		console.log("_addTask fired!")
		// console.log(this.state)
		// console.log(TaskModel)
		this.state.taskColl.add(new TaskModel(newTask))
		this._updater()
	},

	_removeTask: function(targetModel){
		this.state.taskColl.remove(targetModel)
		this._updater()
	},

	_updater: function(){
		this.setState({
			taskColl: this.state.taskColl
		})
	},

	render: function() {
			var taskColl = this.state.taskColl
			console.log(this.state, "<< Top Level STATE")
			return (
				<div className="container-fluid">
					<Nav />
					<TaskBar />	
					<TaskAdder adderFunc={this._addTask} />
					<TaskList updater={this._updater} remover={this._removeTask} taskColl={taskColl}/>
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

	// Form Version
	_handleAddTask: function(event){
		var taskForm =document.getElementById("submit")
		event.preventDefault();
		console.log('_handleAddTask fired! Event is >> ', event)
		var taskEntry = taskForm.elements[0].value
		console.log("Form submitted!", taskEntry)

		this.props.adderFunc(taskEntry)
		taskForm.reset()
	},

	// _handleAddTask: function(event){
	// 	console.log(event)
	// 	if(event.keyCode === 13){
	// 		console.log('_handleAddTask fired! Event is >> ', event)
	// 		var taskEntry = event.target.value
	// 		console.log("taskEntry is: ", taskEntry)

	// 		this.props.adderFunc(taskEntry)
	// 		event.target.value = ''
	// 	}
	// },

	// _handleChange: function(event){
	// 	if(event.keyCode === 13){
	// 		var task = (event.target.value);
	// 		console.log(task);
	// 		this.setState({ task: task });
	// 		this.state.taskColl.add(new TaskModel(task))
	// 		event.target.value = ""
	// 	}
	// },

	render: function(){
		return(
			<div className="task-adder">
				<div className="container">
					<img className="hero" src={"http://i.imgur.com/EROSbyw.gif"} />
				
				<form onSubmit={this._handleAddTask} id="submit">
					<input className="col-md-8" type="text" placeholder="What task is next?" />
					<button className="col-md-4 btn btn-lg btn-default">Add task</button>
				</form>

				</div>
			</div>
		)
	}
})

export const TaskList = React.createClass({
	_createTask: function(model){
		return <Task updater={this.props.updater} remover={this.props.remover} taskModel={model} key={this.cid}/>
	},

	render: function() {
		// console.log(this.props.taskColl)
		return 	<div className="jumbotron">
					{this.props.taskColl.map(this._createTask)}				
			   	</div>
	}
})

export const Task = React.createClass({
	_deleteTask: function(){
		this.props.remover(this.props.taskModel)
	},

	_checkComplete: function(taskModel) {
	  // console.log(this.props, "<< gimme my props")
   //    console.log("_selectStatus fired!")
   //    console.log(this.props.taskModel, "<< isComplete status BEFORE")

      	if(this.props.taskModel.get('isComplete') === false){
      		this.props.taskModel.set({isComplete: true})
      		// console.log(this.props.taskModel.get('isComplete'), "<< isComplete status AFTER")
      		this.props.updater()
  		}
  		// console.log(this.props.taskModel, " << One last check.")
     },

	render: function(){
		var taskModel = this.props.taskModel
		return (
			<div className="task">
				<p>{taskModel.get("task")}<input value={taskModel} onChange={this._checkComplete} className="checkbox" type="checkbox" /></p>
				<button onClick={this._deleteTask} className="btn btn-lg btn-danger"> X </button>
			</div>
		)
			

	}
})

export const TaskBar = React.createClass({
	render: function(){
		return(
        		<div className="container todo-container">
        			<div className="task-bar">
        				<a className="btn btn-lg btn-warning" href="#home" role="button">All</a>
        				<a className="btn btn-lg btn-info" href="#home" role="button">Current</a>
        				<a className="btn btn-lg btn-primary" href="#home" role="button">Completed</a>
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





