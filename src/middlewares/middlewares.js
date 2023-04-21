exports.global = (req, res, next) => {
    res.locals.variavel = 'variaveeeel!!!!'
    res.locals.teste123 = 'teste123'
    console.log('middleware b4')
    next()
}

exports.after = (req, res, next) => {
    console.log('middleware after')
    next()
}