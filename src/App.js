import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
