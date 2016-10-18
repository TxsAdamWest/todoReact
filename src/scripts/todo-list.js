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

	_viewSelect: function(event){
		var viewValue = event.target.value

		this.setState({
			viewType: viewValue
		})
	},

	_addTask: function(newTask){
		// console.log("_addTask fired!")
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
					<HeroContainer />	
					<TaskList updater={this._updater} remover={this._removeTask} taskColl={taskColl}/>
					<TaskAdder adderFunc={this._addTask} />
				</div>
			)
		}

})

//Components
 const Nav = React.createClass({
	render: function(){

		return(
			<nav className="navbar navbar-inverse navbar-fixed-top">
			     <div className="container">
			        <div className="navbar-header">
			          <button type="button" className="navbar-toggle collapsed" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
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
			            	<a href="#home" id="start-button" className="btn btn-success">Begin</a>
			            </div>
			          </form>
			        </div>
			      </div>
			</nav>
		)
	}
})

 const TaskAdder = React.createClass({

	// Form Version
	_handleAddTask: function(event){
		var taskForm = document.getElementById("submit")
		if(taskForm.elements[0].value) {
			event.preventDefault();
			console.log('_handleAddTask fired! Event is >> ', event)
			var taskEntry = taskForm.elements[0].value
			console.log("Form submitted!", taskEntry)

			this.props.adderFunc(taskEntry)
			taskForm.reset()
		}

	},

	render: function(){
		return(
			<div className="container task-adder">
				
				<form onSubmit={this._handleAddTask} id="submit">
					<input required id="task-input" type="text" placeholder="What task is next?" />
					<button className="btn btn-lg btn-default">Add task</button>
				</form>

			</div>
		)
	}
})

 const HeroContainer = React.createClass({
	render: function(){ 
		return (
			<div className="col-xs-6 hero-container">
				<img className="hero" src={"http://i.imgur.com/EROSbyw.gif"} />
			</div>
		)

	}
})

//Pick up here.
 const Projectile = React.createClass({
 	_createProjectile : function(){

 	},

 	render: function(){
 		return (
 			<img src="http://i.imgur.com/Eu9WeGG.gif"/>
 		)
 	}
 })

 const TaskList = React.createClass({
	_createTask: function(model){
		return <Task updater={this.props.updater} remover={this.props.remover} taskModel={model} key={this.cid}/>
	},

	render: function() {
		// console.log(this.props.taskColl)
		return 	<div className="col-xs-6 jumbotron task-list">
					{this.props.taskColl.map(this._createTask)}				
			   	</div>
	}
})

 const Task = React.createClass({
	_deleteTask: function(){
		this.props.remover(this.props.taskModel)
	},

	_checkComplete: function(taskModel) {
      console.log("_selectStatus fired!")
      console.log(this.props.taskModel.cid)

      	if(this.props.taskModel.get('isComplete') === false){
      		this.props.taskModel.set({isComplete: true})
      		this.props.updater()
      		//pick up here  :  We have unique element id's .  now to change styles using that unique id
      		var checkedTask = document.getElementById(".task")
      		checkedTask.style.textDecoration = 'line-through'
      		console.log("Strike through")

      		console.log("New isComplete status is >> " , this.props.taskModel.get("isComplete"))

  		}
  		else {
      		this.props.taskModel.set({isComplete: false})
      		this.props.updater()
      		var uncheckedTask = document.querySelector(".task")
      		uncheckedTask.style.textDecoration = 'none'
      		console.log("New isComplete status is >> " , this.props.taskModel.get("isComplete"))
  		}
     },

	render: function(){
		var taskModel = this.props.taskModel
		var taskCid = taskModel.cid
		return (
			<div className="task" id={taskCid}>
				<p><input value={taskModel} onChange={this._checkComplete} className="checkbox" type="checkbox" />{taskModel.get("task")}<button onClick={this._deleteTask} className="btn-danger xbox"> X </button></p>
			</div>
		)
			

	}
})

 const TaskBar = React.createClass({
	render: function(){
		return(
        		<div className="todo-container">
        			<div className="row task-bar">
        				<div className="col-md-4 button-container"><button className="btn btn-lg btn-warning" onClick={this.props.viewSelector} >All</button></div>
        				<div className="col-md-4 button-container"><button className="btn btn-lg btn-info" onClick={this.props.viewSelector} >Current</button></div>
        				<div className="col-md-4 button-container"><button className="btn btn-lg btn-primary" onClick={this.props.viewSelector}>Completed</button></div>
					</div>
				</div>

		)
	}
})

 const Header = React.createClass({
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





