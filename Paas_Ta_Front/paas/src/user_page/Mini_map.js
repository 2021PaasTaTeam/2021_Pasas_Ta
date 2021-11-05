import React, { createRef, useEffect } from "react";
import withRoot from '../modules/withRoot';
import './Gather.css';

function Mini_map() {

  let canvas;
  let context;
  let canvasRef = createRef();

  let backgroundReady = false;
  let backgroundImg = new Image();

  backgroundImg.src = "/assets/map.png";

  backgroundImg.onload = function () {
    backgroundReady = true;
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

  useEffect(() => {

    canvas = canvasRef.current;
    context = canvas.getContext("2d");

    // 마우스 클릭
    canvas.addEventListener('mousedown', e => {
      // 마우스 좌표 찾기
      var x = e.clientX;
      var y = e.clientY;
      var coords = "X coords: " + x + ", Y coords: " + y;
      console.log(coords);
      // 클릭 이벤트
      if (x >= 0 && x <= 1000 && y >= 0 && y <= 1000) {
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
      context?.drawImage(storeImg, 192, 130,store_width,store_height);
    }
    if (typeReady) {
      context?.drawImage(typeImg, 145, 200,type_width,type_height);
    }
  }

  function gameLoop() {
    loadImage();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();
  
  function openWin() {
    // 상품 구매 페이지  
    window.open("/item", "", "width=650, height=900, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
  }

  return (
    <React.Fragment>
      <canvas ref={canvasRef}
      style={{ width: "62vw", height: "50vh" }}
        width="1500"
        height="925"
      />
    </React.Fragment>
  );
}


export default withRoot(Mini_map);