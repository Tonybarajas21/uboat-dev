import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './utils/main';
import LandingPage from './landingPage';


const App = () => (
    <Router>
        <div>
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path="/Main" component={Main} />
    </Switch>
    </div>
    </Router>
)

export default App;