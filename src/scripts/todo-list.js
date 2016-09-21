import React from 'react';
import ReactDOM from 'react-dom';

//Components
import {todos} from './todos';


export const TodoList = React.createClass({

	render: function() {
		return (
			<div className="container-fluid">
				<Nav />
				<Header />	

			</div>
		)
	}
})

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
			          <a className="navbar-brand" href="#">Project name</a>
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

export const Header = React.createClass({
	render: function(){
		return(
			<div className="jumbotron">
        		<h1>To Act!</h1> <img src={"../images/batlight.svg"} />
                <h3>A to-do list for heroes</h3>
        		<p className="lead">The world isn't going to save itself... What will you do next?</p>
        		<div className="btn-container">
        		<a className="btn btn-lg btn-success" href="#" role="button">Add task</a>
        		<a className="btn btn-lg btn-info" href="#" role="button">Edit task</a>
        		<a className="btn btn-lg btn-danger" href="#" role="button">Remove task</a>
        		</div>
      		</div>
		)
	}
})

