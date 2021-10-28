import { Form } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar from '../modules/views/AppBar';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios'

function admin_user() {


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
              <Typography variant="h8" >
                이메일
              </Typography>
              <br />
              <input type="text"
                label="이메일"
                name="email"
                style={{
                  fontSize: 25,
                  padding: 20,
                  width: 530,
                  height: 80,
                  border: "2px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                //value={email}
                //onChange={onEmailHandler}
              />
              <br />
              <br />
              <Typography variant="h8" >
                비밀번호
              </Typography>
              <br />
              <input type="password"
                name="password"
                style={{
                  fontSize: 25,
                  width: 530,
                  padding: 20,
                  height: 80,
                  border: "2px solid black",
                  collapse: 'collapse',
                  borderRadius: '8px',
                }}
                //value={password}
                //onChange={onPasswordHandler}
              />
              <br />
              <br />
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
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(admin_user);
