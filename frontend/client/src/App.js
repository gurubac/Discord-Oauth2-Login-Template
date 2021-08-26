import "./App.css";
import Login from './components/login';
import Home from './components/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Switch>
          <Route path ="/login">
            <Login/>
          </Route>
        </Switch>

        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;