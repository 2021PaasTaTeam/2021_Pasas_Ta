import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '../modules/components/Typography';
import AppFooter from '../modules/views/AppFooter';
import AppAppBar2 from '../modules/views/AppBar2';
import AppForm from '../modules/views/AppForm';
import FormButton from '../modules/form/FormButton';
import withRoot from '../modules/withRoot';

function Choiceregion() {
  const session = JSON.parse(window.sessionStorage.getItem("data"));
  const session_land = JSON.parse(window.sessionStorage.getItem("land"));

  const [image1, setImage1] = useState("/assets/blank.jpg");
  const [image2, setImage2] = useState("/assets/blank.jpg");
  const [image3, setImage3] = useState("/assets/blank.jpg");
  const [image4, setImage4] = useState("/assets/blank.jpg");
  const [image5, setImage5] = useState("/assets/blank.jpg");
  const [image6, setImage6] = useState("/assets/blank.jpg");

  const [region, setRegion] = useState("");

  //console.log(session_land.land)
  var list = [];

  for (var i = 0; i < session.data.landAndShopInfos.length; i++) {
    if (session.data.landAndShopInfos[i].landBuilding === session_land.land) {
      list.push(session.data.landAndShopInfos[i])
    }
  }
  //console.log(list)

  function load() {
    if (list[0].seat === 'YES') {
      setImage1("/assets/X.gif")
    }
    if (list[1].seat === 'YES') {
      setImage2("/assets/X.gif")
    }
    if (list[2].seat === 'YES') {
      setImage3("/assets/X.gif")
    }
    if (list[3].seat === 'YES') {
      setImage4("/assets/X.gif")
    }
    if (list[4].seat === 'YES') {
      setImage5("/assets/X.gif")
    }
    if (list[5].seat === 'YES') {
      setImage6("/assets/X.gif")
    }
  }

  function next() {
    if (image1 === "/assets/O.gif") {
      setRegion(list[0].landId)
    }
    if (image2 === "/assets/O.gif") {
      //console.log("2번 확인")
      setRegion(list[1].landId)
      //console.log(list[1].landId)
    }
    if (image3 === "/assets/O.gif") {
      setRegion(list[2].landId)
      //console.log("3번 확인")
      //console.log(list[2].landId)
    }
    if (image4 === "/assets/O.gif") {
      setRegion(list[3].landId)
    }
    if (image5 === "/assets/O.gif") {
      setRegion(list[4].landId)
    }
    if (image6 === "/assets/O.gif") {
      setRegion(list[5].landId)
    }
  }

  //console.log(id)
  useEffect(() => {
    load()
  }, []);
  useEffect(() => {
    next()
  }, [list]);
  


  //console.log(id)
  function clickCell1() {
    if (image1 !== "/assets/X.gif") {
      setImage1("/assets/O.gif")
    }
  }
  function clickCell2() {
    if (image2 !== "/assets/X.gif") {
      setImage2("/assets/O.gif")
    }
  }
  function clickCell3() {
    if (image3 !== "/assets/X.gif") {
      setImage3("/assets/O.gif")
    }
  }
  function clickCell4() {
    if (image4 !== "/assets/X.gif") {
      setImage4("/assets/O.gif")
    }
  }
  function clickCell5() {
    if (image5 !== "/assets/X.gif") {
      setImage5("/assets/O.gif")
    }
  }
  function clickCell6() {
    if (image6 !== "/assets/X.gif") {
      setImage6("/assets/O.gif")
    }
  }

  function onClickNext() {
    const landObj2 = { land2: region };
    window.sessionStorage.setItem("land2", JSON.stringify(landObj2));
    window.location.replace("/Addstore")
  }

  return (
    <React.Fragment>
      <AppAppBar2 />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" align="center">
            우리 가게 지역 설정 하기
          </Typography>
        </React.Fragment>

        <br />
        <br />
        <br />
        <br /><br />
        <br /><br />
        <div align="center" >
          <table>
            <tbody><tr><td>
              <table border={1}>
                <tbody><tr>
                  <td onClick={clickCell1} border={0} height={150} width={150} >
                    <img src={image1} height={150} width={150} /></td>
                  <td onClick={clickCell2} border={0} height={150} width={150} ><img src={image2} height={150} width={150} /></td>
                  <td onClick={clickCell3} border={0} height={150} width={150} ><img src={image3} height={150} width={150} /></td>
                </tr>
                  <tr>
                    <td onClick={clickCell4} border={0} height={150} width={150} ><img src={image4} height={150} width={150} /></td>
                    <td onClick={clickCell5} border={0} height={150} width={150} ><img src={image5} height={150} width={150} /></td>
                    <td onClick={clickCell6} border={0} height={150} width={150} ><img src={image6} height={150} width={150} /></td>
                  </tr>
                </tbody></table>
            </td>
            </tr></tbody></table>
        </div>
        <br />
        <br />
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
              onClick={onClickNext}
            >
              {'가게 등록하기'}
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
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Choiceregion);