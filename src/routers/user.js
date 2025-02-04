const express = require('express')
const routers = express.Router()
const userController = require('../controller/user')
const uploadAvatarMiddleware = require('../middlewares/uploadAvatarMiddleware')
const validationsRegister = require('../middlewares/validateRegisterMiddleware')
const validationsLogin = require('../middlewares/validateLoginMiddleware')
const validationsEditUser = require('../middlewares/validateEditUserMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')

/* LOGIN */
routers.get('/login', guestMiddleware, userController.getLogin)
routers.post('/login', guestMiddleware, validationsLogin, userController.postLogin)

/* REGISTER */
routers.get('/register', guestMiddleware, userController.getRegister)
routers.post('/register', guestMiddleware, uploadAvatarMiddleware.single('avatar'), validationsRegister, userController.postRegister)

/* EDIT PROFILE */
routers.get('/list', authMiddleware, userController.findAll)
routers.get('/edit', authMiddleware, userController.getEdit)
routers.put('/edit', authMiddleware, uploadAvatarMiddleware.single('avatar'), validationsEditUser, userController.putEdit)

routers.get('/logout', authMiddleware, userController.logout)

routers.delete('/delete', authMiddleware, userController.delete)

routers.delete('/:id/admin-delete', authMiddleware, userController.adminDelete)


/* FORGOT PASSWORD */
routers.use('/forgot-password', require('./forgotPassword'))


module.exports = routers