import Container from "../../UI/Container";
import styled from "styled-components";
import View from "../../UI/View";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Text from "../../UI/Text";
import { appColors } from "../../../constants/colors";
import paintBrush from "../../../assets/pngs/paint-brush.png";
import Image from "next/image";
import DesktopContainer from "../../UI/DesktopContainer";
import MobileContainer from "../../UI/MobileContainer";

const MainContainer = styled(View)``;

const RowContainer = styled(Container)`
  background-image: url(./pngs/paint-bg.png);
  background-size: cover;
  background-position: top;
  min-height: 100vh;
  display: flex;
`;

const Title = styled(Text)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 50px;
    line-height: 58px;
  }
  @media screen and (max-width: 768px) and (min-width: 0px) {
    text-align: center;
  }
  font-size: 82px;
  line-height: 88px;
  color: ${appColors.semiBlue};
  font-family: Gotham;
`;

const Desc = styled(Text)`
  @media screen and (max-width: 768px) and (min-width: 0px) {
    text-align: center;
  }
`;

const GridRow = styled(Grid)`
  // padding: 90px 0px;
`;

const Story = () => {
  return (
    <MainContainer>
      <MobileContainer px={2} pt={4}>
        <Box>
          <Title>Our Story.</Title>
          <Desc>
            Surf City Home Repair Service is a painting and exterior home repair
            service focused on bringing the best repair and painting services to
            its homeowner and commercial clients.
            <br /> <br /> With a focus on customer service and well-executed
            work, Surf City is always looking for the best results when
            repairing and repainting a structure be it apartments /condo
            complexes or family residences.
          </Desc>
        </Box>
        <Box mt={2} textAlign="center">
          <Image src={paintBrush} alt="paint-brush" />
        </Box>
      </MobileContainer>
      <DesktopContainer>
        <RowContainer>
          <GridRow container alignItems="center" display="flex" px={2}>
            <Grid item md={6} sm={12}></Grid>
            <Grid item md={6} sm={12}>
              <Title>Our Story.</Title>
              <Desc>
                Surf City Home Repair Service is a painting and exterior home
                repair service focused on bringing the best repair and painting
                services to its homeowner and commercial clients.
                <br /> <br /> With a focus on customer service and well-executed
                work, Surf City is always looking for the best results when
                repairing and repainting a structure be it apartments /condo
                complexes or family residences.
              </Desc>
            </Grid>
          </GridRow>
        </RowContainer>
      </DesktopContainer>
    </MainContainer>
  );
};

export default Story;
