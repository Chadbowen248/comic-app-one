import React from "react";
import logo from './logo1.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fa } from '@fortawesome/free-solid-svg-icons'

const SignIn = (props) => (
    <div className='sign-in-screen'>
        <h1 className='sign-in-screen__content'> Not Date Night Movies</h1>
        <button className='button' onClick={props.signIn}>Sign In
          <img className='sign-in-screen__logo' src={logo} alt=""/>
        </button>
    </div>
)

export default SignIn