const userController = {
    register: (req, res) => {
        res.render('register')
    },
    getLogin: (req, res) => {
        res.render('login')
    },
    postLogin: (req, res) => {
        res.redirect('/home')
    }
}

module.exports = userController