const express = require('express') // server
const app = express() // app is using express
const cors = require('cors')
const bodyParser = require('body-parser')
const User = require('./models/user')
const Blog = require('./models/blog')
const Comment = require('./models/comment')

// grab the user model
var mongoose = require('mongoose'); // database
mongoose.connect('mongodb://KBedgood:test@ds159497.mlab.com:59497/ohmyblog');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
     extended: true
}));


// RETURN aka GET blogs
app.get('/blogs', function(req, res) {
     let find = Blog
          .find()
          .populate("comments")
          .exec((err, blog) => {
               if (err) return res.send(err);
               res.json(blog);
          });
})


// ADD aka BLOG new
// Anytime you are trying to get something out of the request use .body (example: inside Postman)
app.post('/blogs', function(req, res) {

    let blog = new Blog({
    title:req.body.title,
    description:req.body.description,
  });
    
  blog.save((err) => {
    if (err) {
      res.send({error:err});
      return;
    } ;
    res.send({success:"yay"})
  });
})

app.post('/comment', function(req, res) {

    let comment = new Comment({
    content:req.body.content,
    blog:"5833449824c556239da51384",
  });
    
  comment.save((err) => {
    if (err) {
      res.send({error:err});
      return;
    } ;
let post = Blog.findById('5833449824c556239da51384',function(err, blog){
  blog.comments.push(comment);
  blog.save();
  res.send({success:"yay"})
})

  });
})

//DELETE a user
app.post('/user/delete', function(req, res) {
     let obj = req.body.id;
     console.log(obj);
     // get the user 
     User.findByIdAndRemove(obj, function(err, user) {
          if (err) throw err;
          User.
          find().
          exec(function(err, response) {
               res.json(response);
          });



     });
});



// app.post('/user/delete', function(req, res) {

//      let id = req.body.id; //find the id it was sending over out of the params – id can be taco: name it whatever you want to name it

//      id = parseInt(id); //converts a string to an integer
//      let spotInArray = null;

//      users.forEach(function(item, index) { //loop through each user to see if id of user matches the user we were looking for
//           if (item.id == id) {
//                spotInArray = index;
//           }
//      })
//      users.splice(spotInArray, 1) //removes matching user from the array
//      res.json(users); //returns the updated array
// });

app.listen(3009, function() {
     console.log('Example app listening on port 3009!')
})
