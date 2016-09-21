import React from 'react'
import ReactDOM from 'react-dom'

//Components
import {Header} from './components'
import {TodoList} from './components'

const app = function() {

	ReactDOM.render(<Header/>,document.querySelector('.container'))
}

app()