import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Item_buy() {
    const session = JSON.parse(window.sessionStorage.getItem("data"));
    const item_data_session = JSON.parse(window.sessionStorage.getItem("item_data"));

    //console.log(item_data_session.item_data.itemId)
    var [store, setStore] = useState([]);
    var [item, setItem] = useState([]);
    var id = [];

    function searchItem(shopid) {
        const url = "http://localhost:8080/shop/"+shopid+"/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                //console.log("성공");
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }
    //console.log(item)

    function searchId() {
        const url = "http://localhost:8080/shop";
        axios.get(url)
            .then(function (response) {
                setStore(response.data);
                //console.log("성공");
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }

    const onClickCart = () => {
        console.log('click cart')
        console.log('itemId : ', item_data_session.item_data.itemId)
        console.log('count : ', number)
        let data = {'items':[{
          'itemId': item_data_session.item_data.itemId,
          'count': number,
        },]
        }
        axios.post('http://localhost:8080/order/'+session.data.id+"/register", data, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
              }
        })
          .then(res => {
            console.log(res.data)
            alert("장바구니에 등록했습니다.")
            window.location.replace("/Item")
          })
          .catch()
      }

    for (let i = 0; i < store.length; i++) {
        if (store[i].email === session.data.email) {
            id = store[i];
        }
    }

    useEffect(() => {
        searchId()
        searchItem(id.shopId)

    }, [id.shopId]);

    const [itemName, setItemName] = useState(item_data_session.item_data.name);
    const [itemContent, setItemContent] = useState(item_data_session.item_data.content);
    const [itemPrice, setItemPrice] = useState(item_data_session.item_data.price);

    const [number, setNumber] = useState(0);

    const onNumberHandler = (event) => {
        setNumber(event.currentTarget.value)
    }
    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    const Item = () => {
        window.location.replace("/Item")
    }

    const btnStyle = {
        color: "white",
        background: "black",
        padding: ".120rem .720rem",
        border: "1px solid black",
        borderRadius: ".25rem",
        fontSize: "1.4rem",
        lineHeight: 1.5,
    };


    return (
        <React.Fragment>
            {/* <AppAppBar2 /> */}
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
                        src={"img/"+id.image?.storeFileName} />
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
                        &nbsp;&nbsp;가게 업종 : {id.bussinessType}
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
                                <label>
                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="150vh"
                                            width="150vw"
                                            src={"img/" + item_data_session.item_data.storeFileName}
                                            />
                                    </div>
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <br/>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;상품명 : {itemName}
                                        </Typography>
                                    <br/>
                                    <br/>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;설명 : {itemContent}
                                        </Typography>
                                    <br/>
                                    <br/>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;가격 : {itemPrice}
                                        </Typography>
                                    </div>
                                    <div style={{
                                        float: 'right',
                                    }}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 20,
                                                float: 'left'
                                            }}
                                            value={number}
                                            onChange={onNumberHandler}
                                        >
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;
                                            <button onClick={onDecrease} style={btnStyle}>-</button>
                                            &nbsp;&nbsp;{number}&nbsp;&nbsp;
                                            <button onClick={onIncrease} style={btnStyle}>+</button>
                                        </Typography>
                                        &nbsp;
                                    </div>
                                </label>
                    </ul>
                </div>
                <br />
                <Typography variant="h3"
                    style={{
                        fontSize: 20
                    }}
                    align="left">
                    합계
                </Typography>
                <div
                    style={{
                        width: "100%",
                        borderBottom: "3px solid black",
                        lineHeight: "0.1em",
                        margin: "10px 0 10px",
                    }}
                >
                    <span style={{ background: "#fff", }}></span>
                </div>
                <div ><Typography variant="h4"
                    style={{
                        fontSize: 16,
                        float: 'left'
                    }}
                >
                    선택 상품 개수
                </Typography></div>
                <div ><Typography variant="h4"
                    style={{
                        fontSize: 16,
                        float: 'right'
                    }}
                >
                    {number + ' 개'}
                </Typography></div>
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
                <div>
                    <Typography variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        결재 금액
                    </Typography>
                </div>
                <div ><Typography variant="h3"
                    style={{
                        fontSize: 17,
                        float: 'right'
                    }}
                >
                    {itemPrice*number + ' 원'}
                </Typography></div>

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
                        color: "blue",
                        backgroundColor: "white",
                        border: "4px solid blue",
                        collapse: 'collapse',
                        borderRadius: '8px',
                    }}
                    onClick={onClickCart}
                >
                    {'👜 장바구니 넣기'}
                </FormButton>
                        {/* <FormButton
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
                            onClick={onClickBuy}
                        >
                            {'바로 구매하기'}
                        </FormButton> */}
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
                            onClick={Item}
                        >
                            {'돌아가기'}
                        </FormButton>
                    </Grid>
                </Grid>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(Item_buy);
