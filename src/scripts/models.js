import Backbone from 'backbone';

//Models
export const TaskModel = Backbone.Model.extend({

	defaults: {
		isComplete: false
	},

	initialize: function(newTask) {
		this.set({task: newTask})
	} 
})

//Collection
export const TaskCollection = Backbone.Collection.extend({
	model: TaskModel
})
