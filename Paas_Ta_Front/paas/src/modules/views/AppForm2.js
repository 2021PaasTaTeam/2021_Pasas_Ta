import * as React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '../components/Paper';

function AppForm2(props) {
  const { children } = props;

  return (
    <Box
    style = {{
      padding: 8,
      backgroundColor:"white",
      //backgroundImage:"https://mediahub.seoul.go.kr/wp-content/uploads/2020/09/e890e1058ac0da01e91bc915d5114142.jpg",
    }}
      sx={{
        display: 'flex',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper
            style = {{
              padding: 8,
              backgroundColor:"white",
              border: "4px solid black",
              collapse:'collapse',
              borderRadius:'8px',
            }}
            sx={{ py: { xs: 4, md: 8 }, px: { xs: 3, md: 6 } }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

AppForm2.propTypes = {
  children: PropTypes.node,
};

export default AppForm2;
