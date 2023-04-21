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

exports.checker = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')
    }
}

exports.csrf = (req, res, next) => {
    res.locals.csrf = req.csrfToken()
    next()
}