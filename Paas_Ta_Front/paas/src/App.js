import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./page/Home";
import Gather from "./page/Gather";
import Login from "./page/Login";
import SignUp from "./SignUp";
import zoom from "./zoom";
import Town from "./page/Gather_town";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Index />} />
                    <Route path="/Gather" exact component={Gather} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" exact component={SignUp} />
                    <Route path="/zoom" exact component={zoom} />
                    <Route path="/Town" exact component={Town} />

                </Switch>
            </Router>
        );
    }
}
export default App;