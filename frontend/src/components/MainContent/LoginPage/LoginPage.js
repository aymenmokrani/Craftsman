import React from 'react'
import './loginPage.scss'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function LoginPage() {


    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        console.log("submitted");
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
                               ref={register}
                               required
                               />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" 
                               id="password"
                               name="password"
                               required
                               ref={register}
                               />
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
