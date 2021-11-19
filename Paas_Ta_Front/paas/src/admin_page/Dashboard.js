import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Title } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import axios from 'axios';
import { Link } from 'ra-ui-materialui';

function Dashboard() {
    var [user, setUser] = useState([]);
    var [item, setItem] = useState([]);
    var [shop, setShop] = useState([]);

    function searchUser() {
        const url = "https://onnuriservice.paas-ta.org/user";
        axios.get(url)
            .then(function (response) {
                setUser(response.data);
                //console.log(response.data)
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }
    var user_list = user;

    function searchItem() {
        const url = "https://onnuriservice.paas-ta.org/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                //console.log(response.data)
            })
            .catch(function (error) {
                //console.log("실패");
            })
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
    var user_list = user;
    var item_list = item;
    var shop_list = shop;

    var Seongbuk = 0;
    var Jongno = 0;
    var Yeongdeungpo = 0;
    var Gurogu = 0;
    var Dongjak = 0;
    var Seocho = 0;

    var Hanbok = 0;
    var Restaurant = 0;
    var Craftshop = 0;
    var Guitar = 0;
    //console.log(shop)


    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].businessType ==='한복')
        {
            Hanbok++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].businessType ==='음식점')
        {
            Restaurant++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].businessType ==='공방')
        {
            Craftshop++;
        }
    }
    for (var i=0; i<shop.length; i++)
    {
        if (shop[i].businessType ==='기타')
        {
            Guitar++;
        }
    }

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
        searchUser()
        searchItem()
        searchShop()

    }, []);

    return (
        <div>
            <Typography
                style={{
                    fontSize: 30,
                }}><CardContent>Dashboard</CardContent>
            </Typography>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            <Typography
            style={{
            fontSize: 25,
        }}>
            &nbsp;&nbsp;🏠 등록 가게 수
            </Typography>
            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}><Link href="#" to="/shop">{shop.length}</Link> / 36</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            <Typography
            style={{
            fontSize: 25,
        }}>
            &nbsp;&nbsp;👜 등록 상품 수
            </Typography>
            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}><Link href="#" to="/item">{item.length}
            </Link></Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
            font: 20,
        }}>
            <Typography
            style={{
            fontSize: 25,
        }}>
            &nbsp;&nbsp;👨 등록 회원 수
            </Typography>
            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}><Link href="#" to="/user">{user.length-1}
            </Link>
            </Typography>
            </CardContent>
            </Card>
            </Grid>
            <br />
            <Grid container spacing={1}>
            <Typography
                style={{
                    fontSize: 30,
                }}>
            <CardContent>지역별 가게 등록 현황</CardContent>
            </Typography>
            </Grid>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 22,
    }}>
            성북구 등록 가게 수
            </Typography>
            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Seongbuk} / 6</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 22,
    }}>
            종로구 등록 가게 수
            </Typography>
            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Jongno} / 6</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 20,
    }}>
            영등포구 등록 가게 수
</Typography>            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Yeongdeungpo} / 6</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 22,
    }}>
            구로구 등록 가게 수
</Typography>            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Gurogu} / 6</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 22,
    }}>
            동작구 등록 가게 수
</Typography>            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Dongjak} / 6</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 22,
    }}>
            서초구 등록 가게 수
</Typography>            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Seocho} / 6</Typography>
            </CardContent>
            </Card>
            </Grid>
            </Grid>
            <br />
            <Grid container spacing={1}>
            <Typography
                style={{
                    fontSize: 30,
                }}>
            <CardContent>업종별 가게 등록 현황</CardContent>
            </Typography>
            </Grid>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 30,
        textAlign:'center'
    }}>
            한복 가게 수
</Typography>            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Hanbok}</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 30,
        textAlign:'center'
    }}>
            공방 가게 수
</Typography>            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Craftshop}</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 30,
        textAlign:'center'
    }}>
            음식점 가게 수
            </Typography>
            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Restaurant}</Typography>
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}><Typography
        style={{
        fontSize: 30,
        textAlign:'center'
    }}>
            기타 가게 수
</Typography>            <div
            style={{
            width: "100%",
            borderBottom: "2px solid black",
            lineHeight: "0.1em",
            margin: "10px 0 10px",
        }}
            >
            <span style={{ background: "#fff", }}></span>
            </div>
            <Typography
            style={{
            fontSize: 30,
            textAlign:'center'
        }}>{Guitar}</Typography>
            </CardContent>
            </Card>
            </Grid>
            </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;