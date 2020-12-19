const {Schema, model} = require('mongoose')

const PostSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  }
})

const Post = model('Post', PostSchema)

module.exports = Post;
