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
    var labels = ['대한민국 전통 한복', '잭 다니엘']
    const labels2 = ['']
    var check = 0;

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
                    {check + ' 개'}
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
                    {check + ' 원'}
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
