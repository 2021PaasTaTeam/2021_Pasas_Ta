import Box from '@mui/material/Box';
import { Form } from 'react-final-form';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppBar';
import AppForm from '../modules/views/AppForm';
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
              <Typography variant="h8" >
                이름 *
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
                value={name}
                onChange={onNameHandler}
              />
              <br />
              <br />
<Typography variant="h8" >
                이메일 *
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
                value={email}
                onChange={onEmailHandler}
              />
              <br />
              <br />
              <Typography variant="h8" >
                비밀번호 *
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
                주소 *
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
                value={address}
                onChange={onAddressHandler}
              />
              <br />
              <br />
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
