import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Notifications from "./Notifications";
import './AppBar2.css';

function AppAppBar2() {
  const session = JSON.parse(window.sessionStorage.getItem("data"));

  var [order, setOrder] = useState([]);

  function searchOrder() {
    const url = "http://localhost:8080/orders/" + session.data.id;
    axios.get(url)
      .then(function (response) {
        setOrder(response.data);
        //console.log(response.data)
        //console.log("성공");
      })
      .catch(function (error) {
        //console.log("실패");
      })
  }

  const order_list = []
  var i = 0;

  for (var j = 0; j < order.length; j++) {
    if (order[j].orderStatus === 'ORDERING') {
      order_list[i] = order[j]
      i++
    }
  }
  //console.log(order_list)

  const order_id = []
  const order_date = []
  const order_name = []

  for (var j = 0; j < order_list.length; j++) {
    order_id[j] = order_list[j].orderId
  }
  for (var j = 0; j < order_list.length; j++) {
    order_date[j] = order_list[j].orderDate
  }
  for (var j = 0; j < order_list.length; j++) {
    order_name[j] = order_list[j].orderItems[0].itemName
  }

  useEffect(() => {
    searchOrder()
  }, []);

  var list = new Array();
  var data = new Object();
  //console.log(order_name)

  // for (var i = 0; i <= order_list.length; i++) {
  //   data = new Object();
  //   data.message = order_name[i];
  //   list.push(data);
  //   if (i === order_list.length) {
  //     list.pop(data)
  //     data.message = '💰 총 결재 금액 : ';
  //     data.detailPage = '/Cart'
  //     list.push(data);
  //   }
  // }
  for (var i = 0; i <= order_list.length; i++) {
    data = new Object();
    data.message = order_name[i];
    list.push(data);
    if (i === order_list.length) {
      list.pop();
      data.message = '💰 총 결재 금액 : ';
      data.detailPage = '/Cart'
      list.push(data);
    }
  }
  //console.log(list);

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
            <Notifications
              data={list}
              headerBackgroundColor='white'
              header={
                {
                  title: '👜 장바구니 목록',
                  option: { text: '구매하기', onClick: () => { window.location = "./Cart" } }
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