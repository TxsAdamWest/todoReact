// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"


import DOM from 'react-dom'
import React, {Component} from 'react'
import Backbone from 'backbone'

function app() {
    // start app
    // new Router()

    var GoalModel = Backbone.Model.extend({

     defaults: {
      status: "haven't started",
      priority: "normal"
     },

     initialize: function(newGoal) {
      this.set({goal: newGoal})
     }
    })

    var GoalCollection = Backbone.Collection.extend({
     model: GoalModel
    })

    var GoalView = React.createClass({

     _addGoal: function(goal) {
      this.state.goalColl.add(new GoalModel(goal))
      this._updater()

     },

     _genButtons: function() {
      var buttons = ["all", "haven't started", "in progress", "complete"].map(function(goalType){
       return <button className="gen-button" onClick={this._filterView} value={goalType}>{goalType}</button>
      }.bind(this))
      return buttons
     },

     _filterView: function(event) {
      var buttonView = event.target.value
      this.setState({
       viewType: buttonView
      })

     },

     _removeGoal: function(model) {
      this.state.goalColl.remove(model)
      this._updater()
     },

     _updater: function() {
      this.setState({
       goalColl: this.state.goalColl
      })
     },

     getInitialState: function() {
      return {
       goalColl: this.props.goalColl,
       viewType: "all"
      }

     },

     render: function() {
      //console.log("this is Goal View:")
      //console.log(this)
      var goalColl = this.state.goalColl
      if(this.state.viewType === "haven't started") goalColl = goalColl.where({status: "haven't started"})
      if (this.state.viewType === "in progress") goalColl = goalColl.where({status: "in progress"})
      if (this.state.viewType === "complete") goalColl = goalColl.where({status: "complete"})
      return (
        <div className="goalView">
         {/*<div className="header">
         <p className="title">Goal-Builder</p>
         </div>*/}

         <div className="buttons">{this._genButtons()}</div>
         <GoalAdder adderFunc={this._addGoal} />
         <GoalList updater={this._updater} goalColl={goalColl} remover={this._removeGoal}/>
       </div>
      )
     }
    })

    var GoalAdder = React.createClass ({

     _handleKeyDown: function(keyEvent) {
      if (keyEvent.keyCode === 13) {
       var goalEntry = keyEvent.target.value
       keyEvent.target.value = ""
       //console.log(goalEntry)
       this.props.adderFunc(goalEntry)
      }

     },

     render: function() {
      //console.log("Here comes GoalAdder:")
      //console.log(this)
      return <input onKeyDown={this._handleKeyDown} />
     }
    })

    var GoalList = React.createClass({

     _makeGoal: function(model) {
      return <Goal updater={this.props.updater} goalModel={model} remover={this.props.remover}/>
     },

     render: function() {
      //console.log ("Here comes Goal List:")
      //console.log(this)
      return(
       <div className="goalList">
        {this.props.goalColl.map(this._makeGoal)}
       </div>
      )
     }
    })

    var Goal = React.createClass ({

     _selectStatus: function(event) {
      var newStat = event.target.value
      this.props.goalModel.set({status:newStat})
      this.props.updater()
     },

     _removeWithClick: function() {
      this.props.remover(this.props.goalModel)
     },

     render: function() {
      var goalModel = this.props.goalModel
      //console.log("This is your Goal:")
      //console.log(this.props.goalModel)
      return <div className="goal">
        <p>{goalModel.get("goal")}</p>
        <p>{goalModel.get("status")}</p>
        <select onChange={this._selectStatus}>
         <option value="">change status</option>
         <option value="haven't started">haven't started</option>
         <option value="in progress">in progress</option>
         <option value="complete">complete</option>
        </select>
        <button className="x-button" onClick={this._removeWithClick}>X</button>
          </div>
     }
    })

    var GoalRouter = Backbone.Router.extend({
     routes: {
      "*default": "home"
     },

     home: function() {
      DOM.render(<GoalView goalColl={new GoalCollection()}/>, document.querySelector('.container'))
     },

     initialize: function() {
            Backbone.history.start()
        }
    })

    var gr = new GoalRouter()

}

app()