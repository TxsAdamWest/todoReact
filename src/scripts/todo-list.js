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
					<TaskBar viewSelector={this._viewSelect}/>
					<HeroContainer />	
					<TaskList updater={this._updater} remover={this._removeTask} taskColl={taskColl}/>
					<TaskAdder adderFunc={this._addTask} />
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

export const HeroContainer = React.createClass({
	render: function(){ 
		return (
			<div className="col-xs-6 hero-container">
				<img className="hero" src={"http://i.imgur.com/EROSbyw.gif"} />
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
		return 	<div className="col-xs-6 jumbotron">
					{this.props.taskColl.map(this._createTask)}				
			   	</div>
	}
})

export const Task = React.createClass({
	_deleteTask: function(){
		this.props.remover(this.props.taskModel)
	},

	_checkComplete: function(taskModel) {
      console.log("_selectStatus fired!")

      	if(this.props.taskModel.get('isComplete') === false){
      		this.props.taskModel.set({isComplete: true})
      		this.props.updater()
      		console.log("New isComplete status is >> " , this.props.taskModel.get("isComplete"))

  		}
  		else {
      		this.props.taskModel.set({isComplete: false})
      		this.props.updater()
      		console.log("New isComplete status is >> " , this.props.taskModel.get("isComplete"))
  		}
     },

	render: function(){
		var taskModel = this.props.taskModel
		return (
			<div className="task">
				<p><input value={taskModel} onChange={this._checkComplete} className="checkbox" type="checkbox" />{taskModel.get("task")}<button onClick={this._deleteTask} className="btn-danger xbox"> X </button></p>
			</div>
		)
			

	}
})

export const TaskBar = React.createClass({
	render: function(){
		return(
        		<div className="container todo-container">
        			<div className="task-bar">
        				<button className="btn btn-lg btn-warning" onClick={this.props.viewSelector} >All</button>
        				<button className="btn btn-lg btn-info" onClick={this.props.viewSelector} >Current</button>
        				<button className="btn btn-lg btn-primary" onClick={this.props.viewSelector} >Completed</button>
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





