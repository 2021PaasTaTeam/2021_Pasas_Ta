import * as React from 'react';
import Sidebar from '../../user_page/Sidebar';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Home_main_Layout from './Home_main_Layout';

const backgroundImage =
  'https://mediahub.seoul.go.kr/wp-content/uploads/2020/09/e890e1058ac0da01e91bc915d5114142.jpg';
export default function Home_Main() {
  return (
    
    <Home_main_Layout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />

      <Typography color="inherit" align="center" variant="h2" >
        반갑습니다. 게더 스콘 입니다.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        게더 스콘으로 집에서 쉽게 전통 시장을 구경 해보세요.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="Login"
        sx={{ minWidth: 200 }}
      >
        입장하기
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        한국형 메타버스를 경험해보세요.
      </Typography>
    </Home_main_Layout>
  );
}
