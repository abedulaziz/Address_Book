import React from 'react'
import Head from "react-helmet";

import Input from './pages/form_components/input'

const SignIn = () => {

  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="description" content="Free surveys creator" />
      <meta name="author" content="Abdul Aziz Kharraz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Surveys Builder - Sign-in</title>
    </Head>

    <main>

      <div className="sign-in">
        <div className="container">
          <div className="form_wrapper">
            <form id="loginUserForm">

              <h1>Sign In</h1>
              <p className='subtitle'>Sign-in and access your contacts</p>
              <Input className="email" type="text" name="email" placeholder="Email" />
              <Input className="password" type="password" name="password" placeholder="Password" />
              <div className="submit">
                <input id="login" type="button" value="Log in" />
              </div>

            </form>
          </div>
        </div>
      </div>
    </main>


  </>
  )
}

export default SignIn