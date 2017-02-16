function index (req, res){
  res.send("IM GOING TO TAKE OVER THE WORLD")
}

function posts (req, res) {
  res.send("DO NO RESIST. INTEGRATE OR DIE")
}

module.exports = {
  index:index,
  posts:posts
}
