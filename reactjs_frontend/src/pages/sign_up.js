import React, {useEffect, useRef} from 'react'
import Head from "react-helmet";
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import Input from './form_components/input';

const SignUp = () => {

  const formRef =useRef(null);
  const name =useRef(null);
  const email = React.createRef()
  const password = React.createRef()
  const password_confirm = React.createRef()
  const phone_num = React.createRef()


  const submitForm = async(e) => {

    const password = formRef.current.querySelector(".password input")
    const password_confirm = formRef.current.querySelector(".password_confirmation input")

    const inputs = formRef.current.querySelectorAll("input:not(#register)")
    console.log(inputs)
    for (let input of inputs) {
      if (!input.value) return alert(`Please fill-in ${input.name} field.`)
    }

    if (password.value !== password_confirm.value) {
      return alert("Make sure your password and password confirmation are equal.")
    }

    console.log(inputs)
        
    const formData = {
      name: formRef.current.querySelector(".username input").value,
      email: formRef.current.querySelector(".email input").value,
      password: formRef.current.querySelector(".password input").value,
      phone_number: formRef.current.querySelector(".phone_number input").value,
      contacts: []
    }

    e.preventDefault();
    try {
      console.log(JSON.stringify(formData));

      const registerReq = await axios.post(
        "http://localhost:5000/api/users/register",
        JSON.stringify(formData),
        {headers: {"content-type": "application/json"}}
        
      )
      console.log(registerReq)
      window.location.href = "http://localhost:3000/contacts";
      
    }
    catch(err){
      console.error(err);
      alert(err.response.data.message)

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
            <form ref={formRef} id="registerUserForm">

              <h1>Sign Up</h1>
              <p className='subtitle'>Sign-up and create your contacts</p>
              <div className="username">
                <input ref={name} type="text" name="name" placeholder="Name" max="30" />
              </div>
              <Input ref={email} className="email" type="text" name="email" placeholder="Email" />

              <Input ref={password} className="password" type="password" name="password" placeholder="Password" />

              <Input ref={password_confirm} className="password_confirmation" type="password" placeholder="password_confirmation" name="password confirmation"/>
              <Input ref={phone_num} className="phone_number" type="tel" name="phone_number" placeholder="Phone Number" />

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