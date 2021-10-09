import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import React, { useState, useEffect } from 'react';
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
        if(res.data.email === undefined){
            // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
            alert('회원가입이 완료되었습니다.')
            document.location.href = '/Login'
        }
    })
    .catch()
  }

  //   const [sent, setSent] = React.useState(false);

  //   const validate = (values) => {
  //     const errors = required(['firstName', 'lastName', 'email', 'password'], values);

  //     if (!errors.email) {
  //       const emailError = email(values.email);
  //       if (emailError) {
  //         errors.email = emailError;
  //       }
  //     }

  //     return errors;
  //   };

  //   const handleSubmit = () => {
  //     setSent(true);
  //   };

//   return (
//     <React.Fragment>
//       <AppAppBar />
//       <AppForm>
//         <React.Fragment>
//           <Typography
//             color="inherit"
//             variant="h3"
//             align="center">
//             GATHER SKON
//           </Typography>
//         </React.Fragment>
//         <Form
//           //onSubmit={handleSubmit}
//           //subscription={{ submitting: true }}
//           //validate={validate}
//         >
//           {/* {({ handleSubmit: handleSubmit2, submitting }) => ( */}
//             {/* <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}> */}
//               <input name="name" type="name" placeholder="이름" value={name} onChange={onNameHandler} />
//               <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} />
//               <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} />
//               <input name="address" type="address" placeholder="주소" value={address} onChange={onAddressHandler} />
//               <button type="submit" onSubmit={onClickSignUp} class="loginregister__button">회원가입</button>
//               <Field
//                 fullWidth
//                 component={RFTextField}
//                 ///disabled={submitting || sent}
//                 required
//                 name="name"
//                 autoComplete="name"
//                 label="이름"
//                 type="password"
//                 margin="normal"
//                 required
//               />
//               <Field
//                 autoComplete="email"
//                 component={RFTextField}
//                 //disabled={submitting || sent}
//                 fullWidth
//                 label="이메일"
//                 margin="normal"
//                 name="email"
//                 required
//               />
//               <Field
//                 fullWidth
//                 component={RFTextField}
//                 //disabled={submitting || sent}
//                 required
//                 name="password"
//                 autoComplete="new-password"
//                 label="비밀번호"
//                 type="password"
//                 margin="normal"
//               />
//               <Field
//                 autoComplete="address"
//                 component={RFTextField}
//                 //disabled={submitting || sent}
//                 fullWidth
//                 label="주소"
//                 margin="normal"
//                 name="address"
//                 required
//               />
//               <FormSpy subscription={{ submitError: true }}>
//                 {({ submitError }) =>
//                   submitError ? (
//                     <FormFeedback error sx={{ mt: 2 }}>
//                       {submitError}
//                     </FormFeedback>
//                   ) : null
//                 }
//               </FormSpy>
//               <FormButton
//                 sx={{ mt: 3, mb: 2 }}
//                 //disabled={submitting || sent}
//                 color="primary"
//                 fullWidth
//               >
//                 {'회원 가입'}
//               </FormButton>
//             {/* </Box> */}
//           {/* )} */}
//         </Form>
//       </AppForm>
//       <AppFooter />
//     </React.Fragment>
//   );
// }

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
           <input name="name" type="name" placeholder="이름" value={name} onChange={onNameHandler} />
               <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} />
               <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} />
               <input name="address" type="address" placeholder="주소" value={address} onChange={onAddressHandler} />
               <button type="submit" onSubmit={onClickSignUp} class="loginregister__button">회원가입</button>
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

export default withRoot(SignUp);
