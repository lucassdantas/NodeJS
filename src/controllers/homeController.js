const HomeModel = require('../models/HomeModel')

HomeModel.create({
  titulo: "teste",
  descricao: "descricao"
}).then(d => console.log(d))
  .catch(e => console.log(e))


exports.paginaInicial = (req, res, next) => {
  res.render('index');
  console.log('oi')
  next()
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou sua nova rota de POST.');
};
