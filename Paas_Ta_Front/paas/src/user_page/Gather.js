import React, { createRef, useEffect, useState } from "react";
import AppAppBar2 from '../modules/views/AppBar2';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import Sidebar from "./Sidebar";
import './Gather.css';
import axios from "axios";

function Gather(props) {
  const session = JSON.parse(window.sessionStorage.getItem("data"));
  const session_land = JSON.parse(window.localStorage.getItem("land"));

  let canvas;
  let context;
  let canvasRef = createRef();

  let DOWN = 0;
  let UP = 2;
  let LEFT = 3;
  let RIGHT = 1;

  let currentDirection = DOWN;

  let walkCycle = [0, 1, 2, 3];
  let walkIndex = 0;

  let width = 16;
  let height = 32;
  let SCALE = 2;
  let SCALED_WIDTH = SCALE * width;
  let SCALED_HEIGHT = SCALE * height;

  let frameCount = 0;
  let FRAME_LIMIT = 12;

  let backgroundReady = false;
  let backgroundImg = new Image();

  backgroundImg.src = "/assets/map.png";

  backgroundImg.onload = function () {
    backgroundReady = true;
  };

  let userReady = false;
  let userImg = new Image();

  userImg.src = "/assets/character.png";

  userImg.onload = function () {
    userReady = true;
  };

  var user = {
    speed: 4,
    x: 500,
    y: 300
  };
  let store_width = 90;
  let store_height = 55;

  let storeReady = false;
  let storeImg = new Image();

  storeImg.src = "/assets/logo.png";

  storeImg.onload = function () {
    storeReady = true;
  };

  let storeReady2 = false;
  let storeImg2 = new Image();

  storeImg2.src = "/assets/logo.png";

  storeImg2.onload = function () {
    storeReady2 = true;
  };

  let storeReady3 = false;
  let storeImg3 = new Image();

  storeImg3.src = "/assets/logo.png";

  storeImg3.onload = function () {
    storeReady3 = true;
  };

  let storeReady4 = false;
  let storeImg4 = new Image();

  storeImg4.src = "/assets/logo.png";

  storeImg4.onload = function () {
    storeReady4 = true;
  };

  let storeReady5 = false;
  let storeImg5 = new Image();

  storeImg5.src = "/assets/logo.png";

  storeImg5.onload = function () {
    storeReady5 = true;
  };

  let storeReady6 = false;
  let storeImg6 = new Image();

  storeImg6.src = "/assets/logo.png";

  storeImg6.onload = function () {
    storeReady6 = true;
  };

  let storeReady7 = false;
  let storeImg7 = new Image();

  storeImg7.src = "/assets/logo.png";

  storeImg7.onload = function () {
    storeReady7 = true;
  };

  let storeReady8 = false;
  let storeImg8 = new Image();

  storeImg8.src = "/assets/logo.png";

  storeImg8.onload = function () {
    storeReady8 = true;
  };

  let storeReady9 = false;
  let storeImg9 = new Image();

  storeImg9.src = "/assets/logo.png";

  storeImg9.onload = function () {
    storeReady9 = true;
  };

  let storeReady10 = false;
  let storeImg10 = new Image();

  storeImg10.src = "/assets/logo.png";

  storeImg10.onload = function () {
    storeReady10 = true;
  };

  let storeReady11 = false;
  let storeImg11 = new Image();

  storeImg11.src = "/assets/logo.png";

  storeImg11.onload = function () {
    storeReady11 = true;
  };

  let storeReady12 = false;
  let storeImg12 = new Image();

  storeImg12.src = "/assets/logo.png";

  storeImg12.onload = function () {
    storeReady12 = true;
  };

  let storeReady13 = false;
  let storeImg13 = new Image();

  storeImg13.src = "/assets/logo.png";

  storeImg13.onload = function () {
    storeReady13 = true;
  };

  let storeReady14 = false;
  let storeImg14 = new Image();

  storeImg14.src = "/assets/logo.png";

  storeImg14.onload = function () {
    storeReady14 = true;
  };

  let storeReady15 = false;
  let storeImg15 = new Image();

  storeImg15.src = "/assets/logo.png";

  storeImg15.onload = function () {
    storeReady15 = true;
  };

  let storeReady16 = false;
  let storeImg16 = new Image();

  storeImg16.src = "/assets/logo.png";

  storeImg16.onload = function () {
    storeReady16 = true;
  };
  let storeReady17 = false;
  let storeImg17 = new Image();

  storeImg17.src = "/assets/logo.png";

  storeImg17.onload = function () {
    storeReady17 = true;
  };

  let storeReady18 = false;
  let storeImg18 = new Image();

  storeImg18.src = "/assets/logo.png";

  storeImg18.onload = function () {
    storeReady18 = true;
  };

  let storeReady19 = false;
  let storeImg19 = new Image();

  storeImg19.src = "/assets/logo.png";

  storeImg19.onload = function () {
    storeReady19 = true;
  };

  let storeReady20 = false;
  let storeImg20 = new Image();

  storeImg20.src = "/assets/logo.png";

  storeImg20.onload = function () {
    storeReady20 = true;
  };

  let storeReady21 = false;
  let storeImg21 = new Image();

  storeImg21.src = "/assets/logo.png";

  storeImg21.onload = function () {
    storeReady21 = true;
  };

  let storeReady22 = false;
  let storeImg22 = new Image();

  storeImg22.src = "/assets/logo.png";

  storeImg22.onload = function () {
    storeReady22 = true;
  };

  let storeReady23 = false;
  let storeImg23 = new Image();

  storeImg23.src = "/assets/logo.png";

  storeImg23.onload = function () {
    storeReady23 = true;
  };

  let storeReady24 = false;
  let storeImg24 = new Image();

  storeImg24.src = "/assets/logo.png";

  storeImg24.onload = function () {
    storeReady24 = true;
  };

  let storeReady25 = false;
  let storeImg25 = new Image();

  storeImg25.src = "/assets/logo.png";

  storeImg25.onload = function () {
    storeReady25 = true;
  };

  let storeReady26 = false;
  let storeImg26 = new Image();

  storeImg26.src = "/assets/logo.png";

  storeImg26.onload = function () {
    storeReady26 = true;
  };

  let storeReady27 = false;
  let storeImg27 = new Image();

  storeImg27.src = "/assets/logo.png";

  storeImg27.onload = function () {
    storeReady27 = true;
  };

  let storeReady28 = false;
  let storeImg28 = new Image();

  storeImg28.src = "/assets/logo.png";

  storeImg28.onload = function () {
    storeReady28 = true;
  };

  let storeReady29 = false;
  let storeImg29 = new Image();

  storeImg29.src = "/assets/logo.png";

  storeImg29.onload = function () {
    storeReady29 = true;
  };

  let storeReady30 = false;
  let storeImg30 = new Image();

  storeImg30.src = "/assets/logo.png";

  storeImg30.onload = function () {
    storeReady30 = true;
  };

  let storeReady31 = false;
  let storeImg31 = new Image();

  storeImg31.src = "/assets/logo.png";

  storeImg31.onload = function () {
    storeReady31 = true;
  };

  let storeReady32 = false;
  let storeImg32 = new Image();

  storeImg32.src = "/assets/logo.png";

  storeImg32.onload = function () {
    storeReady32 = true;
  };

  let storeReady33 = false;
  let storeImg33 = new Image();

  storeImg33.src = "/assets/logo.png";

  storeImg33.onload = function () {
    storeReady33 = true;
  };

  let storeReady34 = false;
  let storeImg34 = new Image();

  storeImg34.src = "/assets/logo.png";

  storeImg34.onload = function () {
    storeReady34 = true;
  };

  let storeReady35 = false;
  let storeImg35 = new Image();

  storeImg35.src = "/assets/logo.png";

  storeImg35.onload = function () {
    storeReady35 = true;
  };

  let storeReady36 = false;
  let storeImg36 = new Image();

  storeImg36.src = "/assets/logo.png";

  storeImg36.onload = function () {
    storeReady36 = true;
  };


  let typeReady = false;
  let typeImg = new Image();

  let type_width = 150;
  let type_height = 150;

  //typeImg.src = "/assets/han_type.png";
  // typeImg.src = "/assets/gong_type.jpg";
  typeImg.src = "/assets/type.png";
  //typeImg.src = "/assets/food_type.png";

  typeImg.onload = function () {
    typeReady = true;
  };

  let typeReady2 = false;
  let typeImg2 = new Image();

  typeImg2.src = "/assets/type.png";

  typeImg2.onload = function () {
    typeReady2 = true;
  };

  let typeReady3 = false;
  let typeImg3 = new Image();

  typeImg3.src = "/assets/type.png";

  typeImg3.onload = function () {
    typeReady3 = true;
  };

  let typeReady4 = false;
  let typeImg4 = new Image();

  typeImg4.src = "/assets/type.png";

  typeImg4.onload = function () {
    typeReady4 = true;
  };

  let typeReady5 = false;
  let typeImg5 = new Image();

  typeImg5.src = "/assets/type.png";

  typeImg5.onload = function () {
    typeReady5 = true;
  };

  let typeReady6 = false;
  let typeImg6 = new Image();

  typeImg6.src = "/assets/type.png";

  typeImg6.onload = function () {
    typeReady6 = true;
  };

  let typeReady7 = false;
  let typeImg7 = new Image();

  typeImg7.src = "/assets/type.png";

  typeImg7.onload = function () {
    typeReady7 = true;
  };

  let typeReady8 = false;
  let typeImg8 = new Image();

  typeImg8.src = "/assets/type.png";

  typeImg8.onload = function () {
    typeReady8 = true;
  };

  let typeReady9 = false;
  let typeImg9 = new Image();

  typeImg9.src = "/assets/type.png";

  typeImg9.onload = function () {
    typeReady9 = true;
  };

  let typeReady10 = false;
  let typeImg10 = new Image();

  typeImg10.src = "/assets/type.png";

  typeImg10.onload = function () {
    typeReady10 = true;
  };

  let typeReady11 = false;
  let typeImg11 = new Image();

  typeImg11.src = "/assets/type.png";

  typeImg11.onload = function () {
    typeReady11 = true;
  };

  let typeReady12 = false;
  let typeImg12 = new Image();

  typeImg12.src = "/assets/type.png";

  typeImg12.onload = function () {
    typeReady12 = true;
  };

  let typeReady13 = false;
  let typeImg13 = new Image();

  typeImg13.src = "/assets/type.png";

  typeImg13.onload = function () {
    typeReady13 = true;
  };

  let typeReady14 = false;
  let typeImg14 = new Image();

  typeImg14.src = "/assets/type.png";

  typeImg14.onload = function () {
    typeReady14 = true;
  };

  let typeReady15 = false;
  let typeImg15 = new Image();

  typeImg15.src = "/assets/type.png";

  typeImg15.onload = function () {
    typeReady15 = true;
  };

  let typeReady16 = false;
  let typeImg16= new Image();

  typeImg16.src = "/assets/type.png";

  typeImg16.onload = function () {
    typeReady16 = true;
  };

  let typeReady17 = false;
  let typeImg17 = new Image();

  typeImg17.src = "/assets/type.png";

  typeImg17.onload = function () {
    typeReady17 = true;
  };

  let typeReady18 = false;
  let typeImg18 = new Image();

  typeImg18.src = "/assets/type.png";

  typeImg18.onload = function () {
    typeReady18 = true;
  };
  let typeReady19 = false;
  let typeImg19 = new Image();

  typeImg19.src = "/assets/type.png";

  typeImg19.onload = function () {
    typeReady = true;
  };

  let typeReady20 = false;
  let typeImg20 = new Image();

  typeImg20.src = "/assets/type.png";

  typeImg20.onload = function () {
    typeReady20 = true;
  };

  let typeReady21= false;
  let typeImg21 = new Image();

  typeImg21.src = "/assets/type.png";

  typeImg21.onload = function () {
    typeReady21 = true;
  };

  let typeReady22 = false;
  let typeImg22 = new Image();

  typeImg2.src = "/assets/type.png";

  typeImg22.onload = function () {
    typeReady22 = true;
  };
  let typeReady23 = false;
  let typeImg23 = new Image();

  typeImg23.src = "/assets/type.png";

  typeImg23.onload = function () {
    typeReady23 = true;
  };

  let typeReady24 = false;
  let typeImg24 = new Image();

  typeImg24.src = "/assets/type.png";

  typeImg24.onload = function () {
    typeReady24 = true;
  };

  let typeReady25 = false;
  let typeImg25 = new Image();

  typeImg25.src = "/assets/type.png";

  typeImg25.onload = function () {
    typeReady25 = true;
  };

  let typeReady26 = false;
  let typeImg26 = new Image();

  typeImg26.src = "/assets/type.png";

  typeImg26.onload = function () {
    typeReady26 = true;
  };
  let typeReady27 = false;
  let typeImg27 = new Image();

  typeImg27.src = "/assets/type.png";

  typeImg27.onload = function () {
    typeReady27 = true;
  };
  let typeReady28 = false;
  let typeImg28 = new Image();

  typeImg28.src = "/assets/type.png";

  typeImg28.onload = function () {
    typeReady28 = true;
  };
  let typeReady29 = false;
  let typeImg29 = new Image();

  typeImg29.src = "/assets/type.png";

  typeImg29.onload = function () {
    typeReady29 = true;
  };
  let typeReady30 = false;
  let typeImg30 = new Image();

  typeImg30.src = "/assets/type.png";

  typeImg30.onload = function () {
    typeReady30 = true;
  };

  let typeReady31 = false;
  let typeImg31 = new Image();

  typeImg31.src = "/assets/type.png";

  typeImg31.onload = function () {
    typeReady31 = true;
  };
  let typeReady32 = false;
  let typeImg32 = new Image();

  typeImg32.src = "/assets/type.png";

  typeImg32.onload = function () {
    typeReady32 = true;
  };

  let typeReady33 = false;
  let typeImg33 = new Image();

  typeImg33.src = "/assets/type.png";

  typeImg33.onload = function () {
    typeReady33 = true;
  };
  let typeReady34 = false;
  let typeImg34 = new Image();

  typeImg34.src = "/assets/type.png";

  typeImg34.onload = function () {
    typeReady34 = true;
  };
  let typeReady35 = false;
  let typeImg35 = new Image();

  typeImg35.src = "/assets/type.png";

  typeImg35.onload = function () {
    typeReady35 = true;
  };
  let typeReady36 = false;
  let typeImg36 = new Image();

  typeImg36.src = "/assets/type.png";

  typeImg36.onload = function () {
    typeReady36 = true;
  };

  let keysDown = {};

  window.addEventListener(
    "keydown",
    function (e) {
      keysDown[e.keyCode] = true;
    },
    false
  );
  window.addEventListener(
    "keyup",
    function (e) {
      delete keysDown[e.keyCode];
    },
    false
  );

  // //키보드 입력
  // window.addEventListener('keydown', e => {
  //   // 마우스 좌표 찾기
  //   var x = user.x;
  //   var y = user.y;
  //   var coords = "X coords: " + x + ", Y coords: " + y;
  //   //console.log(coords);
  //   // 클릭 이벤트
  //   if (x >= 630 && x <= 730 && y >= 50 && y <= 80) {
  //     returntown()
  //     //console.log('키보드 이벤트 발생!');
  //   }
  // });

  useEffect(() => {

    canvas = canvasRef.current;
    context = canvas.getContext("2d");

    canvas.addEventListener(
      "keydown",
      function (e) {
        keysDown[e.keyCode] = true;
      },
      false
    );

    canvas.addEventListener(
      "keyup",
      function (e) {
        delete keysDown[e.keyCode];
      },
      false
    );

    // canvas.addEventListener('keydown', e => {
    //   // 마우스 좌표 찾기
    //   var x = e.clientX;
    //   var y = e.clientY;
    //   var coords = "X coords: " + x + ", Y coords: " + y;
    //   //console.log(coords);
    //   // 클릭 이벤트
    //   if (x >= 200 && x <= 300 && y >= 100 && y <= 200) {
    //     if (e.keyCode === 88) {
    //       openWin()
    //       ////console.log('키보드 이벤트 발생!');
    //     }
    //   }
    //   if (x >= 900 && x <= 1000 && y >= 90 && y <= 150) {
    //     returntown()
    //     ////console.log('키보드 이벤트 발생!');
    //   }
    // });

    // 마우스 클릭
    canvas.addEventListener('mousedown', e => {
      // 마우스 좌표 찾기
      var x = e.clientX;
      var y = e.clientY;
      var coords = "X coords: " + x + ", Y coords: " + y;
      //console.log(coords);
      // 클릭 이벤트
      // if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
      //   openWin()
      //   //console.log('마우스 버튼 ON 이벤트 발생!');
      // }
    });
  }, []);

  function loadImage() {
    if (backgroundReady) {
      context?.drawImage(backgroundImg, 0, 0);
    }
    if (regionReady) {
      context?.drawImage(regionImg, 620, 390, 100, 100);
    }
  }

  function returntown() {
    window.location.replace("./Town")
  }

  function openWin() {
    // 상품 구매 페이지  
    window.open("/item", "", "width=650, height=900, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
  }

  function moveChar(deltaX, deltaY, direction) {
    var width = 1500;
    var height = 1000;

    if (user.x + deltaX > 0 && user.x + SCALED_WIDTH + deltaX < width) {
      user.x += deltaX * user.speed;
    }
    if (user.y + deltaY > 0 && user.y + SCALED_HEIGHT + deltaY < height) {
      user.y += deltaY * user.speed;
    }
    currentDirection = direction;
  }

  function moveUser() {
    let hasMoved = false;

    if (38 in keysDown) {
      moveChar(0, -1, UP);
      hasMoved = true;
    }

    if (40 in keysDown) {
      moveChar(0, 1, DOWN);
      hasMoved = true;
    }

    if (37 in keysDown) {
      moveChar(-1, 0, LEFT);
      hasMoved = true;
    }

    if (39 in keysDown) {
      moveChar(1, 0, RIGHT);
      hasMoved = true;
    }

    if (!hasMoved) {
      walkIndex = 0;
    }

    //Loop walk animation
    if (hasMoved) {
      frameCount++;
      if (frameCount >= FRAME_LIMIT) {
        frameCount = 0;
        walkIndex++;
        if (walkIndex >= walkCycle.length) {
          walkIndex = 0;
        }
      }
    }

    drawFrame(walkCycle[walkIndex], currentDirection, user.x, user.y);
  }

  function drawFrame(frameX, frameY, canvasX, canvasY) {
    context?.drawImage(
      userImg,
      frameX * width,
      frameY * height,
      width,
      height,
      canvasX,
      canvasY,
      SCALED_WIDTH,
      SCALED_HEIGHT
    );
  }

  /////////////////////////////
  //api
  /////////////////////////////

  //console.log(session.data)
  let regionReady = false;
  let regionImg = new Image();

  if (session_land.land === '성북구') {
    regionImg.src = "/assets/sb.jpg";
  }
  if (session_land.land === '서초구') {
    regionImg.src = "/assets/seocho.png"
  }
  if (session_land.land === '구로구') {
    regionImg.src = "/assets/guro.png";
  }
  if (session_land.land === '영등포구') {
    regionImg.src = "/assets/yeongdeungpo.png";
  }
  if (session_land.land === '동작구') {
    regionImg.src = "/assets/dongjaklogo.jpg";
  }
  if (session_land.land === '종로구') {
    regionImg.src = "/assets/jongro.png";
  }

  // var list = [];

  // for (var i = 0; i < session.data.lands.length; i++) {
  //   if (session.data.[i].buildingName === session_land.land) {
  //     list.push(session.data.lands[i])
  //   }
  // }
  //console.log(session.data)
  // console.log(list)

  regionImg.onload = function () {
    regionReady = true;
  };

  var item_seat = []
  for (var j = 0; j < session.data.landAndShopInfos.length; j++) {
    item_seat[j] = session.data.landAndShopInfos[j]
  }
  console.log(item_seat)
  //console.log(session.data)
  //console.log(session.data.landAndShopInfos[8].shopImageFileName);
  ////console.log(session_land);
  function loadstore() {
    ////console.log(id.region)
    if (session_land.land == '성북구') {
      if (item_seat[0].landSeat === 'YES') {
        if (storeReady) {
          storeImg.src = item_seat[0].shopImageFileName
          context?.drawImage(storeImg, 195, 130, store_width, store_height);
        }
        if (typeReady) {
          if (item_seat[0].shopBusinessType === '한복')
          {
            typeImg.src = "/assets/han_type.png";
          }
          if (item_seat[0].shopBusinessType === '공방')
          {
            typeImg.src = "/assets/gong_type.jpg";
          }
          if (item_seat[0].shopBusinessType === '음식점')
          {
            typeImg.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg, 165, 200, type_width, type_height);
        }
      }
      if (item_seat[1].landSeat === 'YES') {
        if (storeReady2) {
          storeImg2.src = item_seat[1].shopImageFileName
          context?.drawImage(storeImg2, 627, 130, store_width, store_height);
        }
        if (typeReady2) {
          if (item_seat[1].shopBusinessType === '한복')
          {
            typeImg2.src = "/assets/han_type.png";
          }
          if (item_seat[1].shopBusinessType === '공방')
          {
            typeImg2.src = "/assets/gong_type.jpg";
          }
          if (item_seat[1].shopBusinessType === '음식점')
          {
            typeImg2.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg2, 595, 200, type_width, type_height);
        }
      }
      if (item_seat[2].landSeat === 'YES') {
        if (storeReady3) {
          storeImg3.src = session.data.landAndShopInfos[2].shopImageFileName
          context?.drawImage(storeImg3, 1060, 130, store_width, store_height);
        }
        if (typeReady3) {
          if (item_seat[2].shopBusinessType === '한복')
          {
            typeImg3.src = "/assets/han_type.png";
          }
          if (item_seat[2].shopBusinessType === '공방')
          {
            typeImg3.src = "/assets/gong_type.jpg";
          }
          if (item_seat[2].shopBusinessType === '음식점')
          {
            typeImg3.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg3, 1025, 200, type_width, type_height);
        }
      }
      if (item_seat[3].landSeat === 'YES') {
        if (storeReady4) {
          storeImg4.src = session.data.landAndShopInfos[3].shopImageFileName
          context?.drawImage(storeImg4, 195, 515, store_width, store_height);
        }
        if (typeReady4) {
          if (item_seat[3].shopBusinessType === '한복')
          {
            typeImg4.src = "/assets/han_type.png";
          }
          if (item_seat[3].shopBusinessType === '공방')
          {
            typeImg4.src = "/assets/gong_type.jpg";
          }
          if (item_seat[3].shopBusinessType === '음식점')
          {
            typeImg4.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg4, 165, 585, type_width, type_height);
        }
      }
      if (item_seat[4].landSeat === 'YES') {
        if (storeReady5) {
          storeImg5.src = session.data.landAndShopInfos[4].shopImageFileName
          context?.drawImage(storeImg5, 627, 515, store_width, store_height);
        }
        if (typeReady5) {
          if (item_seat[4].shopBusinessType === '한복')
          {
            typeImg5.src = "/assets/han_type.png";
          }
          if (item_seat[4].shopBusinessType === '공방')
          {
            typeImg5.src = "/assets/gong_type.jpg";
          }
          if (item_seat[4].shopBusinessType === '음식점')
          {
            typeImg5.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg5, 595, 585, type_width, type_height);
        }
      }
      if (item_seat[5].landSeat === 'YES') {
        if (storeReady6) {
          storeImg6.src = session.data.landAndShopInfos[5].shopImageFileName

          context?.drawImage(storeImg6, 1060, 515, store_width, store_height);
        }
        if (typeReady6) {
          if (item_seat[5].shopBusinessType === '한복')
          {
            typeImg6.src = "/assets/han_type.png";
          }
          if (item_seat[5].shopBusinessType === '공방')
          {
            typeImg6.src = "/assets/gong_type.jpg";
          }
          if (item_seat[5].shopBusinessType === '음식점')
          {
            typeImg6.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg6, 1025, 585, type_width, type_height);
        }
      }
    }
    if (session_land.land == '동작구') {
      if (item_seat[6].landSeat === 'YES') {
        if (storeReady7) {
          storeImg7.src = session.data.landAndShopInfos[6].shopImageFileName

          context?.drawImage(storeImg7, 195, 130, store_width, store_height);
        }
        if (typeReady7) {
          if (item_seat[6].shopBusinessType === '한복')
          {
            typeImg7.src = "/assets/han_type.png";
          }
          if (item_seat[6].shopBusinessType === '공방')
          {
            typeImg7.src = "/assets/gong_type.jpg";
          }
          if (item_seat[6].shopBusinessType === '음식점')
          {
            typeImg7.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg7, 165, 200, type_width, type_height);
        }
      }
      if (item_seat[7].landSeat === 'YES') {
        if (storeReady8) {
          storeImg8.src = session.data.landAndShopInfos[7].shopImageFileName

          context?.drawImage(storeImg8, 627, 130, store_width, store_height);
        }
        if (typeReady8) {
          if (item_seat[7].shopBusinessType === '한복')
          {
            typeImg8.src = "/assets/han_type.png";
          }
          if (item_seat[7].shopBusinessType === '공방')
          {
            typeImg8.src = "/assets/gong_type.jpg";
          }
          if (item_seat[7].shopBusinessType === '음식점')
          {
            typeImg8.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg8, 595, 200, type_width, type_height);
        }
      }
      if (item_seat[8].landSeat === 'YES') {
        if (storeReady9) {
          storeImg9.src = session.data.landAndShopInfos[8].shopImageFileName

          context?.drawImage(storeImg9, 1060, 130, store_width, store_height);
        }
        if (typeReady9) {
          if (item_seat[8].shopBusinessType === '한복')
          {
            typeImg9.src = "/assets/han_type.png";
          }
          if (item_seat[8].shopBusinessType === '공방')
          {
            typeImg9.src = "/assets/gong_type.jpg";
          }
          if (item_seat[8].shopBusinessType === '음식점')
          {
            typeImg9.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg9, 1025, 200, type_width, type_height);
        }
      }
      if (item_seat[9].landSeat === 'YES') {
        if (storeReady10) {
          storeImg10.src = session.data.landAndShopInfos[9].shopImageFileName

          context?.drawImage(storeImg10, 195, 515, store_width, store_height);
        }
        if (typeReady10) {
          if (item_seat[9].shopBusinessType === '한복')
          {
            typeImg10.src = "/assets/han_type.png";
          }
          if (item_seat[9].shopBusinessType === '공방')
          {
            typeImg10.src = "/assets/gong_type.jpg";
          }
          if (item_seat[9].shopBusinessType === '음식점')
          {
            typeImg10.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg10, 165, 585, type_width, type_height);
        }
      }
      if (item_seat[10].landSeat === 'YES') {
        if (storeReady11) {
          storeImg11.src = session.data.landAndShopInfos[10].shopImageFileName

          context?.drawImage(storeImg11, 627, 515, store_width, store_height);
        }
        if (typeReady11) {
          if (item_seat[10].shopBusinessType === '한복')
          {
            typeImg11.src = "/assets/han_type.png";
          }
          if (item_seat[10].shopBusinessType === '공방')
          {
            typeImg11.src = "/assets/gong_type.jpg";
          }
          if (item_seat[10].shopBusinessType === '음식점')
          {
            typeImg11.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg11, 595, 585, type_width, type_height);
        }
      }
      if (item_seat[11].landSeat === 'YES') {
        if (storeReady12) {
          storeImg12.src = session.data.landAndShopInfos[11].shopImageFileName

          context?.drawImage(storeImg12, 1060, 515, store_width, store_height);
        }
        if (typeReady12) {
          if (item_seat[11].shopBusinessType === '한복')
          {
            typeImg12.src = "/assets/han_type.png";
          }
          if (item_seat[11].shopBusinessType === '공방')
          {
            typeImg12.src = "/assets/gong_type.jpg";
          }
          if (item_seat[11].shopBusinessType === '음식점')
          {
            typeImg12.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg12, 1025, 585, type_width, type_height);
        }
      }
    }
    if (session_land.land == '종로구') {
      if (item_seat[12].landSeat === 'YES') {
        if (storeReady13) {
          storeImg13.src = session.data.landAndShopInfos[12].shopImageFileName

          context?.drawImage(storeImg13, 195, 130, store_width, store_height);
        }
        if (typeReady13) {
          if (item_seat[12].shopBusinessType === '한복')
          {
            typeImg13.src = "/assets/han_type.png";
          }
          if (item_seat[12].shopBusinessType === '공방')
          {
            typeImg13.src = "/assets/gong_type.jpg";
          }
          if (item_seat[12].shopBusinessType === '음식점')
          {
            typeImg13.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg13, 165, 200, type_width, type_height);
        }
      }
      if (item_seat[13].landSeat === 'YES') {
        if (storeReady14) {
          storeImg14.src = session.data.landAndShopInfos[13].shopImageFileName

          context?.drawImage(storeImg14, 627, 130, store_width, store_height);
        }
        if (typeReady14) {
          if (item_seat[13].shopBusinessType === '한복')
          {
            typeImg14.src = "/assets/han_type.png";
          }
          if (item_seat[13].shopBusinessType === '공방')
          {
            typeImg14.src = "/assets/gong_type.jpg";
          }
          if (item_seat[13].shopBusinessType === '음식점')
          {
            typeImg14.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg14, 595, 200, type_width, type_height);
        }
      }
      if (item_seat[14].landSeat === 'YES') {
        if (storeReady15) {
          storeImg15.src = session.data.landAndShopInfos[14].shopImageFileName

          context?.drawImage(storeImg15, 1060, 130, store_width, store_height);
        }
        if (typeReady15) {
          if (item_seat[14].shopBusinessType === '한복')
          {
            typeImg15.src = "/assets/han_type.png";
          }
          if (item_seat[14].shopBusinessType === '공방')
          {
            typeImg15.src = "/assets/gong_type.jpg";
          }
          if (item_seat[14].shopBusinessType === '음식점')
          {
            typeImg15.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg15, 1025, 200, type_width, type_height);
        }
      }
      if (item_seat[15].landSeat === 'YES') {
        if (storeReady16) {
          storeImg16.src = session.data.landAndShopInfos[15].shopImageFileName

          context?.drawImage(storeImg16, 195, 515, store_width, store_height);
        }
        if (typeReady16) {
          if (item_seat[15].shopBusinessType === '한복')
          {
            typeImg16.src = "/assets/han_type.png";
          }
          if (item_seat[15].shopBusinessType === '공방')
          {
            typeImg16.src = "/assets/gong_type.jpg";
          }
          if (item_seat[15].shopBusinessType === '음식점')
          {
            typeImg16.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg16, 165, 585, type_width, type_height);
        }
      }
      if (item_seat[16].landSeat === 'YES') {
        if (storeReady17) {
          storeImg17.src = session.data.landAndShopInfos[16].shopImageFileName

          context?.drawImage(storeImg17, 627, 515, store_width, store_height);
        }
        if (typeReady17) {
          if (item_seat[16].shopBusinessType === '한복')
          {
            typeImg17.src = "/assets/han_type.png";
          }
          if (item_seat[16].shopBusinessType === '공방')
          {
            typeImg17.src = "/assets/gong_type.jpg";
          }
          if (item_seat[16].shopBusinessType === '음식점')
          {
            typeImg17.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg17, 595, 585, type_width, type_height);
        }
      }
      if (item_seat[17].landSeat === 'YES') {
        if (storeReady18) {
          storeImg18.src = session.data.landAndShopInfos[17].shopImageFileName

          context?.drawImage(storeImg18, 1060, 515, store_width, store_height);
        }
        if (typeReady18) {
          if (item_seat[17].shopBusinessType === '한복')
          {
            typeImg18.src = "/assets/han_type.png";
          }
          if (item_seat[17].shopBusinessType === '공방')
          {
            typeImg18.src = "/assets/gong_type.jpg";
          }
          if (item_seat[17].shopBusinessType === '음식점')
          {
            typeImg18.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg18, 1025, 585, type_width, type_height);
        }
      }
    }
    if (session_land.land == '구로구') {
      if (item_seat[18].landSeat === 'YES') {
        if (storeReady19) {
          storeImg19.src = session.data.landAndShopInfos[18].shopImageFileName

          context?.drawImage(storeImg19, 195, 130, store_width, store_height);
        }
        if (typeReady19) {
          if (item_seat[18].shopBusinessType === '한복')
          {
            typeImg19.src = "/assets/han_type.png";
          }
          if (item_seat[18].shopBusinessType === '공방')
          {
            typeImg19.src = "/assets/gong_type.jpg";
          }
          if (item_seat[18].shopBusinessType === '음식점')
          {
            typeImg19.src = "/assets/food_type.png";
          }
          if (item_seat[18].shopBusinessType === '기타')
          {
            typeImg19.src = "/assets/type.png";
          }
          context?.drawImage(typeImg19, 165, 200, type_width, type_height);
        }
      }
      if (item_seat[19].landSeat === 'YES') {
        if (storeReady20) {
          storeImg20.src = session.data.landAndShopInfos[19].shopImageFileName

          context?.drawImage(storeImg20, 627, 130, store_width, store_height);
        }
        if (typeReady20) {
          if (item_seat[19].shopBusinessType === '한복')
          {
            typeImg20.src = "/assets/han_type.png";
          }
          if (item_seat[19].shopBusinessType === '공방')
          {
            typeImg20.src = "/assets/gong_type.jpg";
          }
          if (item_seat[19].shopBusinessType === '음식점')
          {
            typeImg20.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg20, 595, 200, type_width, type_height);
        }
      }
      if (item_seat[20].landSeat === 'YES') {
        if (storeReady21) {
          storeImg21.src = session.data.landAndShopInfos[20].shopImageFileName

          context?.drawImage(storeImg21, 1060, 130, store_width, store_height);
        }
        if (typeReady21) {
          if (item_seat[20].shopBusinessType === '한복')
          {
            typeImg21.src = "/assets/han_type.png";
          }
          if (item_seat[20].shopBusinessType === '공방')
          {
            typeImg21.src = "/assets/gong_type.jpg";
          }
          if (item_seat[20].shopBusinessType === '음식점')
          {
            typeImg21.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg21, 1025, 200, type_width, type_height);
        }
      }
      if (item_seat[21].landSeat === 'YES') {
        if (storeReady22) {
          storeImg22.src = session.data.landAndShopInfos[21].shopImageFileName

          context?.drawImage(storeImg22, 195, 515, store_width, store_height);
        }
        if (typeReady22) {
          if (item_seat[21].shopBusinessType === '한복')
          {
            typeImg2.src = "/assets/han_type.png";
          }
          if (item_seat[21].shopBusinessType === '공방')
          {
            typeImg22.src = "/assets/gong_type.jpg";
          }
          if (item_seat[21].shopBusinessType === '음식점')
          {
            typeImg22.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg22, 165, 585, type_width, type_height);
        }
      }
      if (item_seat[22].landSeat === 'YES') {
        if (storeReady23) {
          storeImg23.src = session.data.landAndShopInfos[22].shopImageFileName

          context?.drawImage(storeImg23, 627, 515, store_width, store_height);
        }
        if (typeReady23) {
          if (item_seat[22].shopBusinessType === '한복')
          {
            typeImg23.src = "/assets/han_type.png";
          }
          if (item_seat[22].shopBusinessType === '공방')
          {
            typeImg23.src = "/assets/gong_type.jpg";
          }
          if (item_seat[22].shopBusinessType === '음식점')
          {
            typeImg23.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg23, 595, 585, type_width, type_height);
        }
      }
      if (item_seat[23].landSeat === 'YES') {
        if (storeReady24) {
          storeImg24.src = session.data.landAndShopInfos[23].shopImageFileName

          context?.drawImage(storeImg24, 1060, 515, store_width, store_height);
        }
        if (typeReady24) {
          if (item_seat[23].shopBusinessType === '한복')
          {
            typeImg24.src = "/assets/han_type.png";
          }
          if (item_seat[23].shopBusinessType === '공방')
          {
            typeImg24.src = "/assets/gong_type.jpg";
          }
          if (item_seat[23].shopBusinessType === '음식점')
          {
            typeImg24.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg24, 1025, 585, type_width, type_height);
        }
      }
    }
    if (session_land.land == '서초구') {
      if (item_seat[24].landSeat === 'YES') {
        if (storeReady25) {
          storeImg25.src = session.data.landAndShopInfos[24].shopImageFileName

          context?.drawImage(storeImg25, 195, 130, store_width, store_height);
        }
        if (typeReady25) {
          if (item_seat[24].shopBusinessType === '한복')
          {
            typeImg25.src = "/assets/han_type.png";
          }
          if (item_seat[24].shopBusinessType === '공방')
          {
            typeImg25.src = "/assets/gong_type.jpg";
          }
          if (item_seat[24].shopBusinessType === '음식점')
          {
            typeImg25.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg25, 165, 200, type_width, type_height);
        }
      }
      if (item_seat[25].landSeat === 'YES') {
        if (storeReady26) {
          storeImg26.src = session.data.landAndShopInfos[25].shopImageFileName

          context?.drawImage(storeImg26, 627, 130, store_width, store_height);
        }
        if (typeReady26) {
          if (item_seat[25].shopBusinessType === '한복')
          {
            typeImg26.src = "/assets/han_type.png";
          }
          if (item_seat[25].shopBusinessType === '공방')
          {
            typeImg26.src = "/assets/gong_type.jpg";
          }
          if (item_seat[25].shopBusinessType === '음식점')
          {
            typeImg26.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg26, 595, 200, type_width, type_height);
        }
      }
      if (item_seat[26].landSeat === 'YES') {
        if (storeReady27) {
          storeImg27.src = session.data.landAndShopInfos[26].shopImageFileName

          context?.drawImage(storeImg27, 1060, 130, store_width, store_height);
        }
        if (typeReady27) {
          if (item_seat[26].shopBusinessType === '한복')
          {
            typeImg27.src = "/assets/han_type.png";
          }
          if (item_seat[26].shopBusinessType === '공방')
          {
            typeImg27.src = "/assets/gong_type.jpg";
          }
          if (item_seat[26].shopBusinessType === '음식점')
          {
            typeImg27.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg27, 1025, 200, type_width, type_height);
        }
      }
      if (item_seat[27].landSeat === 'YES') {
        if (storeReady28) {
          storeImg28.src = session.data.landAndShopInfos[27].shopImageFileName

          context?.drawImage(storeImg28, 195, 515, store_width, store_height);
        }
        if (typeReady28) {
          if (item_seat[27].shopBusinessType === '한복')
          {
            typeImg28.src = "/assets/han_type.png";
          }
          if (item_seat[27].shopBusinessType === '공방')
          {
            typeImg28.src = "/assets/gong_type.jpg";
          }
          if (item_seat[27].shopBusinessType === '음식점')
          {
            typeImg28.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg28, 165, 585, type_width, type_height);
        }
      }
      if (item_seat[28].landSeat === 'YES') {
        if (storeReady29) {
          storeImg29.src = session.data.landAndShopInfos[28].shopImageFileName

          context?.drawImage(storeImg29, 627, 515, store_width, store_height);
        }
        if (typeReady29) {
          if (item_seat[28].shopBusinessType === '한복')
          {
            typeImg29.src = "/assets/han_type.png";
          }
          if (item_seat[28].shopBusinessType === '공방')
          {
            typeImg29.src = "/assets/gong_type.jpg";
          }
          if (item_seat[28].shopBusinessType === '음식점')
          {
            typeImg29.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg29, 595, 585, type_width, type_height);
        }
      }
      if (item_seat[29].landSeat === 'YES') {
        if (storeReady30) {
          storeImg30.src = session.data.landAndShopInfos[29].shopImageFileName

          context?.drawImage(storeImg30, 1060, 515, store_width, store_height);
        }
        if (typeReady30) {
          if (item_seat[29].shopBusinessType === '한복')
          {
            typeImg30.src = "/assets/han_type.png";
          }
          if (item_seat[29].shopBusinessType === '공방')
          {
            typeImg30.src = "/assets/gong_type.jpg";
          }
          if (item_seat[29].shopBusinessType === '음식점')
          {
            typeImg30.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg30, 1025, 585, type_width, type_height);
        }
      }
    }
    if (session_land.land == '영등포구') {
      if (item_seat[30].landSeat === 'YES') {
        if (storeReady31) {
          storeImg31.src = session.data.landAndShopInfos[30].shopImageFileName

          context?.drawImage(storeImg31, 195, 130, store_width, store_height);
        }
        if (typeReady31) {
          if (item_seat[30].shopBusinessType === '한복')
          {
            typeImg31.src = "/assets/han_type.png";
          }
          if (item_seat[30].shopBusinessType === '공방')
          {
            typeImg31.src = "/assets/gong_type.jpg";
          }
          if (item_seat[30].shopBusinessType === '음식점')
          {
            typeImg31.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg31, 165, 200, type_width, type_height);
        }
      }
      if (item_seat[31].landSeat === 'YES') {
        if (storeReady32) {
          storeImg32.src = session.data.landAndShopInfos[31].shopImageFileName

          context?.drawImage(storeImg32, 627, 130, store_width, store_height);
        }
        if (typeReady32) {
          if (item_seat[31].shopBusinessType === '한복')
          {
            typeImg32.src = "/assets/han_type.png";
          }
          if (item_seat[31].shopBusinessType === '공방')
          {
            typeImg32.src = "/assets/gong_type.jpg";
          }
          if (item_seat[31].shopBusinessType === '음식점')
          {
            typeImg32.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg32, 595, 200, type_width, type_height);
        }
      }
      if (item_seat[32].landSeat === 'YES') {
        if (storeReady33) {
          storeImg33.src = session.data.landAndShopInfos[32].shopImageFileName

          context?.drawImage(storeImg33, 1060, 130, store_width, store_height);
        }
        if (typeReady33) {
          if (item_seat[32].shopBusinessType === '한복')
          {
            typeImg33.src = "/assets/han_type.png";
          }
          if (item_seat[32].shopBusinessType === '공방')
          {
            typeImg33.src = "/assets/gong_type.jpg";
          }
          if (item_seat[32].shopBusinessType === '음식점')
          {
            typeImg33.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg33, 1025, 200, type_width, type_height);
        }
      }
      if (item_seat[33].landSeat === 'YES') {
        if (storeReady34) {
          storeImg34.src = session.data.landAndShopInfos[33].shopImageFileName

          context?.drawImage(storeImg34, 195, 515, store_width, store_height);
        }
        if (typeReady34) {
          if (item_seat[33].shopBusinessType === '한복')
          {
            typeImg34.src = "/assets/han_type.png";
          }
          if (item_seat[33].shopBusinessType === '공방')
          {
            typeImg34.src = "/assets/gong_type.jpg";
          }
          if (item_seat[33].shopBusinessType === '음식점')
          {
            typeImg34.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg34, 165, 585, type_width, type_height);
        }
      }
      if (item_seat[34].landSeat === 'YES') {
        if (storeReady35) {
          storeImg35.src = session.data.landAndShopInfos[34].shopImageFileName

          context?.drawImage(storeImg35, 627, 515, store_width, store_height);
        }
        if (typeReady35) {
          if (item_seat[34].shopBusinessType === '한복')
          {
            typeImg35.src = "/assets/han_type.png";
          }
          if (item_seat[34].shopBusinessType === '공방')
          {
            typeImg35.src = "/assets/gong_type.jpg";
          }
          if (item_seat[34].shopBusinessType === '음식점')
          {
            typeImg35.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg35, 595, 585, type_width, type_height);
        }
      }
      if (item_seat[35].landSeat === 'YES') {
        if (storeReady36) {
          storeImg36.src = session.data.landAndShopInfos[35].shopImageFileName

          context?.drawImage(storeImg36, 1060, 515, store_width, store_height);
        }
        if (typeReady36) {
          if (item_seat[35].shopBusinessType === '한복')
          {
            typeImg36.src = "/assets/han_type.png";
          }
          if (item_seat[35].shopBusinessType === '공방')
          {
            typeImg36.src = "/assets/gong_type.jpg";
          }
          if (item_seat[35].shopBusinessType === '음식점')
          {
            typeImg36.src = "/assets/food_type.png";
          }
          context?.drawImage(typeImg36, 1025, 585, type_width, type_height);
        }
      }
    }
  }

  // var [shop, setShop] = useState([]);
  // function searchShop() {
  //   const url = "https://onnuriservice1.paas-ta.org/shop";
  //   axios.get(url)
  //     .then(function (response) {
  //       setShop(response.data);
  //       //console.log(response.data)
  //     })
  //     .catch(function (error) {
  //       //console.log("실패");
  //     })
  // }
  // useEffect(() => {
  //   searchShop()
  // }, []);


  useEffect(() => {
    gameLoop()
  }, []);

  function gameLoop() {
    loadImage();
    moveUser();
    loadstore();
    requestAnimationFrame(gameLoop);
  }


  //console.log(session.data.shopRegion)

  useEffect(() => {
    // 키보드 입력
    window.addEventListener('keydown', e => {
      // 마우스 좌표 찾기
      var x = user.x;
      var y = user.y;
      var coords = "X coords: " + x + ", Y coords: " + y;
      //console.log(coords);
      // 클릭 이벤트
      if (x >= 100 && x <= 400 && y >= 250 && y <= 450) {
        if (e.keyCode === 88) {
          if (session_land.land == '성북구' && item_seat[0].landSeat === 'YES') {
            const location = { location: item_seat[0].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '동작구' && item_seat[6].landSeat === 'YES') {
            const location = { location: item_seat[6].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '종로구' && item_seat[12].landSeat === 'YES') {
            const location = { location: item_seat[12].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '구로구' && item_seat[18].landSeat === 'YES') {
            const location = { location: item_seat[18].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '서초구' && item_seat[24].landSeat === 'YES') {
            const location = { location: item_seat[24].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()     
          }
          if (session_land.land == '영등포구' && item_seat[30].landSeat === 'YES') {
            const location = { location: item_seat[30].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
        }
      }
      if (x >= 600 && x <= 900 && y >= 250 && y <= 450) {
        if (e.keyCode === 88) {
          if (session_land.land == '성북구' && item_seat[1].landSeat === 'YES') {
            const location = { location: item_seat[1].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '동작구' && item_seat[7].landSeat === 'YES') {
            const location = { location: item_seat[7].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '종로구' && item_seat[13].landSeat === 'YES') {
            const location = { location: item_seat[13].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '구로구' && item_seat[19].landSeat === 'YES') {
            const location = { location: item_seat[19].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '서초구' && item_seat[25].landSeat === 'YES') {
            const location = { location: item_seat[25].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()     
          }
          if (session_land.land == '영등포구' && item_seat[31].landSeat === 'YES') {
            const location = { location: item_seat[31].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
        }
      }
      if (x >= 1100 && x <= 1400 && y >= 250 && y <= 450) {
        if (e.keyCode === 88) {
          if (session_land.land == '성북구' && item_seat[2].landSeat === 'YES') {
            const location = { location: item_seat[2].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '동작구' && item_seat[8].landSeat === 'YES') {
            const location = { location: item_seat[8].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '종로구' && item_seat[14].landSeat === 'YES') {
            const location = { location: item_seat[14].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '구로구' && item_seat[20].landSeat === 'YES') {
            const location = { location: item_seat[20].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '서초구' && item_seat[26].landSeat === 'YES') {
            const location = { location: item_seat[26].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()     
          }
          if (session_land.land == '영등포구' && item_seat[32].landSeat === 'YES') {
            const location = { location: item_seat[32].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
        }
      }
      if (x >= 100 && x <= 400 && y >= 650 && y <= 850) {
        if (e.keyCode === 88) {
          if (session_land.land == '성북구' && item_seat[3].landSeat === 'YES') {
            const location = { location: item_seat[3].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '동작구' && item_seat[9].landSeat === 'YES') {
            const location = { location: item_seat[9].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '종로구' && item_seat[15].landSeat === 'YES') {
            const location = { location: item_seat[15].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '구로구' && item_seat[21].landSeat === 'YES') {
            const location = { location: item_seat[21].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '서초구' && item_seat[27].landSeat === 'YES') {
            const location = { location: item_seat[27].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()     
          }
          if (session_land.land == '영등포구' && item_seat[33].landSeat === 'YES') {
            const location = { location: item_seat[33].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
        }
      }
      if (x >= 600 && x <= 900 && y >= 650 && y <= 850) {
        if (e.keyCode === 88) {
          if (session_land.land == '성북구' && item_seat[4].landSeat === 'YES') {
            const location = { location: item_seat[4].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '동작구' && item_seat[10].landSeat === 'YES') {
            const location = { location: item_seat[10].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '종로구' && item_seat[16].landSeat === 'YES') {
            const location = { location: item_seat[16].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '구로구' && item_seat[22].landSeat === 'YES') {
            const location = { location: item_seat[22].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '서초구' && item_seat[28].landSeat === 'YES') {
            const location = { location: item_seat[28].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()     
          }
          if (session_land.land == '영등포구' && item_seat[34].landSeat === 'YES') {
            const location = { location: item_seat[34].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
        }
      }
      if (x >= 1100 && x <= 1400 && y >= 650 && y <= 850) {
        if (e.keyCode === 88) {
          if (session_land.land == '성북구' && item_seat[5].landSeat === 'YES') {
            const location = { location: item_seat[5].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '동작구' && item_seat[11].landSeat === 'YES') {
            const location = { location: item_seat[11].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '종로구' && item_seat[17].landSeat === 'YES') {
            const location = { location: item_seat[17].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '구로구' && item_seat[23].landSeat === 'YES') {
            const location = { location: item_seat[23].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
          if (session_land.land == '서초구' && item_seat[29].landSeat === 'YES') {
            const location = { location: item_seat[29].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()     
          }
          if (session_land.land == '영등포구' && item_seat[35].landSeat === 'YES') {
            const location = { location: item_seat[35].shopId };
            window.sessionStorage.setItem("location", JSON.stringify(location));
            openWin()
          }
        }
      }
      if (x >= 630 && x <= 730 && y >= 50 && y <= 80) {
        returntown()
      }
    });
  }, []);

  return (
    <React.Fragment>
      <AppAppBar2 />
      <RemoveScrollBar />
      <div className='Mains'>
        <Sidebar />
        <canvas ref={canvasRef}
          style={{ width: "112vw", height: "110vh" }}
          width="1500"
          height="1000"
        />
      </div>
      <AppFooter />
    </React.Fragment>
  );
}


export default withRoot(Gather);