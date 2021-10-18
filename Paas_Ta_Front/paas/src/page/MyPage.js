import Box from '@mui/material/Box';
import { Field, Form } from 'react-final-form';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

function MyPage() {
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
    axios.post('', data, {
      headers: {
        'Content-type': 'application/update; charset=utf-8',
      }
    })
      .then(res => {
        console.log(res.data.name)
        if (res.data.email === undefined) {
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

  const session = JSON.parse(window.sessionStorage.getItem("data"));

  return (
    <React.Fragment>
      <AppAppBar2 />
      <AppForm>
        <React.Fragment>
          <Typography
            color="inherit"
            variant="h3"
            align="center">
            마이 페이지
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={onClickSignUp}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Typography variant="h8" >
                이름
              </Typography>
              <br />
              <br />
              <input type="name"
                name="name"
                style={{
                  fontSize: 25,
                  width: 530,
                  height: 80,
                  border: "2px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                value={session.data.name}
                onChange={onNameHandler}
              />
              <br />
              <br />
              <Typography variant="h8" >
                이메일
              </Typography>
              <br />
              <br />
              <input type="text"
                name="email"
                style={{
                  fontSize: 25,
                  width: 530,
                  height: 80,
                  border: "2px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                value={session.data.email}
                readonly
                onChange={onEmailHandler}
              />
              <br />
              <br />
              <Typography variant="h8" >
                비밀번호
              </Typography>
              <br />
              <br />
              <input type="password"
                name="password"
                style={{
                  fontSize: 25,
                  width: 530,
                  height: 80,
                  border: "2px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                value={password}
                onChange={onPasswordHandler}
              />
              <br />
              <br />
              <Typography variant="h8" >
                주소
              </Typography>
              <br />
              <br />
              <input type="text"
                name="address"
                style={{
                  fontSize: 25,
                  width: 530,
                  height: 80,
                  border: "2px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                value={session.data.address}
                onChange={onAddressHandler}
              />
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
                    {'수정하기'}
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

export default withRoot(MyPage);
