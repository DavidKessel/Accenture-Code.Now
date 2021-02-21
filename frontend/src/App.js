import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Pages/Dashboard/Dashboard.js';
import ConstructionVid from './Components/Assets/construction-video.mp4'

function App() {

  return (
    <div className="App" style={{height: '100%'}}>
      <Navigation />
      <Router>
        <Switch>
          <Route path='/' exact>
            <Dashboard />
          </Route>
          <Route path='/details' exact>
            <video src={ConstructionVid} autoPlay loop />
            <h1>This page is under construction.</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
