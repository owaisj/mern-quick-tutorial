const { Router } = require('express')
const Post = require('./model')

const router = Router();

router.get('/posts', (req, res)=> {
  Post.find({}).then(posts => {
    res.json(posts)
  })
});

router.post('/posts', (req, res) => {
  console.log(req.body)
  Post.create(req.body).then(post => {
    console.log(post)
    res.json({
      'message': 'created post',
      post
    })
  })
})

module.exports = router;
