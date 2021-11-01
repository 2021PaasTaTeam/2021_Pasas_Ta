import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./page/Home";
import Gather from "./page/Gather";
import Login from "./page/Login";
import SignUp from "./page/SignUp";
import { VideoCall } from "./VideoCall";
import Town from "./page/Gather_town";
import Item from "./Item";
import AddStore from "./AddStore";
import MyPage from "./page/MyPage";
import AddItem from "./page/AddItem";
import EditItem from "./page/EditItem";
import EditStore from "./EditStore";
import Cart from "./Cart";
import Shopping_info from "./Shopping_info";
import Review from "./Review";
import Item_Modify from "./page/Item_Modify";
import Item_buy from "./Item_buy";



// 관리자 페이지
import { fetchUtils, Admin, Resource } from "react-admin";
//import restProvider from 'ra-data-simple-rest';
//import { PostList, PostEdit, PostCreate, PostIcon } from './users';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
//const dataProvider = jsonServerProvider('https//localhost:8080/user');


class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Index />} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" exact component={SignUp} />
                    <Route path="/VideoCall" exact component={VideoCall} />
                    <Route path="/Item" exact component={Item} />
                    <Route path="/AddStore" exact component={AddStore} />
                    <Route path="/EditStore" exact component={EditStore} />
                    <Route path="/AddItem" exact component={AddItem} />
                    <Route path="/EditItem" exact component={EditItem} />
                    <Route path="/Cart" exact component={Cart} />
                    <Route path="/Shopping_info" exact component={Shopping_info} />
                    <Route path="/Review" exact component={Review} />
                    <Route path="/Item_Modify" exact component={Item_Modify} />
                    <Route path="/Item_buy" exact component={Item_buy} />


                    <Route path="/MyPage" exact component={MyPage} />
                    <Route path="/Gather" exact component={Gather} />
                    <Route path="/Town" exact component={Town} />


                    {/* 관리자 페이지 */}
                    <Admin dataProvider={dataProvider}>
                        {/* <Resource name="users" 
                        list={PostList} 
                        //edit={PostEdit} create={PostCreate} icon={PostIcon}
                        /> */}
                    </Admin>
                </Switch>
            </Router>
        );
    }
}
export default App;