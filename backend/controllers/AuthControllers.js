const Client = require("../models/Client")
const Craftsman = require("../models/Craftsman")
const jwt = require('jsonwebtoken')


const handleErrors = (err) => {
    console.log(err.message);
    const errors = {email: '', username: '', password: ''}

    // incorrect email
    if (err.message === "incorrect email") { errors.email = err.message }
    // incorrect password
    if (err.message === "incorrect password") { errors.password = err.message }

    //duplicate errors
    if (err.code === 11000) {
        errors.email = "This email is already registered !!"
        return errors
    } 
    // validation errors
    if (err.message.includes('validation failed')) {
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message
        })
    }
    return errors
    

}

const maxAge = 3 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, 'craftsman token secret', {
        expiresIn: maxAge
    })
}


module.exports.get_login = (req, res) => {
    res.send("login Page")
}

module.exports.get_signup = (req, res) => {
    res.send("login Page")
}

module.exports.post_login = async (req, res) => {
    // Test a user
    const { email, password} = req.body
    try {
        const user = await Client.login(email, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { maxAge: maxAge * 1000, httpOnly: true })
        res.status(200).json({ user: user._id })
    }
    catch (errors) {
        res.status(400).json(handleErrors(errors))
    }
}

module.exports.post_signup = async (req, res) => {
    // Register a user
    const {email, fullName, password, accountType} = req.body
    let user = {email: email, user_name: fullName, password: password}

    if (accountType === 'client') {        
        try {
            const newUser = await Client.create(user)
            const token = createToken(newUser._id)
            res.cookie('jwt', token, {maxAge: maxAge * 1000,httpOnly: true})
            res.json({ user : newUser._id })

        } catch(err) {
            const errors = handleErrors(err)
            res.status(400).json({errors})
        }
         
    } else if(accountType === 'craftsman') {
        try {
            const newUser = await Craftsman.create(user)
            const token = createToken(newUser._id)
            res.cookie('jwt', token, { maxAge: maxAge * 1000, httpOnly: true })
            res.json({ user: newUser._id })

        } catch(err) {
            const errors = handleErrors(err)
            res.status(400).json({errors})
        }
    } else {
        res.status(400).send("wrong user type specified")
    }
    
}