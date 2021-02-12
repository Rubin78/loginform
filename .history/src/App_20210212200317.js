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
          <Route exact path="/signup" component={signupform} />
          <Route exact path="/" component={loginform} />
          <Route exact path="/home" render={() => <h2>welcome to portfolio </h2>} />

          <Route  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;