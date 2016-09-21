import React from 'react'

export const Header = React.createClass({
	render: function(){
		return(
			<div className="jumbotron">
        		<h1>To Act!</h1>
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
