import React, { createRef, useEffect, useState } from "react";
import AppAppBar2 from '../modules/views/AppBar2';
import AppFooter from '../modules/views/AppFooter';
import withRoot from '../modules/withRoot';
import { RemoveScrollBar } from 'react-remove-scroll-bar';
import Sidebar from "./Sidebar";
import './Gather.css';
import axios from "axios";

function Town(props) {

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

  backgroundImg.src = "/assets/town.png";

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
    speed: 5,
    x: 600,
    y: 400
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
  window.addEventListener('keydown', e => {
    // 마우스 좌표 찾기
    var x = user.x;
    var y = user.y;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    // 클릭 이벤트
    if (x >= 250 && x <= 400 && y >= 250 && y <= 400) {
      if (e.keyCode === 88) {
        Enter()
      }
    }
  });

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

    // 마우스 클릭
    canvas.addEventListener('mousedown', e => {
      // 마우스 좌표 찾기
      var x = e.clientX;
      var y = e.clientY;
      var coords = "X coords: " + x + ", Y coords: " + y;
      console.log(coords);
      // 클릭 이벤트
      if (x >= 250 && x <= 400 && y >= 250 && y <= 400) {
        Enter()
        //const session_land = '성북';
        const landObj = { land: '성북' };
        window.sessionStorage.setItem("land", JSON.stringify(landObj));
        console.log('마우스 버튼 ON 이벤트 발생!');
      }
    });
  }, []);

  function loadImage() {
    if (backgroundReady) {
      context?.drawImage(backgroundImg, 0, 0);
    }
  }

  const Enter = () => {
    // if (window.confirm("성북구 장터에 입장하시겠습니까?") == true) {    //확인
    //   window.location.replace("./Gather")
    // } else {   //취소
    //   if (window.location.replace("/Town") === true
    //   ) {
    //     window.location.replace("/Gather")
    //   }
    //   else {
    //     window.location.replace("/Town")
    //   }
    // }
    window.location.replace("./Gather")        
  }

  function moveChar(deltaX, deltaY, direction) {
    var width = 1400;
    var height = 790;

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
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
  
  return (
    <React.Fragment>
      <RemoveScrollBar />
      <AppAppBar2 />
      <div className='Mains'>
        <Sidebar />
        <canvas
          ref={canvasRef}
          style={{ width: "101vw", height: "93vh" }}
          width="1480"
          height="875"
        />
      </div>

      <AppFooter />
    </React.Fragment>
  );
}


export default withRoot(Town);