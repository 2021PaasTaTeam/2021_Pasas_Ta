import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';

function EditItem() {
    const Town = () => {
        window.location.replace("/Town")
    }

    const labels = ['대한민국 전통 한복', '잭 다니엘']


    const session = JSON.parse(window.sessionStorage.getItem("data"));
    console.log(session.data.type)

    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }
    const Review_write = () => {
        window.open("/Review", "", "width=650, height=500, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
    }
    const close = () => {
        window.close();
    }

    const btnStyle = {
        color: "white",
        background: "black",
        padding: ".120rem .720rem",
        border: "1px solid black",
        borderRadius: ".25rem",
        fontSize: "1.4rem",
        lineHeight: 1.5,
    };

    return (
        <React.Fragment>
            <AppAppBar2 />
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        🌊 바다네 생선가게 🌊
                    </Typography>
                </React.Fragment>
                <br />
                <div className="c1image" style={{
                    float: 'left'
                }} >
                    <img className="phoneImage"
                        height="200vh"
                        width="200vw"
                        src="/assets/github.png" />
                </div>
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;대표 이름 : {session.data.name}
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 업종 : 한복
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 지역구 : 성북구
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 실주소 : 서울시 성북구 서경로
                    </Typography>
                </div>
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography
                        variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        &nbsp;&nbsp;가게 전화번호 : 01012345678
                    </Typography>
                </div>

                <br />
                <br />
                <div
                    style={{
                        width: "100%",
                        borderBottom: "1px solid #aaa",
                        lineHeight: "0.1em",
                        margin: "10px 0 10px",
                    }}
                >
                    <span style={{ background: "#fff", }}></span>
                </div>

                <Typography variant="h3" align="left"
                    style={{
                        fontSize: 25,
                        float: 'left'
                    }}>
                    판매 상품 목록
                </Typography>
                <br />
                <br />
                <div>
                    <ul>
                        {labels.map((label, idx) => (
                            <li key={idx}>
                                <label>
                                    <div className="c1image" style={{
                                        float: 'left'
                                    }} >
                                        <img className="phoneImage"
                                            height="165vh"
                                            width="165vw"
                                            src="/assets/github.png" />
                                    </div>
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;상품명 : &nbsp;&nbsp;
                                        </Typography>
                                        <div style={{
                                            float: 'left',
                                        }}>
                                            <input type="text"
                                                name="name"
                                                value={label}
                                            //onChange={onShop_nameHandler}
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;설명 : &nbsp;&nbsp;
                                        </Typography>
                                    </div>
                                    <div style={{
                                        float: 'left',
                                    }}>
                                        <input type="text"
                                            name="name"
                                            value='설명'
                                        //onChange={onShop_nameHandler}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;가격 : &nbsp;&nbsp;
                                        </Typography>
                                    </div>
                                    <div style={{
                                        float: 'left',
                                    }}>
                                        <input type="text"
                                            name="name"
                                            value='원'
                                        //onChange={onShop_nameHandler}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                    <div style={{
                                        float: 'left'
                                    }}>
                                        <Typography
                                            variant="h3"
                                            style={{
                                                fontSize: 17,
                                                float: 'left'
                                            }}
                                        >
                                            &nbsp;&nbsp;재고 : &nbsp;&nbsp;
                                        </Typography>
                                    </div>
                                    <div style={{
                                        float: 'left',
                                    }}>
                                        <input type="text"
                                            name="name"
                                            value='100'
                                        //onChange={onShop_nameHandler}
                                        />
                                    </div>
                                    <br />
                                    <br />
                                </label>
                                <div style={{
                                    float: 'right'
                                }}>

                                    <Typography
                                        variant="h3"
                                        style={{
                                            fontSize: 20,
                                            float: 'left'
                                        }}
                                    >
                                        <FormButton
                                            sx={{ mt: 1, mb: 1 }}
                                            color="secondary"
                                            style={{
                                                padding: 1,
                                                border: "2px solid red",
                                                collapse: 'collapse',
                                                borderRadius: '8px',
                                            }}
                                            type="submit"
                                        //onClick={() => item_remove(idx)}
                                        >
                                            {'상품 삭제'}
                                        </FormButton>
                                    </Typography>
                                    &nbsp;
                                </div>
                            </li>

                        ))}
                    </ul>
                </div>
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
                        //onSubmit={onClickRegister}
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
                            onClick={Town}
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

export default withRoot(EditItem);
