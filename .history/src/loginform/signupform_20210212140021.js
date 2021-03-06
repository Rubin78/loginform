import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import axios from 'axios'

const FormPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("qwerty")
    axios.post('https://login-8f9f5-default-rtdb.firebaseio.com/.json', {
      name,
      email,
      password,
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      clg
    })

  }
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          setPassword
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            setPassword
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
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
