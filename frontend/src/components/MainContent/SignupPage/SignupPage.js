import React, { useState } from 'react'
import './signupPage.scss'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function SignupPage() {

    let history = useHistory()

    const { register, handleSubmit} = useForm()
    const [emailErr, setEmailErr] = useState('')
    const [passErr, setPassErr] = useState('')

    const onSubmit = async (data) => {
        setEmailErr('')
        setPassErr('')
        try {
            const results = await axios.post('api/signup', data)
            console.log(results.data);
            history.push('/search')
        }
        catch (err) {
            const errs = err.response.data.errors
            console.log(errs);
            setEmailErr(errs.email)
            setPassErr(errs.password)
        }
        
    }

    return (
        <div className="signupPage">
            <div className="signupBox">
                <span className="title">Create an Account</span>
                <form action="post" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                               id="email" 
                               name="email" 
                               style={emailErr ? {border: '1px solid red', outline: 'none'}: {}}
                               ref={register} 
                               required/>
                        <span className="errorMessage">{emailErr}</span>
                    </div>
                    <div>
                        <label htmlFor="fullName">Full name</label>
                        <input type="text" 
                               id="fullName" 
                               name="fullName" 
                               ref={register} 
                               required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                               id="password" 
                               name="password" 
                               minLength = {6}
                               style={passErr ? {border: '1px solid red', outline: 'none'}: {}}
                               ref={register} 
                               required/>
                        <span className="errorMessage">{passErr}</span>
                    </div>
                    <div>
                        <label htmlFor="userType">Account Type</label>
                        <select id="userType" 
                                defaultValue="client" 
                                name="accountType" 
                                ref={register} 
                                required>
                            <option value="client">Client</option>
                            <option value="craftsman">Crafts man</option>
                        </select>
                    </div>
                    <div>
                        <input type="submit" value="Create Account"/>
                    </div>
                </form>
                <div className="loginBtn">
                    <span>Already have an account? 
                    <Link to="/login" className="loginLink">Log in</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SignupPage
