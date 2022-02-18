import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Company from "./pages/Company";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <div className="geral">
        <Switch>
          <Route exact path="/customer/:id">
            <Customer />
          </Route>
          <Route exact path="/company/:id">
            <Company />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
