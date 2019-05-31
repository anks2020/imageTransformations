import React from 'react';
import HomeScreen from './containers/Screens/HomeScreen';
import ImageResize from './containers/Screens/ImageResize';
import ImageFooter from './containers/Screens/ImageFooter';
import ImageHeader from './containers/Screens/ImageHeader';
import ImageGroups from './containers/Screens/Gifs';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from 'react-router';
function App() {
  return (
    <div className="App">
    <Router>    
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/imageresize" component={ImageResize} /> 
        <Route path="/imagefooter" component={ImageFooter} />
        <Route path="/imageheader" component={ImageHeader} />
        <Route path="/imagegif" component={ImageGroups} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
