import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import login from "./loginform/loginform";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/loginformloginform" component={loginform} />

          <Route render={() => <h2>welcome to portfolio </h2>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
