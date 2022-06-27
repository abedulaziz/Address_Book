import React, {useState, useRef} from 'react'
import Head from "react-helmet";
import { Link } from 'react-router-dom';
import axios from 'axios';

import Input from './form_components/input';

const SignUp = () => {

  const fname =useRef(null);
  const lname =useRef(null);
  const email = React.createRef()
  const password = React.createRef()
  const password_confirm = React.createRef()
  const phone_num = React.createRef()
  const gender =useRef(null);
  const dob = React.createRef()

  const submitForm = async(e) => {
    e.preventDefault();
    try {
      const registerReq = await axios({
        method: "POST",
        url: "http://localhost:5000/api/users/register",
        body: {
          name: fname.current.value,
          email: email.current.value,
          password: password.current.value,
          phone_number: phone_num
        }
      })

      console.log(registerReq)
    }
    catch(err){
      console.error(err);

    } 
  }

  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="description" content="Free surveys creator" />
      <meta name="author" content="Abdul Aziz Kharraz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Surveys Builder - Sign-up</title>
    </Head>

    <main className='centered'>

      <div className="sign-up">
        <div className="container">
          <div className="form_wrapper">
            <form id="registerUserForm">

              <h1>Sign Up</h1>
              <p className='subtitle'>Sign-up and create your contacts</p>
              <div className="username">
                <input ref={fname} type="text" name="fname" placeholder="First name" max="30" />
                <input ref={lname} type="text" name='lname' placeholder="Last name" max="30" />
              </div>
              <Input ref={email} className="email" type="text" name="email" placeholder="Email" />

              <Input ref={password} className="password" type="password" name="password" placeholder="Password" />

              <Input ref={password_confirm} className="password_confirmation" type="password" name="password_confirmation" placeholder="password_confirmation" />
              <Input ref={phone_num} className="phone_number" type="text" name="phone_number" placeholder="Phone Number" />

              <div className="gender">
                <select name="gender" id="gender" ref={gender}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <Input ref={dob} className="dob" type="date" name="date_of_birth" />

              <div className="submit">
                <input id="register" type="button" value="Register" onClick={submitForm}/>
              </div>
              <p className='redirect'>Already have an existing account? <Link to="/">sign-in</Link></p>

            </form>
          </div>
        </div>
      </div>
    </main>


  </>
  )
}

export default SignUp