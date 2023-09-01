import Container from "../../UI/Container";
import styled from "styled-components";
import View from "../../UI/View";
import Grid from "@mui/material/Grid";
import Text from "../../UI/Text";
import { appColors } from "../../../constants/colors";
import Box from "@mui/material/Box";

const MainContainer = styled(View)`
  padding: 180px 0px;
  // min-height: 100vh;
  padding: 40px 0px;
`;

const Title = styled(Text)`
  font-size: 50px;
  line-height: 58px;
  color: ${appColors.semiBlue};
  text-align: center;
`;

const GridRow = styled(Grid)`
  @media screen and (min-width: 860px) {
    & > div:not(:last-child) {
      border-right: 1px solid #d4d4d4;
    }
  }
`;

const CircleTitle = styled(Text)`
  color: #4badd4;
  font-size: 28px;
  line-height: 34px;
  margin-top: 24px;
`;

const CircleContainer = styled(Box)`
  width: 120px;
  height: 120px;
  background-color: ${appColors.semiBlue};
  border-radius: 100%;
`;

const GridBox = styled(Grid)``;

const CircleRow = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 240px;
`;

const OurTeam = () => {
  return (
    <>
      <MainContainer>
        <Container>
          <Title>Our Team</Title>
          <GridRow container mt={6}>
            <GridBox item md={3} sm={12} xs={12}>
              <CircleRow>
                <CircleContainer />
                <CircleTitle>LOREM IPSUM</CircleTitle>
              </CircleRow>
            </GridBox>
            <GridBox item md={3} sm={12} xs={12}>
              <CircleRow>
                <CircleContainer />
                <CircleTitle>LOREM IPSUM</CircleTitle>
              </CircleRow>
            </GridBox>
            <GridBox item md={3} sm={12} xs={12}>
              <CircleRow>
                <CircleContainer />
                <CircleTitle>LOREM IPSUM</CircleTitle>
              </CircleRow>
            </GridBox>
            <GridBox item md={3} sm={12} xs={12}>
              <CircleRow>
                <CircleContainer />
                <CircleTitle>LOREM IPSUM</CircleTitle>
              </CircleRow>
            </GridBox>
          </GridRow>
        </Container>
      </MainContainer>
    </>
  );
};

export default OurTeam;
