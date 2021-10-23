import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Form } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';

function AddStore() {
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


    const onClickRegister = () => {
        console.log('click shop')
        console.log('가게명 : ', shop_name)
        console.log('가게주소 : ', shop_address)
        console.log('가게전화번호 : ', shop_phone)
        console.log('가게상표이미지 : ', shop_image)
        console.log('사업자번호 : ', registeration_number)
        console.log('이메일 : ', session.data.email)
        console.log('가게업종 : ',shop_business_type)
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
                'Content-type': 'multipart/form-data; charset=utf-8',
            }
        })
            .then(res => {
                console.log(res)
                    alert('가게가 등록되었습니다.')
                    window.location.replace("/Town")
            })
            .catch()
    }
    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        우리 가게 등록하기
                    </Typography>
                </React.Fragment>
                <Form
                    onSubmit={onClickRegister}
                >
                    {({ handleSubmit: handleSubmit2, submitting }) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        가게 이름
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <input type="text"
                                        name="name"
                                        style={{
                                            padding: 20,
                                            width: 380,
                                            height: 50,
                                            border: "2px solid black",
                                            collapse: 'collapse',
                                            borderRadius: '8px',
                                        }}
                                        value={shop_name}
                                        onChange={onShop_nameHandler}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        사업자 번호
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <input type="text"
                                        name="number"
                                        style={{
                                            padding: 20,
                                            width: 380,
                                            height: 50,
                                            border: "2px solid black",
                                            collapse: 'collapse',
                                            borderRadius: '8px',
                                        }}
                                        value={registeration_number}
                                        onChange={onRegisteration_numberHandler}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        지역구 선택
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                <select
                                        name="number"
                                        style={{
                                            width: 380,
                                            height: 50,
                                            border: "2px solid black",
                                            collapse: 'collapse',
                                            borderRadius: '8px',
                                        }}
                                        value={shop_address}
                                        onChange={onShop_sddressHandler}
                                    >
                                        <option selected="selected">직접선택</option>
                                        <option>종로구</option>
                                        <option>성북구</option>
                                        <option>서초구</option>
                                        <option>동작구</option>
                                        <option>영등포구</option>
                                    </select>
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        가게 업종
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <select
                                        name="number"
                                        style={{
                                            width: 380,
                                            height: 50,
                                            border: "2px solid black",
                                            collapse: 'collapse',
                                            borderRadius: '8px',
                                        }}
                                        value={shop_business_type}
                                        onChange={onShop_business_typeHandler}
                                    >
                                        <option selected="selected">직접선택</option>
                                        <option >한복</option>
                                        <option >공방</option>
                                        <option >음식점</option>
                                        <option >기타</option>
                                    </select>
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        가게 실제주소
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <input type="text"
                                        name="name"
                                        //value={shop_phone}
                                        style={{
                                            padding: 20,
                                            width: 380,
                                            height: 50,
                                            border: "2px solid black",
                                            collapse: 'collapse',
                                            borderRadius: '8px',
                                        }}
                                        //onChange={onShop_phoneHandler}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        가게 전화번호
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <input type="text"
                                        name="number"
                                        value={shop_phone}
                                        placeholder="예) 01012345678"
                                        style={{
                                            padding: 20,
                                            width: 380,
                                            height: 50,
                                            border: "2px solid black",
                                            collapse: 'collapse',
                                            borderRadius: '8px',
                                        }}
                                        onChange={onShop_phoneHandler}
                                    />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" align="center">
                                        가게 상표 이미지
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <input type="file"
                                        accept="image/png,image/jpg,impge/png,image/jpeg,image/gif"
                                        name="name"
                                        value={shop_image}
                                        onChange={onShop_imageHandler}
                                        required />
                                </Grid>
                            </Grid>
                            <br />
                            <div className="Card1">
                                <div className="c1image" align='center' >
                                    <img className="phoneImage"
                                        height="500vh"
                                        width="500vw"
                                        src="/assets/map.jpg" />
                                </div>
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
                                        onSubmit={onClickRegister}
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
                        </Box>
                    )}
                </Form>
            </AppForm>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(AddStore);
