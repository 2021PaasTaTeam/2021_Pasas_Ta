import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';

function Cart() {
    var labels = ['대한민국 전통 한복', '잭 다니엘']
    const labels2 = ['']

    const [checkList, setCheckList] = useState(labels);
    const [checkList2, setCheckList2] = useState(labels);

    // index 번째 체크 상태를 반전시킨다
    const handleCheckClick = (index) => {
        setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
    };
    const isAllChecked = checkList.every((x) => x - 1);

    function allselect(value) {
        setCheckList2((checks) => checks.map((c, i) => (i === value ? !c : c)));
        for (let j = 0; j < labels.length; j++) {
            setCheckList((checks) => checks.map((c, i) => (i === value + j ? !c : c)));
        }
    }


    const item_remove = (index) => {
        if (window.confirm("해당 상품을 삭제하시겠습니까??") == true) {    //확인
            alert('해당 상품이 삭제되었습니다.')
            delete labels[index]
            console.log(labels)
            window.location.replace("/Cart")
        } else {   //취소
            console.log(labels)
            return false;
        }
    };

    function all_remove() {
        if (window.confirm("상품을 모두 삭제하시겠습니까??") == true) {    //확인
            alert('상품이 모두 삭제되었습니다.')
            for (let i = 0; i < labels.length; i++) {
                delete labels[i]
                console.log(labels)
                window.location.replace("/Cart")
            }
        } else {   //취소
            console.log(labels)
            return false;
        }
    }

    const session = JSON.parse(window.sessionStorage.getItem("data"));

    var [order, setOrder] = useState([]);
    var [id, setId] = useState([]);

    function searchOrder() {
        const url = "http://localhost:8080/orders/" + session.data.id;
        axios.get(url)
            .then(function (response) {
                setOrder(response.data);
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

    useEffect(() => {
        searchOrder()
    }, []);

    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        장바구니
                    </Typography>
                </React.Fragment>

                <br /><br />
                <div>
                    <div>
                        <FormButton
                            sx={{ mt: 1, mb: 1 }}
                            color="secondary"
                            style={{
                                padding: 1,
                                border: "2px solid red",
                                collapse: 'collapse',
                                borderRadius: '8px',
                                float: 'right'
                            }}
                            type="submit"
                            onClick={() => all_remove()}
                        >
                            {'전체 삭제'}
                        </FormButton>
                    </div>
                    <br />
                    <ul>
                        {labels2.map((label, idx) => (
                            <li key={idx}>
                                <label>
                                    <div id="check" style={{
                                        float: 'left'
                                    }}>
                                        <input

                                            style={{
                                                width: 20,
                                            }}
                                            type='checkbox'
                                            checked={checkList2[idx]}
                                            onClick={() => allselect(idx)}
                                        />
                                    </div>&nbsp;&nbsp;
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
                                            &nbsp;&nbsp;전체선택
                                        </Typography>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
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
                </div>
                <br /><br />
                <div>
                    <ul>
                        {labels.map((label, idx) => (
                            <li key={idx}>
                                <label>
                                    <div id="check" style={{
                                        float: 'left'
                                    }}>
                                        <input
                                            style={{
                                                width: 15,
                                                height: 45,
                                            }}
                                            type='checkbox'
                                            checked={checkList[idx]}
                                            onClick={() => handleCheckClick(idx)}
                                        />
                                        &nbsp;&nbsp;
                                    </div>

                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="110vh"
                                            width="110vw"
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
                                            &nbsp;&nbsp;상품명 : {label}
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
                                                fontSize: 20,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;0 개
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
                                            &nbsp;&nbsp;가격 : 1000000원
                                        </Typography>
                                    </div>

                                    <br />
                                    <br />
                                    <br />
                                </label>
                                <div style={{
                                    float: 'right'
                                }}>
                                    <br />
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
                                        {'x'}
                                    </FormButton>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <br /><br /><br /><br /><br /><br /><br />
                <Typography variant="h3"
                    style={{
                        fontSize: 20
                    }}
                    align="left">
                    장바구니 합계
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
                <div>
                    <Typography variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        총 결재 금액
                    </Typography>
                </div>
                <div ><Typography variant="h3"
                    style={{
                        fontSize: 17,
                        float: 'right'
                    }}
                >
                    {0 + ' 원'}
                </Typography></div>
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
                                //border: "4px solid black",
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            type="submit"
                            //onClick={test}
                            disabled={isAllChecked}
                        >
                            {'결제하기'}
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

export default withRoot(Cart);
