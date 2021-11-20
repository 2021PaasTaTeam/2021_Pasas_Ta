import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { createRef, useState, useEffect } from 'react';
import axios from 'axios';
import Land_json from './land';

function AddStore() {

  const session_land = JSON.parse(window.sessionStorage.getItem("land"));

  //console.log(session_land)
  //console.log(session_land2)

  const [shop_name, setShop_name] = useState("");
  const [shop_address, setShop_address] = useState("");
  const [shop_phone, setShop_phone] = useState("");
  const [shop_image, setShop_image] = useState("");
  const [registeration_number, setRegisteration_number] = useState("");
  const [shop_business_type, setShop_business_type] = useState("");
  const [shop_region, setShop_region] = useState("");
  const [fileImage, setFileImage] = useState("");

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

  // 가게 상표 이미지
  const onShop_imageHandler = (event) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
    setShop_image(event.currentTarget.files[0]);
  }

  // 사업자 번호
  const onRegisteration_numberHandler = (event) => {
    setRegisteration_number(event.currentTarget.value);
  }

  const session = JSON.parse(window.sessionStorage.getItem("data"));


  const onClickRegister = () => {
    const formData = new FormData();

    formData.append("image", shop_image);
    formData.append("name", shop_name);
    formData.append("address", shop_address);
    formData.append("phone", shop_phone);
    formData.append("registrationNum", registeration_number);
    formData.append("email", session.data.email);
    formData.append("businessType", shop_business_type);
    formData.append("region", session_land.land);
    formData.append("landId", region)
    //console.log(formData)

    // console.log('click shop')
    // console.log('가게명 : ', shop_name)
    // console.log('가게실제주소 : ', shop_address)
    // console.log('가게전화번호 : ', shop_phone)
    // console.log('가게상표이미지 : ', shop_image)
    // console.log('사업자번호 : ', registeration_number)
    // console.log('이메일 : ', session.data.email)
    // console.log('가게업종 : ',shop_business_type)
    // console.log('가게지역구 : ', session_land.land)
    // console.log('위치 : ', region)

    axios.post('https://onnuriservice.paas-ta.org/shop', formData, {
      headers: {
        'Content-type': 'multipart/form-data; charset=utf-8',
      }
    })
      .then(res => {
        //console.log(res)
        session.data.type = 'SELLER'
        window.sessionStorage.setItem("data", JSON.stringify(session));
        alert('가게가 등록되었습니다.')
        window.location.replace("/Town")
      })
      .catch()
  }

  const [image1, setImage1] = useState("/assets/blank.jpg");
  const [image2, setImage2] = useState("/assets/blank.jpg");
  const [image3, setImage3] = useState("/assets/blank.jpg");
  const [image4, setImage4] = useState("/assets/blank.jpg");
  const [image5, setImage5] = useState("/assets/blank.jpg");
  const [image6, setImage6] = useState("/assets/blank.jpg");

  const [region, setRegion] = useState("");

  //console.log(session_land.land)
  var list = [];

  for (var i = 0; i < session.data.landAndShopInfos.length; i++) {
    if (session.data.landAndShopInfos[i].landBuilding === session_land.land) {
      list.push(session.data.landAndShopInfos[i])
    }
  }
  //console.log(list)

  function load() {
    if (list[0].landSeat === 'YES') {
      setImage1("/assets/x.gif")
    }
    if (list[1].landSeat === 'YES') {
      setImage2("/assets/x.gif")
    }
    if (list[2].landSeat === 'YES') {
      setImage3("/assets/x.gif")
    }
    if (list[3].landSeat === 'YES') {
      setImage4("/assets/x.gif")
    }
    if (list[4].landSeat === 'YES') {
      setImage5("/assets/x.gif")
    }
    if (list[5].landSeat === 'YES') {
      setImage6("/assets/x.gif")
    }
  }

  function next() {
    if (image1 === "/assets/O.gif") {
      setRegion(list[0].landId)
    }
    if (image2 === "/assets/O.gif") {
      //console.log("2번 확인")
      setRegion(list[1].landId)
      //console.log(list[1].landId)
    }
    if (image3 === "/assets/O.gif") {
      setRegion(list[2].landId)
      //console.log("3번 확인")
      //console.log(list[2].landId)
    }
    if (image4 === "/assets/O.gif") {
      setRegion(list[3].landId)
    }
    if (image5 === "/assets/O.gif") {
      setRegion(list[4].landId)
    }
    if (image6 === "/assets/O.gif") {
      setRegion(list[5].landId)
    }
  }

  //console.log(id)
  useEffect(() => {
    load()
  }, []);
  useEffect(() => {
    next()
  }, [list]);

  //console.log(id)
  function clickCell1() {
    if (image1 !== "/assets/x.gif") {
      setImage1("/assets/O.gif")
      setImage2("/assets/blank.jpg")
      setImage3("/assets/blank.jpg")
      setImage4("/assets/blank.jpg")
      setImage5("/assets/blank.jpg")
      setImage6("/assets/blank.jpg")

      if (image2 === "/assets/x.gif") {
        setImage2("/assets/x.gif")
      }
      if (image3 === "/assets/x.gif") {
        setImage3("/assets/x.gif")
      }
      if (image4 === "/assets/x.gif") {
        setImage4("/assets/x.gif")
      }
      if (image5 === "/assets/x.gif") {
        setImage5("/assets/x.gif")
      }
      if (image6 === "/assets/x.gif") {
        setImage6("/assets/x.gif")
      }
    }
    if (image1 === "/assets/O.gif") {
      setImage1("/assets/blank.jpg")
    }
  }
  function clickCell2() {
    if (image2 !== "/assets/x.gif") {
      setImage2("/assets/O.gif")
      setImage1("/assets/blank.jpg")
      setImage3("/assets/blank.jpg")
      setImage4("/assets/blank.jpg")
      setImage5("/assets/blank.jpg")
      setImage6("/assets/blank.jpg")

      if (image1 === "/assets/x.gif") {
        setImage1("/assets/x.gif")
      }
      if (image3 === "/assets/x.gif") {
        setImage3("/assets/x.gif")
      }
      if (image4 === "/assets/x.gif") {
        setImage4("/assets/x.gif")
      }
      if (image5 === "/assets/x.gif") {
        setImage5("/assets/x.gif")
      }
      if (image6 === "/assets/x.gif") {
        setImage6("/assets/x.gif")
      }
    }
    if (image2 === "/assets/O.gif") {
      setImage2("/assets/blank.jpg")
    }
  }
  function clickCell3() {
    if (image3 !== "/assets/x.gif") {
      setImage3("/assets/O.gif")
      setImage2("/assets/blank.jpg")
      setImage1("/assets/blank.jpg")
      setImage4("/assets/blank.jpg")
      setImage5("/assets/blank.jpg")
      setImage6("/assets/blank.jpg")

      if (image2 === "/assets/x.gif") {
        setImage2("/assets/x.gif")
      }
      if (image1 === "/assets/x.gif") {
        setImage1("/assets/x.gif")
      }
      if (image4 === "/assets/x.gif") {
        setImage4("/assets/x.gif")
      }
      if (image5 === "/assets/x.gif") {
        setImage5("/assets/x.gif")
      }
      if (image6 === "/assets/x.gif") {
        setImage6("/assets/x.gif")
      }
    }
    if (image3 === "/assets/O.gif") {
      setImage3("/assets/blank.jpg")
    }
  }
  function clickCell4() {
    if (image4 !== "/assets/x.gif") {
      setImage4("/assets/O.gif")
      setImage2("/assets/blank.jpg")
      setImage3("/assets/blank.jpg")
      setImage1("/assets/blank.jpg")
      setImage5("/assets/blank.jpg")
      setImage6("/assets/blank.jpg")

      if (image2 === "/assets/x.gif") {
        setImage2("/assets/x.gif")
      }
      if (image3 === "/assets/x.gif") {
        setImage3("/assets/x.gif")
      }
      if (image1 === "/assets/x.gif") {
        setImage1("/assets/x.gif")
      }
      if (image5 === "/assets/x.gif") {
        setImage5("/assets/x.gif")
      }
      if (image6 === "/assets/x.gif") {
        setImage6("/assets/x.gif")
      }
    }
    if (image4 === "/assets/O.gif") {
      setImage4("/assets/blank.jpg")
    }
  }
  function clickCell5() {
    if (image5 !== "/assets/x.gif") {
      setImage5("/assets/O.gif")
      setImage2("/assets/blank.jpg")
      setImage3("/assets/blank.jpg")
      setImage4("/assets/blank.jpg")
      setImage1("/assets/blank.jpg")
      setImage6("/assets/blank.jpg")

      if (image2 === "/assets/x.gif") {
        setImage2("/assets/x.gif")
      }
      if (image3 === "/assets/x.gif") {
        setImage3("/assets/x.gif")
      }
      if (image4 === "/assets/x.gif") {
        setImage4("/assets/x.gif")
      }
      if (image1 === "/assets/x.gif") {
        setImage1("/assets/x.gif")
      }
      if (image6 === "/assets/x.gif") {
        setImage6("/assets/x.gif")
      }
    }
    if (image5 === "/assets/O.gif") {
      setImage5("/assets/blank.jpg")
    }
  }
  function clickCell6() {
    if (image6 !== "/assets/x.gif") {
      setImage6("/assets/O.gif")
      setImage2("/assets/blank.jpg")
      setImage3("/assets/blank.jpg")
      setImage4("/assets/blank.jpg")
      setImage5("/assets/blank.jpg")
      setImage1("/assets/blank.jpg")

      if (image2 === "/assets/x.gif") {
        setImage2("/assets/x.gif")
      }
      if (image3 === "/assets/x.gif") {
        setImage3("/assets/x.gif")
      }
      if (image4 === "/assets/x.gif") {
        setImage4("/assets/x.gif")
      }
      if (image5 === "/assets/x.gif") {
        setImage5("/assets/x.gif")
      }
      if (image6 === "/assets/x.gif") {
        setImage1("/assets/x.gif")
      }
    }
    if (image6 === "/assets/O.gif") {
      setImage6("/assets/blank.jpg")
    }
  }
  function onClickReturn() {
    window.location.replace("/firstRegion")
  }

  return (
    <React.Fragment>
      <AppAppBar2 />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" align="center">
            🏠 우리 가게 등록하기 🏠
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
              사업자 번호
            </Typography>
          </Grid>
          <Grid item xs={12} sm={9}>
            <input type="text"
              name="number"
              style={{
                padding: 20,
                width: 380,
                height: 50,
                border: "2px solid black",
                collapse: 'collapse',
                borderRadius: '8px',
              }}
              value={registeration_number}
              onChange={onRegisteration_numberHandler}
            />
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
              <option selected="selected">직접선택</option>
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
              value={shop_address}
              onChange={onShop_addressHandler}
              style={{
                padding: 20,
                width: 380,
                height: 50,
                border: "2px solid black",
                collapse: 'collapse',
                borderRadius: '8px',
              }}
            />
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
        <form enctype="multipart/form-data">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" align="center">
                가게 상표 이미지
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <input type="file"
                accept="image/png,image/jpg,impge/png,image/jpeg,image/gif"
                name="name"
                required
                files={shop_image}
                onChange={onShop_imageHandler}
              />
            </Grid>
          </Grid>
          <br />
          <div className="Card1">
            <div className="image-container" align="center">
              <img
                height="200vh"
                width="200vw"
                id="preview_image"
                src={fileImage} />
            </div>
          </div>
          <br />
          <br />
        </form>
        <div align="center" >
          <table>
            <tbody><tr><td>
              <table border={1}>
                <tbody><tr>
                  <td onClick={clickCell1} border={0} height={150} width={150} >
                    <img src={image1} height={150} width={150} /></td>
                  <td onClick={clickCell2} border={0} height={150} width={150} ><img src={image2} height={150} width={150} /></td>
                  <td onClick={clickCell3} border={0} height={150} width={150} ><img src={image3} height={150} width={150} /></td>
                </tr>
                  <tr>
                    <td onClick={clickCell4} border={0} height={150} width={150} ><img src={image4} height={150} width={150} /></td>
                    <td onClick={clickCell5} border={0} height={150} width={150} ><img src={image5} height={150} width={150} /></td>
                    <td onClick={clickCell6} border={0} height={150} width={150} ><img src={image6} height={150} width={150} /></td>
                  </tr>
                </tbody></table>
            </td>
            </tr></tbody></table>
        </div>
        <br />
        <Grid item xs={12}>
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
            type="submit"
            onClick={onClickReturn}
          >
            {'지역 선택 다시 하기'}
          </FormButton>
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
              type="submit"
              onClick={onClickRegister}
            >
              {'등록하기'}
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
    </React.Fragment>
  );
}

export default withRoot(AddStore);