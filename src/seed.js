'use strict';

var Todo = require('./models/todo.js');

var todos = [
	"Learn more about Angular",
	"Learn to use Sass",
	"Get a job",
	"Rent a flat"
]

todos.forEach(function(todo, index) {
	Todo.find({'name': todo}, function(err, todos) {
		if(!err && !todos.length) {
			Todo.create({completed: false, name: todo});
		};
	});
});