import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { useState, useEffect } from 'react';
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
  var [user, setUser] = useState([]);
  var new_user = [];

  function searchUser() {
    const url = "http://localhost:8080/user";
    axios.get(url)
      .then(function (response) {
        setUser(response.data);
        console.log(response.data)
        console.log("성공");
        var name;
        var address;
        //var password;
        var email;
        for (let i = 0; i < user.length; i++) {
          if (user[i].email === session.data.email) {
            name = response.data[i].name;
            address = response.data[i].address;
            email = response.data[i].email;
            //password = response.data[i].password;
          }
        }
        setName(name);
        setAddress(address);
        setEmail(email);
        //setPassword(password);
        console.log(name)
      })
      .catch(function (error) {
        console.log("실패");
      })
  }
  for (let i = 0; i < user.length; i++) {
    if (user[i].email === session.data.email) {
      new_user = user[i];
    }
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
    axios.post('http://localhost:8080/user/' + session.data.id, data, {
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

  useEffect(() => {
    searchUser()
  }, [new_user.name]);

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
        <form onSubmit>
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
            value={name}
            onChange={onNameHandler}
          >
          </input>
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
            value={email}
            readonly
            onChange={onEmailHandler}>
          </input>
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
            value={address}
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
        </form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(MyPage);