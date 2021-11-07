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
    // var labels = ['대한민국 전통 한복', '잭 다니엘']
    const labels2 = ['']

    // const [checkList, setCheckList] = useState(order_name);
    // const [checkList2, setCheckList2] = useState(order_name);

    // // index 번째 체크 상태를 반전시킨다
    // const handleCheckClick = (index) => {
    //     setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
    // };
    // //const isAllChecked = checkList.every((x) => x - 1);

    // function allselect(value) {
    //     setCheckList2((checks) => checks.map((c, i) => (i === value ? !c : c)));
    //     for (let j = 0; j < order_name.length; j++) {
    //         setCheckList((checks) => checks.map((c, i) => (i === value + j ? !c : c)));
    //     }
    // }


    function all_remove() {
        if (window.confirm("상품을 모두 삭제하시겠습니까??") == true) {    //확인
            alert('상품이 모두 삭제되었습니다.')
            for (let i = 0; i < order_name.length; i++) {
                delete order_name[i]
                window.location.replace("/Cart")
            }
        } else {   //취소
            return false;
        }
    }

    const session = JSON.parse(window.sessionStorage.getItem("data"));

  var [order, setOrder] = useState([]);

  function searchOrder() {
    const url = "http://localhost:8080/orders/" + session.data.id;
    axios.get(url)
      .then(function (response) {
        setOrder(response.data);
        console.log(response.data)
        //console.log("성공");
      })
      .catch(function (error) {
        //console.log("실패");
      })
  }

  const order_list = []
  var i = 0;

  for (var j = 0; j < order.length; j++) {
    if (order[j].orderStatus === 'ORDERING') {
      order_list[i] = order[j]
      i++
    }
  }

  var order_id = []
  var order_date = []
  var order_stock = []
  var order_price = []
  var total_price = 0;
  var order_name = []

  for (var j = 0; j < order_list.length; j++) {
    order_id[j] = order_list[j].orderId
  }
  for (var j = 0; j < order_list.length; j++) {
    order_date[j] = order_list[j].orderDate
  }
  for (var j = 0; j < order_list.length; j++) {
    order_stock[j] = order_list[j].orderItems[0].itemCount
  }
  for (var j = 0; j < order_list.length; j++) {
    order_price[j] = order_list[j].orderItems[0].itemPrice
    total_price = total_price + order_price[j]
}
  for (var j = 0; j < order_list.length; j++) {
    order_name[j] = order_list[j].orderItems[0].itemName
  }

    const item_remove = (index) => {
        if (window.confirm("해당 상품을 삭제하시겠습니까??") == true) {    //확인
            axios.delete('http://localhost:8080/order/' + order_id[index], {
            })
                .then(res => {
                    alert('해당 상품이 삭제되었습니다.')
                    window.location.replace("/Cart")
                })
                .catch()
        } else {   //취소
            return false;
        }
    };

    const onClickBuy = () => {
        console.log('click buy')
        //console.log('itemId : ', item_data_session.item_data.itemId)
        console.log('count : ', order_stock)
        let data = {'items':[{
          //'itemId': item_data_session.item_data.itemId,
          'count': order_stock,
        },]
        }
        axios.post('http://localhost:8080/order/'+session.data.id+"/finish", data, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
              }
        })
          .then(res => {
            console.log(res.data)
            alert("구매 완료!!!")
            window.location.replace("/Item")
          })
          .catch()
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
                                    {/* <div id="check" style={{
                                        float: 'left'
                                    }}>
                                        <input

                                            style={{
                                                width: 20,
                                            }}
                                            type='checkbox'
                                            // checked={checkList2[idx]}
                                            onClick={() => allselect(idx)}
                                        />
                                    </div> */}
                                    &nbsp;&nbsp;
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
                                            &nbsp;&nbsp;장바구니 물품 조회
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
                        {order_list.map((name, idx) => (
                            <li key={idx}>
                                <label>
                                    {/* <div id="check" style={{
                                        float: 'left'
                                    }}>
                                        <input
                                            style={{
                                                width: 15,
                                                height: 45,
                                            }}
                                            //type='checkbox'
                                            // checked={checkList[idx]}
                                            onClick={() => handleCheckClick(idx)}
                                        />
                                        &nbsp;&nbsp;
                                    </div> */}

                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="110vh"
                                            width="110vw"
                                            //src="/assets/github.png"
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
                                            &nbsp;&nbsp;상품명 : {order_name[idx]}
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
                                            &nbsp;&nbsp;{order_stock[idx]} 개
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
                                            &nbsp;&nbsp;가격 : {order_price[idx]}
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
                    {total_price + ' 원'}
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
                            onClick={onClickBuy}
                            //disabled={isAllChecked}
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
