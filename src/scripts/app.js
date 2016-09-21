import React from 'react'
import ReactDOM from 'react-dom'

//Components
import {Header} from './todo-header'
import {TodoList} from './todo-list'

const app = function() {

	ReactDOM.render(<Header />,document.querySelector('.app-container'))
}

app()