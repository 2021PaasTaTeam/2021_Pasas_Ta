import React, { useState, useEffect } from 'react';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./user_page/Home";
import Gather from "./user_page/Gather";
import Login from "./user_page/Login";
import SignUp from "./user_page/SignUp";
// import Chat from "./user_page/Chat";
import Town from "./user_page/Gather_town";
import Item from "./Item";
import AddStore from "./AddStore";
import MyPage from "./user_page/MyPage";
import AddItem from "./user_page/AddItem";
import EditItem from "./user_page/EditItem";
import EditStore from "./EditStore";
import Cart from "./Cart";
import Shopping_info from "./Shopping_info";
import Review from "./Review";
import Item_Modify from "./user_page/Item_Modify";
import Item_buy from "./Item_buy";

// test 샘플
// import sample from "./user_page/sample";
import { VideoCall } from './user_page/web/VideoCall';
// 관리자 페이지
import { Admin, Resource } from "react-admin";
import { UserList, UserIcon } from './admin_page/users';
import UserCreate from './admin_page/user/user_create';
import UserEdit from './admin_page/user/user_edit';

import { ItemList, ItemEdit, ItemCreate, ItemIcon } from './admin_page/items';
import { ShopList, ShopEdit, ShopCreate, ShopIcon } from './admin_page/shops';
import fakeDataProvider from 'ra-data-fakerest';
import Dashboard from './admin_page/Dashboard';

function App() {
    var [user, setUser] = useState([]);
    var [item, setItem] = useState([]);
    var [shop, setShop] = useState([]);

    function searchUser() {
        const url = "http://localhost:8080/user";
        axios.get(url)
            .then(function (response) {
                setUser(response.data);
                //console.log(response.data)
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }
    var user_list = user;

    function searchItem() {
        const url = "http://localhost:8080/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                //console.log(response.data)
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }
    function searchShop() {
        const url = "http://localhost:8080/shop";
        axios.get(url)
            .then(function (response) {
                setShop(response.data);
                //console.log(response.data)
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }
    var user_list = user;
    var item_list = item;
    var shop_list = shop;


    const dataProvider = fakeDataProvider({
        user: user_list,
        item: item_list,
        shop: shop_list,
    })

    useEffect(() => {
        searchUser()
        searchItem()
        searchShop()
    }, []);

    const home = () => {
        window.location.replace("/")
    }

    // class App extends Component {
    //     render() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact render={() => <Index />} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Signup" exact component={SignUp} />
                <Route path="/Chat" exact component={VideoCall} />
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

                {/* sample */}
                {/* <Route path="/sample" exact component={sample} /> */}
                {/* <Route path="/test" exact component={VideoCall} /> */}


                {/* sample */}

                <Route path="/MyPage" exact component={MyPage} />
                <Route path="/Gather" exact component={Gather} />
                <Route path="/Town" exact component={Town} />


                {/* 관리자 페이지 */}
                <Admin
                    dashboard={Dashboard}
                    dataProvider={dataProvider}

                >
                    <Resource name="user"
                        list={UserList}
                        edit={UserEdit} create={UserCreate} icon={UserIcon}
                    />
                    <Resource name="shop"
                        list={ShopList}
                        edit={ShopEdit} create={ShopCreate} icon={ShopIcon}
                    />
                    <Resource name="item"
                        list={ItemList}
                        edit={ItemEdit} create={ItemCreate} icon={ItemIcon}
                    />
                </Admin>
            </Switch>
        </Router>
    );
}
// }
export default App;