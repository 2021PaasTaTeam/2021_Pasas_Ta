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

function Cart() {
    const [shop_name, setShop_name] = useState("");
    const [shop_address, setShop_address] = useState("");
    const [shop_phone, setShop_phone] = useState("");
    const [shop_image, setShop_image] = useState("");
    const [registeration_number, setRegisteration_number] = useState("");
    

    const onShop_nameHandler = (event) => {
        setShop_name(event.currentTarget.value);
    }

    const onShop_sddressHandler = (event) => {
        setShop_address(event.currentTarget.value)
    }

    const onShop_phoneHandler = (event) => {
        setShop_phone(event.currentTarget.value);
    }

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
        let data = JSON.stringify({
            'name': shop_name,
            'address': shop_address,
            'phone': shop_phone,
            'image': shop_image,
            'registrationNum': registeration_number,
            'email': session.data.email
        })
        axios.post('http://localhost:8080/', data, {
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



                
                <Form
                    onSubmit={onClickRegister}
                >
                    {({ handleSubmit: handleSubmit2, submitting }) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>

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
                                        onSubmit={onClickRegister}
                                    >
                                        {'구매하기'}
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

export default withRoot(Cart);
