import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Title } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import axios from 'axios';

function Dashboard() {
    var [user, setUser] = useState([]);
    var [item, setItem] = useState([]);
    var [shop, setShop] = useState([]);

    function searchUser() {
        const url = "http://localhost:8080/user";
        axios.get(url)
            .then(function (response) {
                setUser(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log("실패");
            })
    }
    var user_list = user;

    function searchItem() {
        const url = "http://localhost:8080/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log("실패");
            })
    }
    function searchShop() {
        const url = "http://localhost:8080/shop";
        axios.get(url)
            .then(function (response) {
                setShop(response.data);
                console.log(response.data)
            })
            .catch(function (error) {
                console.log("실패");
            })
    }
    var user_list = user;
    var item_list = item;
    var shop_list = shop;

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
            <br />
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
            <br /><Typography
            style={{
            fontSize: 30,
        }}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {shop.length}</Typography>
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
            <br />
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
            <br /><Typography
            style={{
            fontSize: 30,
        }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {item.length}
            </Typography>
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
            <br />
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
            <br /><Typography
            style={{
            fontSize: 30,
        }}>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {user.length}
            </Typography>
            </CardContent>
            </Card>
            </Grid>
            <br />
            <Typography
                style={{
                    fontSize: 30,
                }}>
            <CardContent>지역별 가게 등록 현황</CardContent>
            </Typography>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            성북구 등록 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            종로구 등록 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            영등포구 등록 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            구로구 등록 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            동작구 등록 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            서초구 등록 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <br />
            <Typography
                style={{
                    fontSize: 30,
                }}>
            <CardContent>업종별 가게 등록 현황</CardContent>
            </Typography>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            한복 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            공방 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            음식점 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            <Grid item xs={12} sm={12}>
            <Card>
            <CardContent style={{
            padding: 8,
            border: "2px solid black",
            collapse: 'collapse',
            borderRadius: '8px',
        }}>
            기타 가게 수
            <br />
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
            <br />{user.length}
            </CardContent>
            </Card>
            </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard;