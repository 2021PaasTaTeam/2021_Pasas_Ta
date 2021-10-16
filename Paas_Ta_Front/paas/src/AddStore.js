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

function AddStore() {

    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <h>가게 이름 </h>
                <input name="" type="text" placeholder="가게 이름 입력" />

                <div>
                    <h>//대표 이름은 세션으로 받아올 예정</h>
                </div>
                <div>
                    <h>가게 업종 </h>
                    <select name="업종" >
                        <option value="none">=== 선택 ===</option>
                        <option value="">한복</option>
                        <option value="">음식점</option>
                        <option value="">공방</option>
                        <option value="">기타 등등...</option>
                    </select>
                </div>

                <div>
                    <h>가게 지역구 선택 </h>
                    <select name="지역구" >
                        <option value="none">=== 선택 ===</option>
                        <option value="">성북구</option>
                        <option value="">종로구</option>
                        <option value="">영등포구</option>
                        <option value="">등등...</option>
                    </select>
                </div>
                <div>
                    <h>가게 전화번호 </h>
                    <input name="" type="text" placeholder="전화 번호 압력" />
                </div>
                <div>
                    <h>가게 상표 이미지 </h>
                    <input name="" type="text" placeholder="이미지 파일 스트림 넣을 예정" />
                </div>
                <div>
                    <h>상품 이름 </h>
                    <input name="" type="text" placeholder="상품 이름 압력" />
                </div>
                <div>
                    <h>상품 내용 설명 </h>
                    <input name="" type="text" placeholder="상품 설명 압력" />
                </div>
                <div>
                    <h>상품 가격 </h>
                    <input name="" type="text" placeholder="상품 가격 압력" />
                </div>
                <div>
                    <h>상품 재고 </h>
                    <input name="" type="text" placeholder="상품 재고수 입력" />
                </div>
                <div>
                    <h>상품 이미지 </h>
                    <input name="" type="text" placeholder="이미지 파일 스트림 넣을 예정" />
                </div>

                <div>
                    <button type="submit" >등록 하기</button>
                </div>
                <div>
                    <button type="submit" >취소 하기</button>
                </div>
            </AppForm>
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(AddStore);
