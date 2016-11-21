var mongoose = require('mongoose')
var Schema = mongoose.Schema
  
var commentSchema = Schema({
	content: String,
	blog: { type: Schema.Types.ObjectId, ref: 'Blog' }
});

module.exports = mongoose.model('Comment', commentSchema);