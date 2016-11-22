/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The FACTORY manipulates data (adding / deleting to array, marking as complete...)
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
     'use strict';

     angular
          .module('ohmyblog')
          .factory('API', function($http) {


               const getBlogs = function() {
                    var promise = $http({
                         method: 'GET',
                         url: 'http://localhost:3009/blogs'
                    });
                    return promise;
               }


               // const getSingleImage = function(id) {
               //      var promise = $http({
               //           method: 'GET',
               //           headers: { 'X_CSRF_TOKEN': 'kristie' },
               //           url: `http://instagramcloneclass.herokuapp.com/images/${id}`,
               //      });
               //      return promise;
               // }


               const postBlog = function(newBlog) {
                    var promise = $http({
                         method: 'POST',
                         data: newBlog,
                         url: 'http://localhost:3009/blogs'
                    });
                    return promise;
               }

                    const postComment = function(comment) {
                    var promise = $http({
                         method: 'POST',
                         data: comment,
                         url: 'http://localhost:3009/comment'
                    });
                    return promise;
               }

               // Like Image:
               // Type: POST
               // URL: http://instagramcloneclass.herokuapp.com/images/vote
               // Data: imageid
               // const likeImage = function(imageid) {
               //      var promise = $http({
               //           method: 'POST',
               //           data: imageid,
               //           headers: { 'X_CSRF_TOKEN': 'kristie' },
               //           url: 'http://instagramcloneclass.herokuapp.com/images/vote',
               //      });
               //      return promise;
               // }

               return {
                    getBlogs,
                    postBlog,
                    postComment
               }
          });

})();
