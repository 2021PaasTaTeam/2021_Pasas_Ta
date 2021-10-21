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

function AddItem() {
    const [fileImage, setFileImage] = useState("");
    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
    };


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onAddressHandler = (event) => {
        setAddress(event.currentTarget.value)
    }
    const onClickSignUp = () => {
        console.log('click login')
        console.log('ID : ', email)
        console.log('PW : ', password)
        console.log('NAME : ', name)
        console.log('ADD : ', address)
        let data = JSON.stringify({
            'password': password,
            'email': email,
            'name': name,
            'address': address
        })
        axios.post('http://localhost:8080/additem', data, {
            headers: {
                'Content-type': 'application/json; charset=utf-8',
            }
        })
            .then(res => {
                console.log(res.data.name)
                if (res.data.email === undefined) {
                    // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
                    alert('이미 등록된 가게입니다.')
                }
                else {
                    alert('가게가 등록되었습니다.')
                    document.location.href = '/Town'
                }
            })
            .catch()
    }


    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        우리 상품 등록하기
                    </Typography>
                </React.Fragment>
                <Form
                    onSubmit={onClickSignUp}
                    id="msform"
                >
                    {({ handleSubmit: handleSubmit2, submitting }) => (
                        <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        상품명
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                <input type="text"
                                name="name"
                                    style={{
                                        padding: 20,
                                        width: 380,
                                        height: 50,
                                        padding: 20,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                     />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        상품 설명
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <input type="text"
                                    placeholder="예) 한복 저고리"
                                    style={{
                                        padding: 100,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                     />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center">
                                        상품 가격
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9} >
                                <input type="text"
                                name="number"
                                align="center"
                                    style={{
                                        width: 380,
                                        height: 50,
                                        padding: 20,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                     />
                                </Grid>
                            </Grid>
                            <br />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={4}>
                                    <Typography variant="h6" align="center">
                                        상품 이미지
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <input type="file"
                                        accept="image/*"
                                        name="imgFile"
                                        id="imgFile"
                                        onChange={saveFileImage}
                                        value={name}
                                        required />
                                </Grid>
                            </Grid>
                            <br />
                            <div className="Card1">
                                <div className="image-container" align="center">
                                    <img
                                        height="200vh"
                                        width="200vw"
                                        id="preview_image"
                                        src={fileImage} />
                                </div>
                            </div>
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
                                        onSubmit={onClickSignUp}
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

export default withRoot(AddItem);
