import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./page/Home";
import Gather from "./page/Gather";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import zoom from "./zoom";
import Town from "./page/Gather_town";
import Product from "./Product";
import AddStore from "./AddStore";
import MyPage from "./MyPage";
import Sidebar from "./page/Sidebar";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Index />} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" exact component={SignUp} />
                    <Route path="/zoom" exact component={zoom} />
                    <Route path="/Product" exact component={Product} />
                    <Route path="/AddStore" exact component={AddStore} />
                    <Route path="/MyPage" exact component={MyPage} />

                    <Route path="/Gather" exact component={Gather} />
                    <Route path="/Town" exact component={Town} />                    
                    
                </Switch>
            </Router>
        );
    }
}
export default App;