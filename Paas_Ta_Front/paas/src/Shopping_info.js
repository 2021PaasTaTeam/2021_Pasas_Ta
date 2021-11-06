import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Shopping_info() {
    const session = JSON.parse(window.sessionStorage.getItem("data"));

    var [order, setOrder] = useState([]);
    var [id, setId] = useState([]);

    function searchOrder() {
        const url = "http://localhost:8080/orders/" + session.data.id;
        axios.get(url)
            .then(function (response) {
                setOrder(response.data[0].orderItems);
                console.log(response.data)
                setId(response.data)
                // console.log("성공");
            })
            .catch(function (error) {
                // console.log("실패");
            })
    }
    console.log(order)
    //console.log(id.orderId)
    //console.log(order[0].orderItems)

    const item_name = []
    // const item_image = []
    const item_stock = []
    const item_price = []
    const order_id = []

    for (var j = 0; j < id.length; j++) {
        order_id[j] = id[j].orderId
    }

    for (var j = 0; j < order.length; j++) {
        item_name[j] = order[j].itemName
    }
    for (var j = 0; j < order.length; j++) {
        item_price[j] = order[j].itemPrice
    }
    for (var j = 0; j < order.length; j++) {
        item_stock[j] = order[j].itemCount
    }
    // for (var j = 0; j < item.length; j++) {
    //     item_image[j] = item[j].storeFileName
    // }
    useEffect(() => {
        searchOrder()
    }, []);
    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        주문 목록
                    </Typography>
                </React.Fragment>
                <br />
                <br />
                <br />                <br />
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
                <br /><br />
                <br />
                <div>
                    <ul>
                        {item_name.map((name, idx) => (
                            <li key={idx}>
                                <label>
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <Typography variant="h3"
                                            style={{
                                                fontSize: 20
                                            }}
                                            align="left">
                                            주문 번호 : {order_id}
                                        </Typography>
                                    </div>
                                    <br/>
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
                                    {/* <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="150vh"
                                            width="150vw"
                                            src={"img/" + item_image[idx]} />
                                    </div> */}
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
                                            &nbsp;&nbsp;개수 : {item_stock[idx]}
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
                                        <br/>
                                        <br/>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
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
                    href="/Town"
                >
                    {'돌아 가기'}
                </FormButton>
            </AppForm>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Shopping_info);
