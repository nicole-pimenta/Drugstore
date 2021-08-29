import { Switch, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import PageNotFound from "../components/PageNotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
