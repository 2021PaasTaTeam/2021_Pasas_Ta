import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Notifications from "./Notifications";
import './AppBar2.css';
import Icon from './assets/call.png';

function AppAppBar2() {
  const session = JSON.parse(window.sessionStorage.getItem("data"));

  let cart = {
    count: 5,
    cost: 500,
  };

  var list= new Array();
  var data = new Object();

  for(var i=0; i<=5; i++) {
    data = new Object();
    data.message =(i+1)+'번 상품';
    list.push(data);
    if (i === 5) {
      list.pop(data)
      data.message = '💰 총 결재 금액 : '+cart.cost;
      data.detailPage = '/Cart'
      list.push(data);
    }
  }
    // data.message = '고등어(샘플) : '+cart.count;
    // list.push(data);
    // data = new Object();
    // data.message = '오징어(샘플) : '+cart.count;
    // list.push(data);
    // data = new Object();
    // data.message = '💰 총 결재 금액 : '+cart.cost;
    // data.detailPage = '/Cart'
    // list.push(data);


  // let sample=([
  //   {
  //     message: list
  //   },
  //   {
  //     message: '💰 총 결재 금액 : '+cart.cost,
  //     detailPage : '/Cart'
  //   },
  // ]);

  return (
    <div>
      <AppBar position="fixed">

        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />

          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/Town"
            sx={{ fontSize: 25 }}
          >
            {'Onnuri'}

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
            {
              session.data.type === 'SELLER' ? 
              <Notifications
              data={list}
                  headerBackgroundColor = 'white'
                  header={
                    {
                      title: '👜 장바구니',
                      option: { text: '구매하기', onClick: () => {window.location = "./Cart"} }
                    }
                  }
                  icon={Icon}
              />
                : <></>
            }        
    {/* <Notifications
    data={list}
        headerBackgroundColor = 'white'
        header={
          {
            title: '👜 장바구니',
            option: { text: '구매하기', onClick: () => {window.location = "./Cart"} }
          }
        }
        icon={Icon}
    /> */}
    <Notifications
    data={list}

      //  data={[
      //     {
      //       message: list,
      //       detailPage : '/Cart'
      //     },
      //     {
      //       message: '💰 총 결재 금액 : '+cart.cost,
      //       detailPage : '/Cart'
      //     },
      //   ]}
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