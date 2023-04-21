exports.global = (req, res, next) => {
    console.log('middleware b4')
    next()
}

exports.after = (req, res, next) => {
    console.log('middleware after')
    next()
}