import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EditItem() {
    const session = JSON.parse(window.sessionStorage.getItem("data"));
    const item_data_session = JSON.parse(window.sessionStorage.getItem("item_data"));

    console.log(item_data_session)

    var [store, setStore] = useState([]);
    var [item, setItem] = useState([]);
    var id = [];

    function searchItem(shopid) {
        const url = "http://localhost:8080/shop/" + shopid + "/item";
        axios.get(url)
            .then(function (response) {
                setItem(response.data);
                console.log("성공");
                console.log(item[0].name)
            })
            .catch(function (error) {
                console.log("실패");
            })
    }

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

    useEffect(() => {
        searchId()
        searchItem(id.shopId)
    }, [id.shopId]);

    const item_name = [];
    const item_image = []
    const item_content = []
    const item_price = []
    const item_stockQuantity = []

    for (var j = 0; j < item.length; j++) {
        item_name[j] = item[j].name;
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
        axios.delete('http://localhost:8080/item/' + item[index].itemId, {
        })
            .then(res => {
                alert('해당 상품이 삭제되었습니다.')
                console.log(item)
                window.location.replace("/EditItem")
            })
            .catch()
    }

    const item_modify = (index) => {
        console.log(item[index].itemId)
        axios.post('http://localhost:8080/item/' + item[index].itemId, {
        })
            .then(res => {
                const item = res.data;
                const itemObj = { item_data: item };
                window.sessionStorage.setItem("item_data", JSON.stringify(itemObj));
                window.open("/Item_Modify", "", "width=650, height=500, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
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
                        src={"img/" + id.image?.storeFileName}
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

                <Typography variant="h3" align="left"
                    style={{
                        fontSize: 25,
                        float: 'left'
                    }}>
                    📄 판매 상품 목록
                </Typography>
                <br />
                <div>
                    <ul>
                        {item_name.map((label, idx) => (
                            <li key={idx}>
                                <label>
                                    <br />
                                    <br />
                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="200vh"
                                            width="200vw"
                                            src={"img/" + item_image[idx]} />
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
                                            &nbsp;&nbsp;상품명 : &nbsp;&nbsp;{item_name[idx]}
                                        </Typography>
                                        {/* <input type="text"
                                                name="name"
                                                value={item_name[idx]}
                                            onChange={onItemNameHandler}
                                            /> */}
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
                                            &nbsp;&nbsp;설명 : &nbsp;&nbsp;{item_content[idx]}
                                        </Typography>
                                        {/* <input type="text"
                                            name="name"
                                            value={item_content[idx]}
                                        //onChange={onShop_nameHandler}
                                        /> */}
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
                                            &nbsp;&nbsp;가격 : &nbsp;&nbsp;{item_price[idx]}
                                        </Typography>
                                        {/* <input type="text"
                                            name="name"
                                            value={item_price[idx]}
                                        //onChange={onShop_nameHandler}
                                        /> */}
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
                                            &nbsp;&nbsp;재고 : &nbsp;&nbsp;{item_stockQuantity[idx]}
                                        </Typography>
                                        {/* <input type="text"
                                            name="name"
                                            value={item_stockQuantity[idx]}
                                        //onChange={onShop_nameHandler}
                                        /> */}
                                    </div>
                                    <br />
                                    {/* <br /> */}
                                    {/* <div style={{
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
                                            //onChange={onItemImagesHandler}
                                        />
                                    </div> */}
                                </label>
                                <div style={{
                                    float: 'right'
                                }}>
                                    <br/>
                                    <br/><br/><br/><br/><br/><br/><br/>
                                    <br/>
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
                                                backgroundColor: "blue",
                                                border: "2px solid blue",
                                                collapse: 'collapse',
                                                borderRadius: '8px',
                                            }}
                                            type="submit"
                                            onClick={() => item_modify(idx)}
                                        >
                                            {'상품 수정'}
                                        </FormButton>
                                        &nbsp;&nbsp;
                                    </Typography>
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
                                <br />
                            </li>
                        ))}
                    </ul>

                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
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
                            onClick={AddItem}
                        >
                            {'상품 등록하기'}
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
