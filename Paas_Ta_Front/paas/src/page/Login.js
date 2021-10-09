import { Field, Form } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppBar';
import AppForm from '../modules/views/AppForm';
import RFTextField from '../modules/form/RFTextField';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, {useState} from 'react';
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


const onClickLogin = () => {
  console.log('click login')
  console.log('ID : ', email)
  console.log('PW : ', password)
  let data = JSON.stringify({
    'password': password,
    'email': email
})
  axios.post('http://localhost:8080/login',data, {
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    }
  })

  .then(res => {
    console.log('이름은 '+res.data.name)
      if(res.data.email === undefined){
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          alert('입력하신 이메일과 비밀번호가 일치하지 않습니다.')
      } else if(res.data.email === null){
          // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
          alert('입력하신 이메일과 비밀번호가 일치하지 않습니다.')
      } else if(res.data.email === email) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log('======================','로그인 성공')
          alert(res.data.name+'님 환영합니다.')
          //sessionStorage.setItem('email', email)
          document.location.href = '/Town'
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
          onSubmit={onClickLogin}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                input
                component={RFTextField}
                fullWidth
                label="이메일"
                type="email"
                name="email"
                value={email}
                onChange={onEmailHandler}
                size="large"
              />
              <Field
                input
                fullWidth
                component={RFTextField}
                name="password"
                label="비밀번호"
                type='password'
                value={password}
                onChange={onPasswordHandler}
                size="large"
              />
              {/* <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} />
            <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} />
            <button type="submit" onSubmit={onClickLogin}>로그인</button> */}
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
                onSubmit={onClickLogin}
              >
                {'로그인'}
              </FormButton>
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
