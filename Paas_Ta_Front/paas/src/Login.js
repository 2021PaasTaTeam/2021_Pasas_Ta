import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppBar';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';

function Login() {
  const [sent, setSent] = React.useState(false);

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(true);
  };

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
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
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
                disabled={submitting || sent}
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
              </FormButton>
              <FormButton
                sx={{ mt: 1, mb: 1 }}
                disabled={submitting || sent}
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
                disabled={submitting || sent}
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
                disabled={submitting || sent}
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
