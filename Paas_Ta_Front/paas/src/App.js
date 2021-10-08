import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./Home";
import Draw from "./Gather";
import Login from "./Login";
import SignUp from "./SignUp";
import zoom from "./zoom";
import Town from "./Gather_town";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Index />} />
                    <Route path="/Draw" exact component={Draw} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" exact component={SignUp} />
                    <Route path="/zoom" exact component={zoom} />
                    <Route path="/Town" exact component={Town} />
                    <Route path="/Town" exact component={Town} />

                </Switch>
            </Router>
        );
    }
}
export default App;