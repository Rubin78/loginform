import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
const FormPage = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('https://login-8f9f5-default-rtdb.firebaseio.com/.json', {
      name,
      email,
      password,
    }).then(response => {
      toast("User Created!")
      setTimeout(function(){props.history.push("/loginform")
        
      , 3000);
    }).catch(error => {
      toast("Sign up failed");
    })

  }

  console.log(props)
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <label for="name">Name: </label>
              <input
                required
                label="Your name"
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label for="email">Email: </label>
              <input
                required
                label="Your name"
                id="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="password">Password: </label>
              <input
                required
                label="Your name"
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="text-center">
              <input type="submit" value="Sign up" />
            </div>
            <ToastContainer />
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
