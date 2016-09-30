import Backbone from 'backbone';

//Models
export const TaskModel = Backbone.Model.extend({

	defaults: {
		status: 'Underway'
	},

	initialize: function(newTask) {
		this.set({task: newTask})
	} 
})

//Collection
export const TaskCollection = Backbone.Collection.extend({
	model: TaskModel
})
