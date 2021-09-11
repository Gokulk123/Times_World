import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <PrivateRoute exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
