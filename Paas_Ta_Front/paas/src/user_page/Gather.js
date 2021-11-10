import React, { createRef, useEffect, useState } from "react";
import AppAppBar2 from '../modules/views/AppBar2';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import Sidebar from "./Sidebar";
import axios from "axios";
import './Gather.css';

function Gather(props) {

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

  let user = {
    speed: 4,
    x: 500,
    y: 300
  };

  let storeReady = false;
  let storeImg = new Image();

  let store_width = 90;
  let store_height = 55;

  storeImg.src = "/assets/github.png";

  storeImg.onload = function () {
      storeReady = true;
  };

  let typeReady = false;
  let typeImg = new Image();

  let type_width = 200;
  let type_height = 200;

  typeImg.src = "/assets/type.png";

  typeImg.onload = function () {
      typeReady = true;
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

  // 키보드 입력
  // window.addEventListener('keydown', e => {
  //   // 마우스 좌표 찾기
  //   var x = user.x;
  //   var y = user.y;
  //   var coords = "X coords: " + x + ", Y coords: " + y;
  //   console.log(coords);
  //   // 클릭 이벤트
  //   if (x >= 200 && x <= 300 && y >= 100 && y <= 200) {
  //     if (e.keyCode === 88) {
  //       openWin()
  //       console.log('키보드 이벤트 발생!');
  //     }
  //   }
  //   if (x >= 900 && x <= 1000 && y >= 400 && y <= 550) {
  //     returntown()
  //     console.log('키보드 이벤트 발생!');
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

    canvas.addEventListener('keydown', e => {
      // 마우스 좌표 찾기
      var x = user.x;
      var y = user.y;
      var coords = "X coords: " + x + ", Y coords: " + y;
      console.log(coords);
      // 클릭 이벤트
      if (x >= 200 && x <= 300 && y >= 100 && y <= 200) {
        if (e.keyCode === 88) {
          openWin()
          console.log('키보드 이벤트 발생!');
        }
      }
      if (x >= 900 && x <= 1000 && y >= 400 && y <= 550) {
        returntown()
        console.log('키보드 이벤트 발생!');
      }
    });
  
    // 마우스 클릭
    canvas.addEventListener('mousedown', e => {
      // 마우스 좌표 찾기
      var x = e.clientX;
      var y = e.clientY;
      var coords = "X coords: " + x + ", Y coords: " + y;
      console.log(coords);
      // 클릭 이벤트
      if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
        openWin()
        console.log('마우스 버튼 ON 이벤트 발생!');
      }
    });
  }, []);

  function loadImage() {
    if (backgroundReady) {
      context?.drawImage(backgroundImg, 0, 0);
    }
    if (storeReady) {
      context?.drawImage(storeImg, 195, 130,store_width,store_height);
    }
    if (storeReady) {
      context?.drawImage(storeImg, 627, 130,store_width,store_height);
    }
    if (storeReady) {
      context?.drawImage(storeImg, 1060, 130,store_width,store_height);
    }
    if (storeReady) {
          context?.drawImage(storeImg, 195, 515,store_width,store_height);
    }
    if (storeReady) {
      context?.drawImage(storeImg, 627, 515,store_width,store_height);
    }
    if (storeReady) {
      context?.drawImage(storeImg, 1060, 515,store_width,store_height);
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
    var width = 1000;
    var height = 925;

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

  function gameLoop() {
    loadImage();
    moveUser();
    //loadstore();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
  /////////////////////////////
  //api
  /////////////////////////////

  const session_land = JSON.parse(window.sessionStorage.getItem("land"));
  //console.log(session_land);
  const [store_land, setStore_land] = useState([]);

  var new_store = [];
  function searchstore() {
      const url = "http://localhost:8080/lands/";
      axios.get(url)
          .then(function (response) {
              var land = [];
              for (var i = 0; i < response.data.length; i++) {
                  if (response.data[i].buildingName === session_land.land) {
                      land[i] = response.data[i]
                  }
              }
              setStore_land(land);
              //console.log(response.data)
              console.log("성공");
          })
          .catch(function (error) {
              console.log("실패");
          })
  }
  //console.log(session_land.land)
  //console.log(store_land)
  //new_store = store_land;
  //console.log(new_store)
  //console.log(store[0].landCoordinate)
  new_store = store_land;

  useEffect(() => {
      searchstore()
      //gameLoop()
  }, []);

  // function loadstore() {
  //     if (new_store[0].seat === 'YES') {
  //         if (storeReady) {
  //             context?.drawImage(storeImg, 192, 130, store_width, store_height);
  //         }
  //         if (typeReady) {
  //             context?.drawImage(typeImg, 145, 200, type_width, type_height);
  //         }
  //     }
  //     if (new_store[1].seat === 'NO') {
  //         if (storeReady) {
  //             context?.drawImage(storeImg, 627, 130, store_width, store_height);
  //         }
  //         if (typeReady) {
  //             context?.drawImage(typeImg, 575, 200, type_width, type_height);
  //         }
  //     }
  //     if (new_store[2].seat === 'NO') {
  //         if (storeReady) {
  //             context?.drawImage(storeImg, 1060, 130, store_width, store_height);
  //         }
  //         if (typeReady) {
  //             context?.drawImage(typeImg, 1005, 200, type_width, type_height);
  //         }
  //     }
  //     if (new_store[3].seat === 'YES') {
  //         if (storeReady) {
  //             context?.drawImage(storeImg, 192, 515, store_width, store_height);
  //         }
  //         if (typeReady) {
  //             context?.drawImage(typeImg, 145, 585, type_width, type_height);
  //         }
  //     }
  //     if (new_store[4].seat === 'YES') {
  //         if (storeReady) {
  //             context?.drawImage(storeImg, 627, 515, store_width, store_height);
  //         }
  //         if (typeReady) {
  //             context?.drawImage(typeImg, 575, 585, type_width, type_height);
  //         }
  //     }
  //     if (new_store[5].seat === 'YES') {
  //         if (storeReady) {
  //             context?.drawImage(storeImg, 1060, 515, store_width, store_height);
  //         }
  //         if (typeReady) {
  //             context?.drawImage(typeImg, 1005, 585, type_width, type_height);
  //         }
  //     }
  // }



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