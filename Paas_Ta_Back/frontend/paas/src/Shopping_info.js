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

    function searchOrder() {
        const url = "http://localhost:8080/orders/" + session.data.id;
        axios.get(url)
            .then(function (response) {
                setOrder(response.data);
                //console.log(response.data)
                //console.log("성공");
            })
            .catch(function (error) {
                //console.log("실패");
            })
    }

    const order_list = []
    var i = 0;

    for (var j = 0; j < order.length; j++) {
        if (order[j].orderStatus === 'FINISH') {
        order_list[i] = order[j]
        i++
        }
    }
    //console.log(order_list)

    const order_id = []
    const order_date = []

    for (var j = 0; j < order_list.length; j++) {
        order_id[j] = order_list[j].orderId
    }
    for (var j = 0; j < order_list.length; j++) {
        order_date[j] = order_list[j].orderDate
    }
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
                        {order_list.map((name, i) => (
                            <li key={i}>
                                <label>
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <Typography variant="h3"
                                            style={{
                                                fontSize: 20
                                            }}
                                            align="left">
                                            주문 번호 : {order_list[i].orderId}
                                        </Typography>
                                    </div>
                                    <br/>
                                    <div style={{
                                        float: 'right'
                                    }}>
                                        <Typography variant="h3"
                                            style={{
                                                fontSize: 16
                                            }}
                                            align="left">
                                            주문 날짜 : {order_date[i]}
                                        </Typography>
                                    </div>
                                    <div>
                                        <ul>
                                            {order_list[i].orderItems.map((name, idx) => (
                                                <li key={idx}>
                                                    <label>
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
                                                                &nbsp;&nbsp;상품명 : {order_list[i].orderItems[idx].itemName}
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
                                                                &nbsp;&nbsp;개수 : {order_list[i].orderItems[idx].itemCount}
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
                                                                &nbsp;&nbsp;가격 : {order_list[i].orderItems[idx].itemPrice}
                                                            </Typography>

                                                        </div>
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
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
