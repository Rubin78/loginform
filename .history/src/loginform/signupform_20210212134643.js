import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";


const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
            <label for="yourName">Your Name: </label>
              <input
                label="Your name"
                id="yourName"
                // icon="user"
                // group
                type="text"
                // validate
                // error="wrong"
                // success="right"
              />
            <label for="yourEmail">Your Email: </label>
              <input
                label="Your name"
                id="yourEmail"
                // icon="user"
                // group
                type="text"
                // validate
                // error="wrong"
                // success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
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
