/*----------------------------------------------------------------------------------------------------------------------------------------------------
AngularJS 1.X
A module contains the different components of an AngularJS app
A controller manages the app's data
An expression displays values on the page
A filter formats the value of an expression
------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------------------------------------------------------------------------
The CONTROLLER is always read first – it's like my normal JS file.
Handles any interaction with the user and taking data from the factory and presenting it back to user...
------------------------------------------------------------------------------------------------------------------------------------------------------*/

(function() {
     'use strict';

     /*----------------------------------------------------------------------------------------------------------------------------------------------------
     Save all inventory data into an array...
     ------------------------------------------------------------------------------------------------------------------------------------------------------*/

     angular
          .module('ohmyblog')
          .controller('blogController', function(API) {

               let vm = this;

               // alert("TEST");

               // vm.alert = function(){
               //  alert("TEST");
               // }

               /*----------------------------------------------------------------------------------------------------------------------------------------------------
               Pushes user info onto object on submit...
               ------------------------------------------------------------------------------------------------------------------------------------------------------*/
               vm.submit = function(content) {
                    vm.content = '';
                    vm.items = API.postBlog(content);
               }

               let promise = API.getBlogs();

               promise.then(function(returnedData) {
                    console.log(returnedData);
                    vm.returnedBlogs = returnedData.data.images;
               })

          })

})();
