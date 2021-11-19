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
    const url = "https://onnuriservice.paas-ta.org/orders/" + session.data.id;
    axios.get(url)
      .then(function (response) {
        var list = [];
        var data = new Object();
        for(var i=0; i<response.data.length; i++) {
          if (response.data[i].orderStatus === 'ORDERING')
          {
              data = new Object();
              data.message = response.data[i].orderItems[0].itemName;
              list.push(data);
          }
        }
        setOrder(list);
        const userObjcart = { cartdata: list };
        window.sessionStorage.setItem("cartdata", JSON.stringify(userObjcart));
        //console.log(list)
        //console.log("성공");
      })
      .catch(function (error) {
        //console.log("실패");
      })
  }

  //console.log(order)
  const sessioncart = JSON.parse(window.sessionStorage.getItem("cartdata"));

  useEffect(() => {
    searchOrder()
  }, []);

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
              data={sessioncart.cartdata}
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