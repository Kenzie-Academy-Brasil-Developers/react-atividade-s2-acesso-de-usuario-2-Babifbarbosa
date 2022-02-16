
import './App.css';
import {Switch, Route} from "react-router-dom"
import Home from './components/Home';
import Customer from './components/Customer';
import Company from './components/Company';


function App() {
 
  return (
    <div className="App">
      <header className="App-header"></header>
     
    <div className='geral'>
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
