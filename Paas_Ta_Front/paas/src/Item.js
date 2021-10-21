import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';

function Product() {
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
                <br />
                <div className="c1image" style={{
                    float: 'left'
                }} >
                    <img className="phoneImage"
                        height="200vh"
                        width="200vw"
                        src="/assets/github.png" />
                </div>
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
                        &nbsp;&nbsp;상품 이름 : 잭 다니엘 허니
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
                        &nbsp;&nbsp;상품 설명 : 양주
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
                        &nbsp;&nbsp;가격 : 1000000원
                    </Typography>
                </div>
                <br />
                <br />
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
                        <button onClick={onDecrease} style={btnStyle}>-</button>
                        &nbsp;&nbsp;{number}&nbsp;&nbsp;
                    </Typography>
                    <button onClick={onIncrease} style={btnStyle}>+</button>
                    &nbsp;

                </div>

                <br />
                <br />
                <br />
                <br />
                <div style={{
                    float: 'left'
                }}>
                    <Typography variant="h3"
                        style={{
                            fontSize: 20
                        }}
                        align="left">
                        가게 리뷰
                    </Typography>
                </div>
                <div style={{
                    float: 'right'
                }}>
                    <button onClick={Review_write} style={{
                        color: "white",
                        background: "blue",
                        padding: ".120rem .720rem",
                        border: "1px solid blue",
                        borderRadius: ".25rem",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                    }}>리뷰 쓰기</button>
                </div>
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
                        &nbsp;&nbsp;{session.data.name} :
                    </Typography>
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
                        &nbsp;또 오고 싶어요 😀😀
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
                        &nbsp;&nbsp;이주현 :
                    </Typography>
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
                        &nbsp;저는 싫어요 😤😤
                    </Typography>
                </div>

                <br />
                <br />
                <Typography variant="h3"
                    style={{
                        fontSize: 20
                    }}
                    align="left">
                    합계
                </Typography>
                <div
                    style={{
                        width: "100%",
                        borderBottom: "3px solid black",
                        lineHeight: "0.1em",
                        margin: "10px 0 10px",
                    }}
                >
                    <span style={{ background: "#fff", }}></span>
                </div>
                <div ><Typography variant="h4"
                    style={{
                        fontSize: 16,
                        float: 'left'
                    }}
                >
                    선택 상품 개수
                </Typography></div>
                <div ><Typography variant="h4"
                    style={{
                        fontSize: 16,
                        float: 'right'
                    }}
                >
                    {number + ' 개'}
                </Typography></div>
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
                <div>
                    <Typography variant="h3"
                        style={{
                            fontSize: 17,
                            float: 'left'
                        }}
                    >
                        결재 금액
                    </Typography>
                </div>
                <div ><Typography variant="h3"
                    style={{
                        fontSize: 17,
                        float: 'right'
                    }}
                >
                    {0 + ' 원'}
                </Typography></div>

                <br />
                <br />
                <FormButton
                    sx={{ mt: 1, mb: 1 }}
                    size="large"
                    color="primary"
                    fullWidth
                    style={{
                        padding: 8,
                        color: "blue",
                        backgroundColor: "white",
                        border: "4px solid blue",
                        collapse: 'collapse',
                        borderRadius: '8px',
                    }}
                //type="submit"
                >
                    {'👜 장바구니 넣기'}
                </FormButton>
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
                            {'바로 구매하기'}
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
                            onClick={close}
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

export default withRoot(Product);
