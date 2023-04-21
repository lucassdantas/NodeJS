


exports.paginaInicial = (req, res, next) => {
  //req.flash('oi', 'ooooooooooo')
  res.render('index', {
    title: 'Home'
  });
  req.session.user = 'lucas'
  console.log(req.session)
  next()
};

exports.trataPost = (req, res) => {
  res.send(req.nome);
};
