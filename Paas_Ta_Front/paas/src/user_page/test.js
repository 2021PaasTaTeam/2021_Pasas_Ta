import React, { createRef, useEffect,useState } from "react";
import withRoot from '../modules/withRoot';
import axios from "axios";
import './Gather.css';

import FormButton from '../modules/form/FormButton';
import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';

function Test() {

    /////
    const session = JSON.parse(window.sessionStorage.getItem("data"));
    var [shop_name, setShop_name] = useState();
    const [shop_address, setShop_address] = useState();
    const [shop_phone, setShop_phone] = useState();
    const [shop_business_type, setShop_business_type] = useState();
    const [shop_region, setShop_region] = useState();
    var [store, setStore] = useState([]);
    var id = useState([]);

    function searchId() {
        const url = "http://localhost:8080/shop";
        axios.get(url)
            .then(function (response) {
                setStore(response.data);
                //console.log("성공");
                var name;
                var address;
                var phone;
                for (let i = 0; i < store.length; i++) {
                    if (store[i].email === session.data.email) {
                        name = response.data[i].name;
                        address = response.data[i].address;
                        phone = response.data[i].phone;
                    }
                }
                setShop_name(name);
                setShop_address(address);
                setShop_phone(phone);
                //console.log(name)
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }
    //console.log(store)

    for (let i = 0; i < store.length; i++) {
        if (store[i].email === session.data.email) {
            id = store[i];
        }
    }
   // console.log(id)


    useEffect(() => {
        searchId()
    }, [id.shopId]);


    // 가게 업종
    const onShop_business_typeHandler = (event) => {
        setShop_business_type(event.currentTarget.value);
    }

    // 가게 이름
    const onShop_nameHandler = (event) => {
        setShop_name(event.currentTarget.value);
    }

    // 가게 실제 주소
    const onShop_addressHandler = (event) => {
        setShop_address(event.currentTarget.value)
    }

    // 가게 지역구
    const onShop_regionHandler = (event) => {
        setShop_region(event.currentTarget.value)
    }

    // 가게 전화번호
    const onShop_phoneHandler = (event) => {
        setShop_phone(event.currentTarget.value);
    }

    const onClickModify = () => {
        let data = JSON.stringify({
            'name': shop_name,
            'address': shop_address,
            'phone': shop_phone,
            'region': shop_region,
            'businessType': shop_business_type
        })
        console.log('click shop')
        console.log('가게명 : ', shop_name)
        console.log('가게실제주소 : ', shop_address)
        console.log('가게전화번호 : ', shop_phone)
        console.log('가게업종 : ', shop_business_type)
        console.log('가게지역구 : ', shop_region)

        axios.post('http://localhost:8080/shop/' + id.shopId, data, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            }
        })
            .then(res => {
                console.log(res)
                alert('가게가 수정되었습니다.')
                window.location.replace("/Town")
            })
            .catch()
    }

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
  }

  function openWin() {
    // 상품 구매 페이지  
    window.open("/item", "", "width=650, height=900, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
  }

  //////
  /////
  const session_land = JSON.parse(window.sessionStorage.getItem("land"));
  //console.log(session_land);
  const [store_land, setStore_land] = useState([]);

  var new_store = [];
  function searchstore() {
    const url = "http://localhost:8080/lands/";
    axios.get(url)
      .then(function (response) {
        var land = [];
        for (var i=0; i<response.data.length; i++) {
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
  //console.log(store)
  new_store = store_land;
  console.log(new_store)

  //console.log(store[0].landCoordinate)

  useEffect(() => {
    searchstore()
  }, []);


  function gameLoop() {
    loadImage();
    //loadstore();
    requestAnimationFrame(gameLoop);
  }

  gameLoop();

  return (
    <React.Fragment>
        <AppAppBar2 />
        <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        우리 가게 수정하기
                    </Typography>
                </React.Fragment>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" style={{
                            padding: 10
                        }}>
                            가게 이름
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <input type="text"
                            name="name"
                            style={{
                                padding: 20,
                                width: 380,
                                height: 50,
                                border: "2px solid black",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            value={shop_name}
                            onChange={onShop_nameHandler}
                        />
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" style={{
                            padding: 10
                        }}>
                            지역구 선택
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <select
                            name="number"
                            style={{
                                width: 380,
                                height: 50,
                                border: "2px solid black",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            value={shop_region}
                            onChange={onShop_regionHandler}
                        >
                            <option selected="selected">&nbsp;&nbsp;{id.region}</option>
                            <option>종로구</option>
                            <option>성북구</option>
                            <option>서초구</option>
                            <option>동작구</option>
                            <option>영등포구</option>
                        </select>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" style={{
                            padding: 10
                        }}>
                            가게 업종
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <select
                            name="number"
                            style={{
                                width: 380,
                                height: 50,
                                border: "2px solid black",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            value={shop_business_type}
                            onChange={onShop_business_typeHandler}
                        >
                            <option selected="selected">&nbsp;&nbsp;{id.bussinessType}</option>
                            <option >한복</option>
                            <option >공방</option>
                            <option >음식점</option>
                            <option >기타</option>
                        </select>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center" >
                            가게 실제주소
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <input type="text"
                            name="name"
                            style={{
                                padding: 20,
                                width: 380,
                                height: 50,
                                border: "2px solid black",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            value={shop_address}
                            onChange={onShop_addressHandler} />
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3}>
                        <Typography variant="h6" align="center">
                            가게 전화번호
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <input type="text"
                            name="number"
                            value={shop_phone}
                            placeholder="예) 01012345678"
                            style={{
                                padding: 20,
                                width: 380,
                                height: 50,
                                border: "2px solid black",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            onChange={onShop_phoneHandler}
                        />
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormButton
                            sx={{ mt: 1, mb: 1 }}
                            size="large"
                            color="primary"
                            fullWidth
                            style={{
                                padding: 8,
                                border: "4px solid black",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            //type="submit"
                            onClick={onClickModify}
                        >
                            {'수정하기'}
                        </FormButton>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormButton
                            sx={{ mt: 1, mb: 1 }}
                            size="large"
                            color="secondary"
                            fullWidth
                            style={{
                                padding: 8,
                                border: "4px solid red",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            href="/Town"
                        >
                            {'취소하기'}
                        </FormButton>
                    </Grid>
                </Grid>
            </AppForm>
            <AppFooter />
            <canvas ref={canvasRef}
      style={{ width: "62vw", height: "50vh" }}
        width="1500"
        height="925"
      />
        </React.Fragment>
  );
}


export default withRoot(Test);