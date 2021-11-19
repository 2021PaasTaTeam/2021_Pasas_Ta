import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
    const session = JSON.parse(window.sessionStorage.getItem("data"));
    const location = JSON.parse(window.sessionStorage.getItem("location"));

    var [store, setStore] = useState([]);
    var [item, setItem] = useState([]);
    var id = [];

    function searchItem(shopid) {
        const url = "https://onnuriservice.paas-ta.org/shop/" + shopid + "/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                // console.log("성공");
            })
            .catch(function (error) {
                // console.log("실패");
            })
    }
    // console.log(item)

    function searchId() {
        const url = "https://onnuriservice.paas-ta.org/shop";
        axios.get(url)
            .then(function (response) {
                setStore(response.data);
                // console.log("성공");
            })
            .catch(function (error) {
                // console.log("실패");
            })
    }
    //console.log(store)
    for (let i = 0; i < store.length; i++) {
        if (store[i].shopId === location.location) {
            id = store[i];
        }
    }

    useEffect(() => {
        searchId()
        searchItem(location.location)

    }, [location.location]);

    const item_name = []
    const item_image = []
    const item_content = []
    const item_price = []
    //const item_count = ['']

    for (var j = 0; j < item.length; j++) {
        item_name[j] = item[j].name
    }
    for (var j = 0; j < item.length; j++) {
        item_content[j] = item[j].content
    }
    for (var j = 0; j < item.length; j++) {
        item_price[j] = item[j].price
    }
    for (var j = 0; j < item.length; j++) {
        item_image[j] = item[j].storeFileName
    }

    const Review_write = () => {
        window.open("/Review", "", "width=650, height=500, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
    }
    const Item_buy = (index) => {
        //console.log(item[index].itemId)
        axios.post('https://onnuriservice.paas-ta.org/item/' + item[index].itemId, {
        })
            .then(res => {
                const item = res.data;
                const itemObj = { item_data: item };
                window.sessionStorage.setItem("item_data", JSON.stringify(itemObj));
                window.location.replace("/Item_buy")
            })
            .catch()
    }
    const Cart = () => {
        window.location.replace("/Cart")
    }
    const Call_SELLER = () => {
        const store = id.name;
        const storeObj = { store_data: store };
        window.sessionStorage.setItem("store_data", JSON.stringify(storeObj));
        //window.open("/Chat", "", "width=650, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
        window.open("/Chat", "", "width=650, height=800, toolbar=no, menubar=no, scrollbars=no, resizable=yes");

    }
    const close = () => {
        window.close();
    }

    const btnStyle = {
        color: "white",
        background: "black",
        padding: ".120rem .720rem",
        border: "1px solid black",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
    };


    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        {id.name}
                    </Typography>
                </React.Fragment>
                <br />
                <div className="c1image" style={{
                    float: 'left'
                }} >
                    <img className="phoneImage"
                        height="200vh"
                        width="200vw"
                        id="img_obj"
                        src={id.image?.storeFileName} />
                </div>
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;대표 이름 : {session.data.name}
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 업종 : {id.businessType}
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 지역구 : {id.region}
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 실주소 : {id.address}
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 전화번호 : {id.phone}
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'right'
                }}>
                    <button onClick={Call_SELLER} style={{
                        color: "white",
                        background: "black",
                        padding: ".120rem .720rem",
                        borderRadius: ".25rem",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                    }}>📞 사장님 부르기 📞</button>
                </div>
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography variant="h3"
                        style={{
                            fontSize: 20
                        }}
                        align="left">
                        상품 목록
                    </Typography>
                </div>
                <br />
                <div
                    style={{
                        width: "100%",
                        borderBottom: "1px solid #aaa",
                        lineHeight: "0.1em",
                        margin: "10px 0 10px",
                    }}
                >
                    <span style={{ background: "#fff", }}></span>
                </div>
                <br />
                <div>
                    <ul>
                        {item_name.map((name, idx) => (
                            <li key={idx}>
                                <label>
                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="150vh"
                                            width="150vw"
                                            src={item_image[idx]} />
                                    </div>
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <br />
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;상품명 : {item_name[idx]}
                                        </Typography>
                                        <br />
                                        <br />
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;설명 : {item_content[idx]}
                                        </Typography>
                                        <br />
                                        <br />
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;가격 : {item_price[idx]}
                                        </Typography>
                                    </div>
                                    <div style={{
                                        float: 'right',
                                    }}>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 21,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;
                                            <button onClick={() => Item_buy(idx)} style={btnStyle}>상품 구매하기</button>
                                        </Typography>
                                        &nbsp;
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div
                    style={{
                        width: "100%",
                        borderBottom: "1px solid #aaa",
                        lineHeight: "0.1em",
                        margin: "10px 0 10px",
                    }}
                >
                    <span style={{ background: "#fff", }}></span>
                </div>
                <br />
                <br />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12}>
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
                            onClick={close}
                        >
                            {'가게 나가기'}
                        </FormButton>
                    </Grid>
                </Grid>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(Product);
