import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Forgot from "./components/forgot";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/forgot" component={Forgot} />
        <Route path="/signup" component={Signup} />
        <Route path="/i" component={Home} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
