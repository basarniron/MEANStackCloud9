var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	name : String,
	isbn : String,
	author : String,	
});

module.exports = mongoose.model('Book', bookSchema);;