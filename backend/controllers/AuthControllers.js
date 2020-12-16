const Client = require("../models/Client")
const Craftsman = require("../models/Craftsman")


const handleErrors = (err) => {
    let obj = {}
    const errors = {email: '', username: '', password: ''}

    //duplicate errors
    if (err.code === 11000) {
        errors.email = "email is alredy registered"
        return errors
    } 
    

    // validation errors
    err.message.includes('validation failed') &&
    Object.values(err.errors).forEach(({properties}) => {
        errors[properties.path] = properties.message
    })
    return errors

}


module.exports.get_login = (req, res) => {
    res.send("login Page")
}

module.exports.get_signup = (req, res) => {
    res.send("login Page")
}

module.exports.post_login = (req, res) => {
    // Test a user
    const { email, password} = req.body
    Client.findOne({email: email, password: password}).then(data => {
        if(data) { 
            res.end("Client was found, Gracias!")
        } else {
        Craftsman.findOne({email: email, password: password}).then(data => {
            if(data) { 
                res.end("Craftsman was found, Gracias!")
            } else {
                res.end("There is no such a user")
            }
            
        })
        }
    })
}

module.exports.post_signup = async (req, res) => {
    // Register a user
    const {email, fullName, password, accountType} = req.body
    let user = {email: email, user_name: fullName, password: password}

    if (accountType === 'client') {        
        try {
            const newUser = await Client.create(user)
            res.status(201).json(newUser)
        } catch(err) {
            const errors = handleErrors(err)
            res.json({errors})
        }
         
    } else if(accountType === 'craftsman') {
        try {
            const newUser = await Craftsman.create(user)
            res.status(201).json(newUser)
        } catch(err) {
            const errors = handleErrors(err)
            res.json({errors})
        }
        
    } else {
        res.status(400).send("wrong user type specified")
    }
    
}