//import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppBar';
import AppForm from '../modules/views/AppForm';
import { email, required } from '../modules/form/validation';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import FormFeedback from '../modules/form/FormFeedback';
import withRoot from '../modules/withRoot';
import React, {useState,useEffect} from 'react';
import axios from 'axios'

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
}

// const onSubmit = (event) => {
//   event.preventDefault();
// }
// const headers = {
//   'Content-type': 'application/json; charset=utf-8',
//   'Accept': '*/*'
// }

const onClickLogin = () => {
  console.log('click login')
  console.log('ID : ', email)
  console.log('PW : ', password)
  //let url = 'http://localhost:8080/login';
  let data = JSON.stringify({
    'password': password,
    'email': email
})
  axios.post('http://localhost:8080/login',data, {
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    }
  })
  // axios.post('http://localhost:8080/login', null, {
  //   headers: {
  //     'Content-type': 'application/json; charset=utf-8',
  //   },
  //     params: {
  //     'email': email,
  //     'password': password
  //     }
  // })
  .then(res => {
      console.log(res)
      console.log('res.data.userId :: ', res.data.user_email)
      console.log('res.data.msg :: ', res.data.msg)
      if(res.data.user_email === undefined){
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          console.log('======================',res.data.msg)
          //alert('입력하신 id 가 일치하지 않습니다.')
          alert('name : ',name);
          
      } else if(res.data.user_email === null){
          // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
          alert('입력하신 비밀번호 가 일치하지 않습니다.')
      } else if(res.data.user_email === email) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log('======================','로그인 성공')
          sessionStorage.setItem('email', email)
      }
      // 작업 완료 되면 페이지 이동(새로고침)
      document.location.href = '/Town'
  })
  .catch()
}

// useEffect(() => {
//    axios.get('http://localhost:8080/login')
//    .then(res => console.log(res))
//    .catch()
// },[])

  // const [sent, setSent] = React.useState(false);

  // const validate = (values) => {
  //   const errors = required(['email', 'password'], values);

  //   if (!errors.email) {
  //     const emailError = email(values.email);
  //     if (emailError) {
  //       errors.email = emailError;
  //     }
  //   }

  //   return errors;
  // };

  // const handleSubmit = () => {
  //   setSent(true);
  // };

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
          onSubmit={onClickLogin}
          //subscription={{ submitting: true }}
          //validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              {/* <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                //disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                type="email"
                name="email"
                valeu={email}
                onChange={onEmailHandler}
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                //disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={onPasswordHandler}
              /> */}
              <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} />
            <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} />
            <button type="submit" onSubmit={onClickLogin} class="loginregister__button">로그인</button>
              {/* <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy> */}
              <Typography variant="body2" align="center">
                {'회원이 아니신가요? 회원 가입 버튼을 눌러주세요. '}
                <Link
                  href="/Signup"
                  align="center"
                  underline="always"
                >
                  회원 가입
                </Link>
              </Typography>
              {/* <FormButton
                sx={{ mt: 1, mb: 1 }}
                //disabled={submitting || sent}
                size="large"
                color="primary"
                fullWidth
                style={{
                  padding: 8,
                  border: "4px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
              >
                {'로그인'}
              </FormButton> */}
              <FormButton
                sx={{ mt: 1, mb: 1 }}
               //disabled={submitting || sent}
                size="large"
                fullWidth
                style={{
                  padding: 8,
                  color:"blue",
                  backgroundColor: "white",
                  border: "4px solid blue",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
              >
                <img
                  src="/assets/google.png"
                />
                {'구글 로그인'}
              </FormButton>
              <FormButton
                sx={{ mt: 1, mb: 1 }}
                //disabled={submitting || sent}
                size="large"
                fullWidth
                style={{
                  padding: 8,
                  color:"black",
                  backgroundColor: "gold",
                  border: "4px solid gold",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
              >
                <img
                  src="/assets/kakao.png"
                />
                {'카카오톡 로그인'}
              </FormButton>
              <FormButton
                sx={{ mt: 1, mb: 1 }}
                //disabled={submitting || sent}
                size="large"
                fullWidth
                style={{
                  padding: 8,
                  backgroundColor: "limegreen",
                  border: "4px solid limegreen",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
              >
                <img
                  src="/assets/naver.png"
                />
                {'네이버 로그인'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Login);
