import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Sidebar from '../../page/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from "./Notifications";
import './AppBar2.css';



function AppAppBar2() {
  const session = JSON.parse(window.sessionStorage.getItem("data"));

    // var [item, setItem] = useState([]);

    // function searchItem() {
    //     const url = "http://localhost:8080/item";
    //     axios.get(url)
    //         .then(function (response) {
    //             setItem(response.data);
    //             console.log("성공");
    //         })
    //         .catch(function (error) {
    //             console.log("실패");
    //         })
    // }
    // console.log(item)

    // useEffect(() => {
    //     searchItem()
    // }, []);

    // //var img_src = 'C:/Temp/gathermarket/'+ store.img.storeFileName;

    // const item_name = []
    // const item_content = []
    // const item_price = []

    // for (var j = 0; j < item.length; j++) {
    //     item_name[j] = item[j].name
    // }

    // for (var j = 0; j < item.length; j++) {
    //     item_content[j] = item[j].content
    // }
    // for (var j = 0; j < item.length; j++) {
    //     item_price[j] = item[j].price
    // }

  //var labels = ['한복', '잭 다니엘']

  //var labels_name = labels.map(name =><li>{name}</li>)

  //const session_name = JSON.parse(window.sessionStorage.getItem("email"));
  let cart = {
    count: 5,
    cost: 500,
  };
  let count =2;
  return (
    <div>
      <AppBar position="fixed">
      {/* <Sidebar/> */}

        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />

          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/Town"
            sx={{ fontSize: 25 }}
          >
            {/* Home title */}
            {'Gather skon(임시 제목)'}

          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Link
              variant="h5"
              underline="none"
              //href="/MyPage"
              sx={{ ...rightLink, color: 'lightgreen' }}
            >
              {session_name.email + ' 님 환영합니다.'}
            </Link> */}
            
    <ul><li>
    <Notifications
       data={[
          {
            message: '',
            detailPage : '/Cart'
          },
          {
            message: '💰 총 결재 금액 : '+cart.cost,
            detailPage : '/Cart'
          },
        ]}
        headerBackgroundColor = 'white'
        header={
          {
            title: '👜 장바구니',
            option: { text: '구매하기', onClick: () => {window.location = "./Cart"} }
          }
        }
    />
    </li>
    </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar2;