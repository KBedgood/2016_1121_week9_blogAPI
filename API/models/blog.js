var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  
const blogSchema = Schema({
  title    : {
  	type: String,
  	required:true,
  },
  description: {
  	type: String,
  	required: true,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});


module.exports = mongoose.model('Blog', blogSchema);