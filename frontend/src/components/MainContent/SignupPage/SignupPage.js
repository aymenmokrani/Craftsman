import React from 'react'
import './signupPage.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function SignupPage() {

    const { register, handleSubmit} = useForm()


    const onSubmit = (data) => {
        axios.post('api/signup', data)
            .then(result => console.log(result.data))
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
                               ref={register} 
                               required/>
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
                               ref={register} 
                               required/>
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
