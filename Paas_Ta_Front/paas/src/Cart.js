import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';
import './Cart.css';

function Cart() {
    const labels = ['한복', '잭 다니엘']
    const labels2 = ['']


    const [checkList, setCheckList] = useState([false, false, false]);
    // index 번째 체크 상태를 반전시킨다
    const handleCheckClick = (index) => {
        setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));

    };
    const isAllChecked = checkList.every((x) => x - 1);

    function allselect(value) {
        for (let i = 0; i < labels.length; i++) {
            handleCheckClick(value + i)
        }
    }



    const [shop_name, setShop_name] = useState("");
    const [shop_address, setShop_address] = useState("");
    const [shop_phone, setShop_phone] = useState("");
    const [shop_image, setShop_image] = useState("");
    const [registeration_number, setRegisteration_number] = useState("");
    const [shop_business_type, setShop_business_type] = useState("");

    // 가게 업종
    const onShop_business_typeHandler = (event) => {
        setShop_business_type(event.currentTarget.value);
    }

    // 가게 이름
    const onShop_nameHandler = (event) => {
        setShop_name(event.currentTarget.value);
    }

    // 가게 지역구
    const onShop_sddressHandler = (event) => {
        setShop_address(event.currentTarget.value)
    }

    // 가게 전화번호
    const onShop_phoneHandler = (event) => {
        setShop_phone(event.currentTarget.value);
    }

    // 가게 상표 이미지
    const onShop_imageHandler = (event) => {
        setShop_image(event.currentTarget.value);
    }

    // 사업자 번호
    const onRegisteration_numberHandler = (event) => {
        setRegisteration_number(event.currentTarget.value);
    }

    const session = JSON.parse(window.sessionStorage.getItem("data"));

    const test = () => {
        document.location.href = '/Town'
    }

    const onClickRegister = () => {
        console.log('click shop')
        console.log('가게명 : ', shop_name)
        console.log('가게주소 : ', shop_address)
        console.log('가게전화번호 : ', shop_phone)
        console.log('가게상표이미지 : ', shop_image)
        console.log('사업자번호 : ', registeration_number)
        console.log('이메일 : ', session.data.email)
        console.log('가게업종 : ', shop_business_type)
        let data = JSON.stringify({
            'name': shop_name,
            'address': shop_address,
            'phone': shop_phone,
            'image': shop_image,
            'registrationNum': registeration_number,
            'email': session.data.email,
            'businessType': shop_business_type
        })
        axios.post('http://localhost:8080/shop', data, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            }
        })
            .then(res => {
                alert('가게가 등록되었습니다.')
                document.location.href = '/Town'
            })
            .catch()
    }
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
                                            checked={checkList[idx]}
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
                <br />
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
                                    <div style={{
                                        float: 'right'
                                    }}>
                                        <input type="text"
                                            name="name"
                                            style={{
                                                width: 425,
                                                height: 50,
                                                collapse: 'collapse',
                                                borderRadius: '8px',
                                            }}
                                            value={label}
                                        />
                                        &nbsp;&nbsp;
                                        <div style={{
                                            float: 'right'
                                        }}>
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
                                                onClick={() => handleCheckClick(idx)}

                                            >
                                                {'x'}
                                            </FormButton>
                                        </div>
                                        <br />
                                        <br />

                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <br />
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
                    {2 + ' 개'}
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
                    {1000 + ' 원'}
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
                            onClick={test}
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
