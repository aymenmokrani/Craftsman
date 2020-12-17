import React, { useState } from 'react'
import './loginPage.scss'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function LoginPage() {


    

    const { register, handleSubmit } = useForm()
    const [emailErr, setEmailErr] = useState('')
    const [passErr, setPassErr] = useState('')
    const history = useHistory()

    const onSubmit = async (data) => {
        try {
            const results = await axios.post('api/login', data)
            console.log(results.data);
            history.push('/search')
        }
        catch (err) {
            console.log(err.response.data);
            const errs = err.response.data
            setEmailErr(errs.email)
            setPassErr(errs.password)
        }
        
        
    }


    return (
        <div className="loginPage">
            <div className="loginBox">
                <span className="title">Log into your Account</span>
                <form action="post" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" 
                               id="email"
                               name="email"
                               style={emailErr ? {border: '1px solid red', outline: 'none'}: {}}
                               ref={register}
                               required
                               />
                        <span className="errorMessage">{emailErr}</span>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                               id="password"
                               name="password"
                               style={passErr ? {border: '1px solid red', outline: 'none'}: {}}
                               required
                               ref={register}
                               />
                        <span className="errorMessage">{passErr}</span>
                    </div>
                    <div>
                        <input type="submit" value="Hop in"/>
                    </div>
                </form>
                <div className="loginBtn">
                    <span>Don't you have an account yet? 
                        <Link to="/signup" className="signupLink">Sign Up</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
