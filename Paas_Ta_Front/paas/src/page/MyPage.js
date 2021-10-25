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
  const session = JSON.parse(window.sessionStorage.getItem("data"));


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

  console.log(session.data.id)
  const onClickModify = () => {
    console.log('click login')
    console.log('ID : ', email)
    console.log('PW : ', password)
    console.log('NAME : ', name)
    let data = JSON.stringify({
      'password': password,
      'email': email,
      'name': name,
    })
    axios.post('http://localhost:8080/user/'+session.data.id, data, {
      headers: {
        'Content-type': 'application/json; charset=utf-8',
      }
    })
      .then(res => {
        console.log(res.data.name)
          alert('회원 정보가 수정되었습니다.')
          document.location.href = '/Town'
      })
      .catch()
  }


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
              <Typography variant="h8" >
                이름
              </Typography>
              <br />
              <br />
              <input type="name"
                name="name"
                style={{
                  padding: 20,
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
                  padding: 20,
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
                  padding: 20,
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
                  padding: 20,
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
                    onClick={onClickModify}
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
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(MyPage);
