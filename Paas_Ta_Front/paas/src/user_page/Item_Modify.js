import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Item_Modify() {
    const session = JSON.parse(window.sessionStorage.getItem("data"));
    const item_data_session = JSON.parse(window.sessionStorage.getItem("item_data"));

    console.log(item_data_session)
    console.log(item_data_session.item_data.name)

    console.log(item_data_session.item_data.itemId)

    const [itemName, setItemName] = useState(item_data_session.item_data.name);
    const [itemContent, setItemContent] = useState(item_data_session.item_data.content);
    const [itemPrice, setItemPrice] = useState(item_data_session.item_data.price);
    const [itemStock, setItemStock] = useState(item_data_session.item_data.stockQuantity);
    const [itemImages, setItemImages] = useState(item_data_session.item_data.storeFileName);

    var [item, setItem] = useState([]);
    
    function searchItem(shopid) {
        const url = "http://localhost:8080/shop/" + shopid + "/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                console.log("성공");
            })
            .catch(function (error) {
                console.log("실패");
            })
    }

    var [store, setStore] = useState([]);
    var id = [];

    function searchId() {
        const url = "http://localhost:8080/shop";
        axios.get(url)
        .then(function(response) {
            setStore(response.data);
            console.log("성공");
        })
        .catch(function(error) {
            console.log("실패");
        })
    }
    console.log(store)

    for (let i=0; i<store.length; i++)
    {
        if(store[i].email === session.data.email)
        {
            id = store[i];
        }
    }
    console.log(id)

    useEffect(() => {
        searchId()
        searchItem(id.shopId)
    },[id.shopId]);

    const onItemNameHandler = (event) => {
        setItemName(event.currentTarget.value);
    }
    const onItemContentHandler = (event) => {
        setItemContent(event.currentTarget.value);
    }
    const onItemStockHandler = (event) => {
        setItemStock(event.currentTarget.value);
    }
    const onItemPriceHandler = (event) => {
        setItemPrice(event.currentTarget.value);
    }

    const onClickModify = () => {
        let data = JSON.stringify({
            'itemContent': itemContent,
            'itemPrice': itemPrice,
            'itemStock': itemStock
          })

        console.log('click item')
        console.log("itemContent", itemContent)
        console.log("itemPrice", itemPrice)
        console.log("itemStock", itemStock)
        
        axios.post('http://localhost:8080/item/' + item_data_session.item_data.itemId, data, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            }
        })
            .then(res => {
                console.log(res)
                window.sessionStorage.removeItem("item_data")
                alert('상품이 수정되었습니다.')
                window.close();
            })
            .catch()
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
        fontSize: "1.4rem",
        lineHeight: 1.5,
    };

    return (
        <React.Fragment>
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        상품 수정하기
                    </Typography>
                </React.Fragment>
                <br />
                <div className="c1image" style={{
                    float: 'left'
                }} >
                    <img className="phoneImage"
                        height="200vh"
                        width="200vw"
                        src={"img/" + item_data_session.item_data?.storeFileName}
                    />
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
                        &nbsp;&nbsp;상품명 : {itemName}
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
                        &nbsp;&nbsp;설명 : &nbsp;&nbsp;
                    </Typography>
                    <input 
                        type="text"
                        name="name"
                        value={itemContent}
                        onChange={onItemContentHandler}
                    />
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
                        &nbsp;&nbsp;가격 : &nbsp;&nbsp;
                    </Typography>
                    <input 
                        type="text"
                        name="number"
                        value={itemPrice}
                        onChange={onItemPriceHandler}
                    />
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
                        &nbsp;&nbsp;재고 : &nbsp;&nbsp;
                    </Typography>
                    <input 
                        type="text"
                        name="number"
                        value={itemStock}
                        onChange={onItemStockHandler}
                    />
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
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormButton
                            sx={{ mt: 1, mb: 1 }}
                            size="large"
                            color="primary"
                            fullWidth
                            style={{
                                padding: 8,
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            type="submit"
                            onClick={onClickModify}
                        >
                            {'상품 수정하기'}
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
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            onClick={close}
                        >
                            {'취소하기'}
                        </FormButton>
                    </Grid>
                </Grid>
            </AppForm>
        </React.Fragment>
    );
}

export default withRoot(Item_Modify);
