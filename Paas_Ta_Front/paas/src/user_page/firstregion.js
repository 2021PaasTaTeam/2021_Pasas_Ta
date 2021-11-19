import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import React, { useState, useEffect } from 'react';
import withRoot from '../modules/withRoot';
import axios from 'axios';

function Firstregion() {

    const [shop_region, setShop_region] = useState("");
    var [shop, setShop] = useState([]);
    const [count, setCount] = useState(0);

    var Seongbuk = 0;
    var Jongno = 0;
    var Yeongdeungpo = 0;
    var Gurogu = 0;
    var Dongjak = 0;
    var Seocho = 0;

    const isAllChecked = count === 6 ? true : false;

    //console.log(shop_region)
    // 가게 지역구
    const onShop_regionHandler = (event) => {
        setShop_region(event.currentTarget.value)
    }

    function onClickNext() {
        const landObj = { land: shop_region };
        window.sessionStorage.setItem("land", JSON.stringify(landObj));
        window.location.replace("/Addstore")
    }

    function searchShop() {
        const url = "https://onnuriservice.paas-ta.org/shop";
        axios.get(url)
            .then(function (response) {
                setShop(response.data);
                //console.log(response.data)
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }

    useEffect(() => {
        searchShop()
    }, []);

    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].region ==='서초구')
        {
            Seocho++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].region ==='동작구')
        {
            Dongjak++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].region ==='구로구')
        {
            Gurogu++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].region ==='성북구')
        {
            Seongbuk++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].region ==='종로구')
        {
            Jongno++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].region ==='영등포구')
        {
            Yeongdeungpo++;
        }
    }
    


    useEffect(() => {
        if (shop_region === '종로구') {
            setCount(Jongno)
        }
        if (shop_region === '성북구') {
            setCount(Seongbuk)
        }
        if (shop_region === '동작구') {
            setCount(Dongjak)
        }
        if (shop_region === '서초구') {
            setCount(Seocho)
        }
        if (shop_region === '구로구') {
            setCount(Gurogu)
        }
        if (shop_region === '영등포구') {
            setCount(Yeongdeungpo)
        }
    }, [shop_region]);
    

    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        우리 가게 지역 설정 하기
                    </Typography>
                </React.Fragment>
                <br />
                <br />
                <br />
                <br />
                <div className="Card1">
                    <div className="image-container" align="center">
                        <img
                            height="200vh"
                            width="200vw"
                            id="preview_image"
                            src="/logo.png" />
                    </div>
                </div>
                <br />
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
                            <option selected="selected">직접선택</option>
                            <option>종로구</option>
                            <option>성북구</option>
                            <option>서초구</option>
                            <option>동작구</option>
                            <option>구로구</option>
                            <option>영등포구</option>
                        </select>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={2}>
                        <Typography variant="h6" align="center" style={{
                            padding: 10
                        }}>
                            &nbsp;&nbsp;* 선택하신 지역구 {shop_region}의 현재 가게 수는 {count} / 6 입니다
                        </Typography>
                    </Grid>
                <br />
                {
                    count === 6 ?
                <Grid container spacing={2}>
                <Typography variant="h6" align="center" style={{
                    padding: 10,
                    color:'red'
                }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* {shop_region} 위치에는 가게를 입점하실수 없습니다. *
                </Typography>
                </Grid>
                : <></>
                }
                <br />
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
                            onClick={onClickNext}
                            disabled={isAllChecked}

                        >
                            {'위치 정하기'}
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

export default withRoot(Firstregion);