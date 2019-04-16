import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './utils/main';
import LandingPage from './landingPage';
import { StripeProvider } from "react-stripe-elements";
import Checkout from "./components/Checkout.js"
import Login from "./components/Login"



const App = () => (
    <StripeProvider apiKey="pk_test_5OqAkvdfZkAygURoxEMAVHYd">
    <Router>
        <div>
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path="/Main" component={Main} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/Login" component={Login} />

    </Switch>
    </div>
    </Router>
    </StripeProvider>

)

export default App;