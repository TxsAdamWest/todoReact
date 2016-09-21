import Backbone from 'backbone';

//models go here

export const TaskModel = Backbone.Model.extend({

	defaults: {
		status: 'Underway'
	},

	initialize: function(newTask) {
		this.set({task: newTask})
	} 
})

export const TaskCollection = Backbone.Collection.extend({
	model: TaskModel
})
