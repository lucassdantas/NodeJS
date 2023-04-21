exports.paginaInicial = (req, res, next) => {
  res.render('index');
  console.log('oi')
  next()
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
