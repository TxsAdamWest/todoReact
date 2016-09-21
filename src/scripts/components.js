import React from 'react'

const todos = [
{
	task: 'Get swole af',
	done: false
},
{
	task: 'Get money',
	done: false
}

]

export const Header = React.createClass({
		render: () => {
			return <h3>React ToDo's</h3>
		}
})

