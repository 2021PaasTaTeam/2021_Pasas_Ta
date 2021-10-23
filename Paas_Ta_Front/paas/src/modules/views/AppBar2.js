import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import React, { useState } from 'react';
import axios from 'axios'
import Sidebar from '../../page/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from "./Notifications";
import './AppBar2.css';



function AppAppBar2() {
  var labels = ['한복', '잭 다니엘']
//   var labels = [{
//     a:'한복'
//   },
// {a:'잭 다니엘 허니'}]

  var labels_name = labels.map(name =><li>{name}</li>)

  const session_name = JSON.parse(window.sessionStorage.getItem("email"));
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
      //cardOption={data => console.log(data)}
       //markAsRead={data => console.log(data)}
       data={[
          // {
          //   //image: logo,
          //   message: '한복: '+' x'+cart.count+',    가격: '+' 💰:'+cart.cost,
          // },
          // {
          //   //image: logo,
          //   message: '잭 다니엘 허니 2병',
          // },

          {
            message: labels_name,
            detailPage : '/Cart'
          },
          {
            message: '총 결재 금액 : '+cart.cost,
            detailPage : '/Cart'
          },
          // {
          //   //image: logo,
          //   message: ' 💰 총 결재 금액 : '+cart.cost,
          //   detailPage : '/Cart',
          // }
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