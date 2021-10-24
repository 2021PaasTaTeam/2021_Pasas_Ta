import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Form } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AddItem() {
    const session = JSON.parse(window.sessionStorage.getItem("data"));
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
    },[]);

    
    const [fileImage, setFileImage] = useState("");
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };


    const [itemName, setItemName] = useState("");
    const [itemContent, setItemContent] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemStock, setItemStock] = useState("");
    const [itemImages, setItemImages] = useState("");


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
    const onItemImagesHandler = (event) => {
        setItemImages(event.currentTarget.files[0]);
    }

    var item_list = [];
    var item_list_id = [];
    var item_list_name = [];
    var item_list_content = [];
    var item_list_price = [];
    var item_list_stock = [];
    var item_list_image = [];

    const item_list_add = () => {
        const item_add = new FormData();

        item_add.append("shopId", id.shopId)
        item_add.append("itemContent",itemContent)
        item_add.append("itemPrice",itemPrice)
        item_add.append("itemStock",itemStock)
        item_add.append("itemImages",itemImages)


        console.log(item_list)
        console.log(item_list_id)
        console.log(item_list_name)
        console.log(item_list_content)
        console.log(item_list_price)
        console.log(item_list_stock)
        console.log(item_list_image)
        // //console.log(item_add.entries())
        // for (var value of item_add.entries()) {
        //     console.log(value);
        //     item_list_id = value;
        //   }
        //   console.log(item_list_id)
    }

    const onClickRegister = () => {
        const formData = new FormData();

        formData.append("shopId", id.shopId)
        formData.append("itemName",itemName)
        formData.append("itemContent",itemContent)
        formData.append("itemPrice",itemPrice)
        formData.append("itemStock",itemStock)
        formData.append("itemImages",itemImages)

        console.log(formData)

        console.log('click item')
        console.log('가게번호 : ', id.shopId)
        console.log("itemName",itemName)
        console.log("itemContent",itemContent)
        console.log("itemPrice",itemPrice)
        console.log("itemStock",itemStock)
        console.log("itemImages",itemImages)


        axios.post('http://localhost:8080/item', formData, {
            headers: {
                'Content-type': 'multipart/form-data; charset=utf-8',
            }
        })
            .then(res => {
                console.log(res)
                alert('상품이 등록되었습니다.')
                //window.location.replace("/Town")
            })
            .catch()
    }



    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        우리 가게 상품 등록하기
                    </Typography>
                </React.Fragment>
                <br/>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        상품명
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                <input type="text"
                                name="name"
                                    style={{
                                        padding: 20,
                                        width: 380,
                                        height: 50,
                                        padding: 20,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                    value={itemName}
                                    onChange={onItemNameHandler}
                                     />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        상품 설명
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <input type="text"
                                    placeholder="예) 한복 저고리"
                                    style={{
                                        padding: 100,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                    value={itemContent}
                                    onChange={onItemContentHandler}
                                     />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        상품 가격
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} >
                                <input type="text"
                                name="number"
                                align="center"
                                    style={{
                                        width: 380,
                                        height: 50,
                                        padding: 20,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                    value={itemPrice}
                                    onChange={onItemPriceHandler}
                                     />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        상품 재고
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} >
                                <input type="text"
                                name="number"
                                    style={{
                                        width: 380,
                                        height: 50,
                                        padding: 20,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                    value={itemStock}
                                    onChange={onItemStockHandler}
                                     />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" align="center">
                                    상품 이미지
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                <input type="file"
                                        accept="image/png,image/jpg,impge/png,image/jpeg,image/gif"
                                        name="name"
                                        required
                                        files={itemImages}
                                        onChange={onItemImagesHandler}
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
                                        onClick={item_list_add}
                                    >
                                        {'추가 하기'}
                                    </FormButton>
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
                        {item_list.map((label, idx) => (
                            <li key={idx}>
                                <label>
                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="160vh"
                                            width="160vw"
                                            src="/assets/github.png" />
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
                                            &nbsp;&nbsp;상품명 : {item_list.itemName}
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
                                                fontSize: 15,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;상품 설명 : {item_list.itemContent}
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
                                            &nbsp;&nbsp;가격 : {item_list.itemPrice}
                                        </Typography>
                                    </div>
                                    <br/>
                                    <br/>
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
                                            &nbsp;&nbsp;재고 : {item_list.itemStock}
                                        </Typography>
                                    </div>
                                    <br />
                                    <br/>
                                </label>
                            </li>
                        ))}
                    </ul>
                    </div>
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

export default withRoot(AddItem);
