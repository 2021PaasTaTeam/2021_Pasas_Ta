import Box from '@mui/material/Box';
import { Field, Form } from 'react-final-form';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppBar';
import AppForm from '../modules/views/AppForm';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
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
      'name' : name,
      'address':address
  })
    axios.post('http://localhost:8080/join',data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      }
    })
    .then(res => {
      console.log(res.data.name)
        if(res.data.email === undefined){
            // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
            alert('이미 등록된 이메일 계정입니다.')
        }
        else {
          alert('회원가입이 완료되었습니다.')
          document.location.href = '/Login'
        }
    })
    .catch()
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography
            color="inherit"
            variant="h3"
            align="center">
            GATHER SKON
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={onClickSignUp}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              {/* <input name="name" type="name" placeholder="이름" value={name} onChange={onNameHandler} />
              <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} />
              <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} />
              <input name="address" type="address" placeholder="주소" value={address} onChange={onAddressHandler} />
              <button type="submit" onSubmit={onClickSignUp} class="loginregister__button">회원가입</button> */}
              <Field
                input
                component={RFTextField}
                fullWidth
                label="이름"
                type="name"
                name="name"
                value={name}
                onChange={onNameHandler}
                required
                size="large"
              />
              <Field
                input
                component={RFTextField}
                fullWidth
                label="이메일"
                type="email"
                name="email"
                value={email}
                onChange={onEmailHandler}
                required
                size="large"
              />
              <Field
                input
                fullWidth
                component={RFTextField}
                required
                name="password"
                autoComplete="new-password"
                label="비밀번호"
                type="password"
                margin="normal"
                value={password}
                onChange={onPasswordHandler}
                size="large"
              />
              <Field
                input
                component={RFTextField}
                fullWidth
                label="주소"
                type="address"
                name="address"
                value={address}
                onChange={onAddressHandler}
                required
                size="large"
                margin="normal"
              />
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
                {'회원가입'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
