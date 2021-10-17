import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./page/Home";
import Gather from "./page/Gather";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import zoom from "./zoom";
import Town from "./page/Gather_town";
import Item from "./Item";
import AddStore from "./AddStore";
import MyPage from "./MyPage";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import EditStore from "./EditStore";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Index />} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" exact component={SignUp} />
                    <Route path="/zoom" exact component={zoom} />
                    <Route path="/Item" exact component={Item} />
                    <Route path="/AddStore" exact component={AddStore} />
                    <Route path="/EditStore" exact component={EditStore} />
                    <Route path="/AddItem" exact component={AddItem} />
                    <Route path="/EditItem" exact component={EditItem} />


                    <Route path="/MyPage" exact component={MyPage} />

                    <Route path="/Gather" exact component={Gather} />
                    <Route path="/Town" exact component={Town} />                    
                    
                </Switch>
            </Router>
        );
    }
}
export default App;