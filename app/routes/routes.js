var express = require('express');
var Book = require('../model/book.js');


module.exports = function(app){
    var router = express.Router();
    
////*ROUTE /BOOKS *************************************************BEGIN
    router.route('/books')
    	.post(function(req,res){
    		
    		var name = req.body.name;
    		var isbn = req.body.isbn;
    		var author = req.body.author;
    		var pageSize = req.body.pageSize;
    
    		//CREATE a new book document		
    		var book = new Book({
    			name: name,
    			isbn: isbn,
    			author: author,
    			pageSize: pageSize,			
    		});
    
    		book.save(function(err, book){
    			if(err) res.send({error:err});
    			res.json({message:'Insert book operation is completed', book:book});
    		});		
    	})
    	.get(function(req,res){
    		//RETRIEVE a new book document
    		Book.find({}, function(err, books){
    			if(err) res.send({error:err});
    			res.json(books);
    		});
    	});
////*ROUTE /BOOKS *************************************************END

////*ROUTE /BOOKS/:ID *************************************************BEGIN
    router.route('/books/:id')
    	.post(function(req,res){
    		//UPDATE a single book document by id
    		var id = req.params.id;
    
    		Book.findById(id, function(err, book){
    			if(err) res.send({error:err});
    
    			var name = req.body.name;
    			var isbn = req.body.isbn;
    			var author = req.body.author;
    			var pageSize = req.body.pageSize;
    			
    			book.save(function(err, book){
    				if(err) res.send({error:err});
    				res.json({message:'Update book operation is completed', book:book});
    			});	
    		});
    	})
    	.put(function(req,res){		
    		//UPDATE a single book document by id
    		var id = req.params.id;
    
    		Book.findById(id, function(err, book){
    			if(err) res.send({error:err});
    
    			var name = req.body.name;
    			var isbn = req.body.isbn;
    			var author = req.body.author;
    			var pageSize = req.body.pageSize;
    			
    			book.save(function(err, book){
    				if(err) res.send({error:err});
    				res.json({message:'Update book operation is completed', book:book});
    			});
    		});
    	})
    	.get(function(req,res){
    		//RETRIEVE a single book document by id
    		var id = req.params.id;
    
    		Book.findById(id, function(err, book){
    			if(err) res.send({error:err});
    			res.json(book);
    		});
    	})
    	.delete(function(req,res){
    		//DELETE a single book document by id
    		var id = req.params.id;
    
    		Book.findById(id, function(err, book){
    			if(err) res.send({error:err});
    			
    			Book.remove({_id:id}, function(err, book){
    				res.json({message:'Delete book operation is completed', book:book});
    			});
    		});
    	});
////*ROUTE /BOOKS/:ID *************************************************END

    app.use('/api', router);


}