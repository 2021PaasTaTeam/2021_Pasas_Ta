import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar2 from './modules/views/AppBar2';
import AppForm from './modules/views/AppForm';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import React, { useState } from 'react';
import axios from 'axios';

function Review() {
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
        window.open("/Review", "", "width=650, height=450, toolbar=no, menubar=no, scrollbars=no, resizable=yes");
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
            <AppForm>
                <React.Fragment>
                    <Typography variant="h3" align="center">
                        ✍ 리뷰 작성하기
                    </Typography>
                </React.Fragment>
                <br />
                <div className="c1image" style={{
                    float: 'left'
                }} >&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="phoneImage"
                        height="100vh"
                        width="100vw"
                        src="/assets/github.png" />
                </div>
                <br/>
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
                        &nbsp;&nbsp;&nbsp;&nbsp;가게 이름 : 🌊 바다네 생선가게 🌊
                    </Typography>
                </div>
                <br />
                <br />
                <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography variant="h6" align="center" style={{
                                        width: 130,
                                        height: 10
                                    }}>
                                        &nbsp;&nbsp;✍리뷰
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                <input type="text"
                                name="name"
                                    style={{
                                        padding: 20,
                                        width: 380,
                                        height: 50,
                                        border: "2px solid black",
                                        collapse: 'collapse',
                                        borderRadius: '8px',
                                    }}
                                     />
                                </Grid>
                            </Grid>
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
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <FormButton
                            sx={{ mt: 1, mb: 1 }}
                            size="large"
                            color="primary"
                            fullWidth
                            style={{
                                padding: 8,
                                collapse: 'collapse',
                                borderRadius: '8px',
                            }}
                            type="submit"
                        //onSubmit={onClickRegister}
                        >
                            {'리뷰 등록하기'}
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
        </React.Fragment>
    );
}

export default withRoot(Review);
