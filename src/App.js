import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Landing, Questions } from "./view";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/quiz" component={Questions} />
      </Switch>
    </Router>
  );
}
