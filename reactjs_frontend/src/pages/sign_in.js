import React from 'react'
import Head from "react-helmet";

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
              <div className="email">
                <input type="text" name="email" placeholder="Email" max="100" />
              </div>
              <div className="password">
                <input type="password" name="password" placeholder="Password" max="100" />
              </div>
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