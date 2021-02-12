import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";


const FormPage = () => {
  const [name, setName] = useState("")
  const [name, setEmail] = useState("")
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
            <label for="name">Name: </label>
              <input
                label="Your name"
                id="name"
                // icon="user"
                // group
                type="text"
                // validate
                // error="wrong"
                // success="right"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            <label for="email">Email: </label>
              <input
                label="Your name"
                id="email"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            <label for="password">Password: </label>
              <input
                label="Your name"
                id="password"
                // icon="user"
                // group
                type="text"
                // validate
                // error="wrong"
                // success="right"
              />
            </div>
            <div className="text-center">
              {/* <li>
                <Link to="/login" onClick={this.gotosignupform}>
                  Login
                </Link>
              </li> */}
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
