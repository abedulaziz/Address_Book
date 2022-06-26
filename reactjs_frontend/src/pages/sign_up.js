import React from 'react'
import Head from "react-helmet";

import Input from './form_components/input'

const SignUp = () => {

  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="description" content="Free surveys creator" />
      <meta name="author" content="Abdul Aziz Kharraz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Surveys Builder - Sign-up</title>
    </Head>

    <main>

      <div className="sign-in">
        <div className="container">
          <div className="form_wrapper">
            <form id="loginUserForm">

              <h1>Sign Up</h1>
              <p className='subtitle'>Sign-up and create your contacts</p>
              <div className="username">
                <input type="text" name="fname" placeholder="First name" max="30" />
                <input type="text" name='lname' placeholder="Last name" max="30" />
              </div>
              <Input className="email" type="text" name="email" placeholder="Email" />

              <Input className="password" type="password" name="password" placeholder="Password" />

              <Input className="password_confirmation" type="password" name="password_confirmation" placeholder="password_confirmation" />

              <div className="gender">
                <select name="gender" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
              <Input className="dob" type="date" name="date_of_birth" />

              <div className="submit">
                <input id="register" type="button" value="Register" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </main>


  </>
  )
}

export default SignUp