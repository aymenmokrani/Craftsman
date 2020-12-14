const { Router } = require('express')
const authControllers = require('../controllers/AuthControllers')


const authRoutes = Router()

authRoutes.get('/login', authControllers.get_login)
authRoutes.get('/signup', authControllers.get_signup)

authRoutes.post('/login', authControllers.post_login )
authRoutes.post('/signup', authControllers.post_signup )

module.exports = authRoutes