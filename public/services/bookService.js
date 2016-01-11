angular.module('BookService', []).factory('Book', ['$http','$q', function($http,$q){
    
    return{
      
      getAll:function() {
          var deferred = $q.defer();
          $http.get('api/books')
            .success(function(data){
                console.log(data);
                deferred.resolve(data);
            })
            .error(function(err){
               console.log(err);
               deferred.reject(err);
            });
            
            return deferred.promise;
      },
      get:function(id) {
          var deferred = $q.defer();
          $http.get('api/books/' + id)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(err){
               deferred.reject(err);
            });
            
            return deferred.promise;
      },
      create:function(book){
          var deferred = $q.defer();
          $http.post('api/books/', book)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(err){
               deferred.reject(err);
            });
            
            return deferred.promise;
      },
      update:function(id, book){
          var deferred = $q.defer();
          $http.put('api/books/' + id, book)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(err){
               deferred.reject(err);
            });
            
            return deferred.promise;
      },
      del:function(id){
          var deferred = $q.defer();
          $http.delete('api/books/' + id)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(err){
               deferred.reject(err);
            });
            
            return deferred.promise;
      }
      
    };
    
}]);