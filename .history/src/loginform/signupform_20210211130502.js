import React from 'react';
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function signupform(props) {
    return (
        <div>
            
<div className= "sign-up">
    <div>

        <Row>

            <Col md="12">

                </Col>
            </Row>
    </div>

        </div>
        </div>
    );
}

export default signupform;