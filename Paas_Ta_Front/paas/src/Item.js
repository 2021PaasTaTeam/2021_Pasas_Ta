import Box from '@mui/material/Box';
import { Field, Form } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';

function Product() {

    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <h>가게 이름 </h>
                <div>
                <input name="" type="text" placeholder="이미지" />
                    <h>대표 이름</h>
                </div>
                <div>
                    <h>가게 업종</h>
                </div>

                <div>
                    <h>가게 실제 주소</h>
                </div>
                <div>
                    <h>가게 전화번호 </h>
                </div>
                
                <Box component="form" noValidate sx={{ mt: 6 }}>

                    <input name="" type="text" placeholder="상품이미지" />
                    <input name="" type="text" placeholder="상품이름" />

                    <input name="" type="text" placeholder="상품이미지" />
                    <input name="" type="text" placeholder="내용" />

                    <input name="" type="text" placeholder="상품이미지" />
                    <input name="" type="text" placeholder="가격" />


                    <div>
                        <h>영업 시간</h>
                    </div>
                    <div>
                        <input name="" type="text" placeholder="가게 리뷰" />
                    </div>
                    <button type="submit" >장바구니 넣기</button>
                    <div>
                        <button type="submit" >구매하기</button>
                    </div>
                    <div>
                        <button type="submit" >취소하기</button>
                    </div>
                </Box>
            </AppForm>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Product);
