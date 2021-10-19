import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import React, { useState } from 'react';
import axios from 'axios'
import Sidebar from '../../page/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Notifications from "./Notifications";




function AppAppBar2() {


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
    <Notifications 
        data={[
          {
            //image: logo,
            message: '한복: '+' x'+cart.count+',    가격: '+' 💰:'+cart.cost,
          },
          {
            //image: logo,
            message: '잭 다니엘 허니 2병',
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
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar2;