const Client = require("../models/Client")
const Craftsman = require("../models/Craftsman")

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

module.exports.post_signup = (req, res) => {
    // Register a user

    const {email, fullName, password, accountType} = req.body
    if (accountType === 'client') {
        console.log('simple client register')
        try {
            Client.create({
                email: email,
                client_name: fullName,
                password: password
            }).then(data => {
                data ? res.end("Client was registered") :
                res.end("Error, Client wasn't registered")
            })
        } catch(e) {
            res.end("Error, Client wasn't registered")
        }
         
    } else {
        Craftsman.create({
            email: email,
            craftsman_name: fullName,
            password: password
        }).then(data => {
            data ? res.end("Craftsman was registered") :
            res.end("Error, Craftsman wasn't registered")
        })
    }
    
}