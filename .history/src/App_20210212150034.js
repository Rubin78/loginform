import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loginform from "./loginform/loginform";
import signupform from "./loginform/signupform";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/loginform" component={loginform} />
          <Route exact path="/" component={signupform} />

          <Route render={() => <h2>welcome to portfolio </h2>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;