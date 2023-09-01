import View from "../../UI/View";
import styled from "styled-components";
import Container from "../../UI/Container";
import Grid from "@mui/material/Grid";
import { appColors } from "../../../constants/colors";
import Text from "../../UI/Text";
import Image from "next/image";
import c1 from "../../../assets/pngs/c1.png";
import c2 from "../../../assets/pngs/c2.png";
import c3 from "../../../assets/pngs/c3.png";
import c4 from "../../../assets/pngs/c4.png";
import mc1 from "../../../assets/pngs/mc1.png";
import mc2 from "../../../assets/pngs/mc2.png";
import mc3 from "../../../assets/pngs/mc3.png";
import mc4 from "../../../assets/pngs/mc4.png";
import Box from "@mui/material/Box";
import DesktopRow from "../../UI/DesktopContainer";
import MobileRow from "../../UI/MobileContainer";

const MainContainer = styled(View)`
  background-image: url(./pngs/cloud-bg.png);
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 0px;
  min-height: 100vh;
`;

const WhiteRow = styled(View)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    margin-top: -60px;
  }
  @media screen and (max-width: 420px) and (min-width: 0px) {
    margin-top: -40px;
  }
  width: 100%;
  // max-width: 1520px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 20px #00000029;
  border-radius: 53px;
  padding: 20px;
`;

const ItemTitle = styled(Text)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 11px;
    line-height: 18px;
  }
  @media screen and (max-width: 480px) and (min-width: 0px) {
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    margin-top: 0px;
  }
  @media screen and (max-width: 768px) and (min-width: 481px) {
    margin-top: 16px;
  }
  @media screen and and (min-width: 480px) {
    margin-top: 0px;
  }
  color: ${appColors.semiBlue};
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 1.2px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 16px;
`;

const ItemBox = styled(Box)`
  @media screen and (max-width: 480px) and (min-width: 0px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    // width: 130px;
    // min-height: 97px;
  }
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ChooseRow = styled(Box)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    height: 130px;
  }

  width: 100%;
  max-width: 624px;
  border-top-left-radius: 46px;
  background-color: #52b1d6;
  border-top-right-radius: 46px;
`;

const ChooseTitle = styled(Text)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (max-width: 420px) and (min-width: 0px) {
    padding-right: 16px;
  }
  font-family: Gotham !important;
  font-size: 42px;
  line-height: 48px;
  padding-left: 30px;
  padding-top: 20px;
  color: #ffffff;
  font-weight: bold;
`;

const WhyChoose = () => {
  return (
    <MainContainer>
      <Container>
        <ChooseRow height={{ md: 140 }}>
          <ChooseTitle>Why Choose Surf City?</ChooseTitle>
        </ChooseRow>
        <WhiteRow mt={{ md: "-60px" }}>
          <Grid container spacing={4}>
            <Grid item md={3} sm={6} xs={12}>
              <ItemBox>
                <DesktopRow>
                  <Image src={c1} alt="icons" width={130} height={97} />
                </DesktopRow>
                <MobileRow>
                  <Image src={mc1} alt="icons" width={60} height={60} />
                </MobileRow>
                <ItemTitle>Reliable Quality</ItemTitle>
              </ItemBox>
            </Grid>

            <Grid item md={3} sm={6} xs={12}>
              <ItemBox>
                <DesktopRow>
                  <Image src={c2} alt="icons" width={130} height={97} />
                </DesktopRow>
                <MobileRow>
                  <Image src={mc2} alt="icons" width={60} height={60} />
                </MobileRow>
                <ItemTitle>Convenient Scheduling</ItemTitle>
              </ItemBox>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ItemBox>
                <DesktopRow>
                  <Image src={c3} alt="icons" width={130} height={97} />
                </DesktopRow>
                <MobileRow>
                  <Image src={mc3} alt="icons" width={60} height={60} />
                </MobileRow>
                <ItemTitle>Budget Friendly</ItemTitle>
              </ItemBox>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <ItemBox>
                <DesktopRow>
                  <Image src={c4} alt="icons" width={130} height={97} />
                </DesktopRow>
                <MobileRow>
                  <Image src={mc4} alt="icons" width={60} height={60} />
                </MobileRow>
                <ItemTitle>Complete Cleanliness</ItemTitle>
              </ItemBox>
            </Grid>
          </Grid>
        </WhiteRow>
      </Container>
    </MainContainer>
  );
};

export default WhyChoose;
