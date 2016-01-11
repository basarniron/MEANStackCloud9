angular.module('bookApp').controller('mainController',function($scope, Book){

    $scope.books = [];
    $scope.activeBookItem = {};
    $scope.showDetailsForm = false;
    $scope.showCreateForm = false;
    
    $scope.getAllBooks = function(){
        Book.getAll()
        .then(function(data){
           $scope.books = data; 
        },
        function(err){
         console.log("Could not load book");   
        });
    }
    
    $scope.getAllBooks();
    
    $scope.createBook = function(data)
    {
        Book.create(data)
        .then(function(data){
            console.log("Book is created");
            $scope.getAllBooks();
        },
        function(err){
            console.log("Could not create book");   
        })
    }
    
    
    $scope.updateBook = function(bookItem)
    {
        Book.update(bookItem._id, bookItem)
        .then(function(data){
            console.log("Book is update");
            $scope.books.concat(data);
            $scope.activeBookItem = {};
            $scope.showDetailsForm = false;
        },
        function(err){
            console.log("Could not update book"); 
            $scope.activeBookItem = {};
            $scope.showDetailsForm = false;
        })
    }
    
    $scope.deleteBook = function(bookItem)
    {
        console.log('Delete book');
        
        Book.del(bookItem._id)
        .then(function(data){
            console.log("Book is deleted");
            $scope.getAllBooks();
        },
        function(err){
            console.log("Could not delete book"); 
        })
        
        $scope.activeBookItem = {};
        $scope.showDetailsForm = false;
    }
    
    $scope.showDetails = function(bookItem){
        $scope.activeBookItem = bookItem;
        $scope.showDetailsForm = true;
    }
    
});