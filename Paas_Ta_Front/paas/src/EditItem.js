import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EditItem() {
    const session = JSON.parse(window.sessionStorage.getItem("data"));

    var [store, setStore] = useState([]);
    var [item, setItem] = useState([]);
    var id = [];

    function searchItem(shopid) {
        const url = "http://localhost:8080/shop/"+shopid+"/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                console.log("성공");
            })
            .catch(function (error) {
                console.log("실패");
            })
    }
    console.log(item)

    function searchId() {
        const url = "http://localhost:8080/shop";
        axios.get(url)
            .then(function (response) {
                setStore(response.data);
                console.log("성공");
            })
            .catch(function (error) {
                console.log("실패");
            })
    }

    for (let i = 0; i < store.length; i++) {
        if (store[i].email === session.data.email) {
            id = store[i];
        }
    }
    console.log(store)

    console.log(id)
    console.log(id.image)
    console.log(typeof(id.image))
    console.log(id.image?.storeFileName)

    useEffect(() => {
        searchId()
        searchItem(id.shopId)

    }, [id.shopId]);

    const item_name = []
    const item_image = []
    const item_content = []
    const item_price = []
    const item_stockQuantity = []    

    for (var j = 0; j < item.length; j++) {
        item_name[j] = item[j].name
    }
    for (var j = 0; j < item.length; j++) {
        item_image[j] = item[j].storeFileName
    }
    //console.log(typeof(item_image[0]))
    for (var j = 0; j < item.length; j++) {
        item_content[j] = item[j].content
    }
    for (var j = 0; j < item.length; j++) {
        item_price[j] = item[j].price
    }
    for (var j = 0; j < item.length; j++) {
        item_stockQuantity[j] = item[j].stockQuantity
    }

    const Town = () => {
        window.location.replace("/Town")
    }
    const AddItem = () => {
        window.location.replace("/AddItem")
    }

    const item_remove = (index) => {
        console.log(item[index].itemId)
        axios.delete('http://localhost:8080/item/'+item[index].itemId, {
        })
            .then(res => {
                alert('해당 상품이 삭제되었습니다.')
                console.log(item)
                window.location.replace("/EditItem")
            })
            .catch()
    }

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

    const onClickModify = (index) => {
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


        axios.post('http://localhost:8080/item/'+item[index].itemId, formData, {
            headers: {
                'Content-type': 'multipart/form-data; charset=utf-8',
            }
        })
            .then(res => {
                console.log(res)
                alert('상품이 수정되었습니다.')
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
                        src={"img/"+id.image?.storeFileName} 
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
                <div style={{
                    float: 'right'
                }}>
                    <button onClick={AddItem} style={{
                        color: "white",
                        background: "blue",
                        padding: ".120rem .720rem",
                        border: "1px solid blue",
                        borderRadius: ".25rem",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                    }}>상품 등록하기</button>
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

                <Typography variant="h3" align="left"
                    style={{
                        fontSize: 25,
                        float: 'left'
                    }}>
                    📄 판매 상품 목록
                </Typography>
                <br />
                <br />
                <div>
                    <ul>
                        {item_name.map((label, idx) => (
                            <li key={idx}>
                                <label>
                                    <br/>
                                    <br/>
                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="160vh"
                                            width="160vw"
                                            src={"img/"+item_image[idx]} />
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
                                            &nbsp;&nbsp;상품명 : &nbsp;&nbsp;
                                        </Typography>
                                            <input type="text"
                                                name="name"
                                                value={item_name[idx]}
                                            //onChange={onShop_nameHandler}
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
                                            &nbsp;&nbsp;설명 : &nbsp;&nbsp;
                                        </Typography>
                                        <input type="text"
                                            name="name"
                                            value={item_content[idx]}
                                        //onChange={onShop_nameHandler}
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
                                        <input type="text"
                                            name="name"
                                            value={item_price[idx]}
                                        //onChange={onShop_nameHandler}
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
                                        <input type="text"
                                            name="name"
                                            value={item_stockQuantity[idx]}
                                        //onChange={onShop_nameHandler}
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
                                        &nbsp;&nbsp;사진변경 : &nbsp;&nbsp;
                                        </Typography>
                                    <input type="file"
                                        accept="image/*"
                                        name="name"
                                        required
                                        files={item_image[idx]}
                                        onChange={onItemImagesHandler}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                </label>
                                <div style={{
                                    float: 'right'
                                }}>

                                    <Typography
                                        variant="h3"
                                        style={{
                                            fontSize: 20,
                                            float: 'left'
                                        }}
                                    >
                                        <FormButton
                                            sx={{ mt: 1, mb: 1 }}
                                            color="secondary"
                                            style={{
                                                padding: 1,
                                                border: "2px solid red",
                                                collapse: 'collapse',
                                                borderRadius: '8px',
                                            }}
                                            type="submit"
                                            onClick={() => item_remove(idx)}
                                        >
                                            {'상품 삭제'}
                                        </FormButton>
                                    </Typography>
                                    &nbsp;
                                </div>
                            </li>

                        ))}
                    </ul>
                </div>
                <br />
                <br />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
                            onClick={Town}
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

export default withRoot(EditItem);
