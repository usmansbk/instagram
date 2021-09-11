import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
