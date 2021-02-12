import React, {useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";


const FormPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  // const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <input
                label="Your name"
                // icon="user"
                // group
                type="text"
                // validate
                // error="wrong"
                // success="right"
                value={name}
                onChange={setName(name)}
              />
              <input
                label="Your email"
                // icon="envelope"
                // group
                type="email"
                // validate
                // error="wrong"
                // success="right"
                value={email}
                onChange={setEmail(email)}
              />
              {/* <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={confirmEmail}
                onChange={setConfirmEmail(confirmEmail)}
              /> */}
              <input
                label="Your password"
                // icon="lock"
                // group
                type="password"
                validate
                value={password}
                onChange={setPassword(password)}
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
