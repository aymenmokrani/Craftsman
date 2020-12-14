import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SearchPage from './SearchPage'
import LoginPage from './LoginPage/LoginPage'
import SignupPage from './SignupPage/SignupPage'

function MainContent() {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/">
                    <SearchPage />
                </Route>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/signup">
                    <SignupPage />
                </Route>
            </Switch>
            
      </div>
    )
}

export default MainContent
