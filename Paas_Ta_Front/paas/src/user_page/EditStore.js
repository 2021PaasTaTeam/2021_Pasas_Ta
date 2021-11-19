import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { createRef, useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './Gather.css';

function EditStore() {

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
    const url = "https://onnuriservice.paas-ta.org/shop";
    axios.get(url)
      .then(function (response) {
        setStore(response.data);
        ////console.log("성공");
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
        ////console.log(name)
      })
      .catch(function (error) {
        ////console.log("실패");
      })
  }
  ////console.log(store)

  for (let i = 0; i < store.length; i++) {
    if (store[i].email === session.data.email) {
      id = store[i];
    }
  }

  useEffect(() => {
    searchId()
  }, [id.shopId]);

  //console.log(id)

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
    //console.log('click shop')
    //console.log('가게명 : ', shop_name)
    //console.log('가게실제주소 : ', shop_address)
    //console.log('가게전화번호 : ', shop_phone)
    //console.log('가게업종 : ', shop_business_type)
    //console.log('가게지역구 : ', shop_region)

    axios.post('https://onnuriservice.paas-ta.org/shop/' + id.shopId, data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      }
    })
      .then(res => {
        //console.log(res)
        alert('가게가 수정되었습니다.')
        window.location.replace("/Town")
      })
      .catch()
  }

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
              <option>종로</option>
              <option>성북</option>
              <option>서초</option>
              <option>동작</option>
              <option>구로</option>
              <option>영등포</option>
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
              <option selected="selected">&nbsp;&nbsp;{id.businessType}</option>
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
        <br />
        <br />
        <Grid container spacing={2}>
            <Typography variant="h6" align="center" style={{
              padding: 10
            }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;
              * 가게 이사는 시스템 관리자에게 문의해주세요.
            </Typography>
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
    </React.Fragment>
  );
}

export default withRoot(EditStore);