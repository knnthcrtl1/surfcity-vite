import styled from "styled-components";
import View from "../../UI/View";
import Container from "../../UI/Container";
import { appColors } from "../../../constants/colors";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Text from "../../UI/Text";
import serviceImg from "../../../assets/pngs/serviceImg.png";
import Image from "next/image";

const MainContainer = styled(View)`
  margin-top: 24px;
`;

const Title = styled(Text)`
  font-size: 42px;
  line-height: 48px;
  font-family: Gotham;
  font-weight: bold;
  @media screen and (max-width: 420px) and (min-width: 0px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const Desc = styled(Text)`
  margin-top: 16px;
  color: ${appColors.blueGreen};
  font-size: 18px;
`;

const GridContent = styled(Grid)`
  @media screen and (max-width: 768px) and (min-width: 0px) {
    text-align: center;
  }
`;

const HomeService = () => {
  return (
    <MainContainer>
      <Container>
        <Grid
          mt={6}
          container
          alignItems="center"
          sx={{
            flexDirection: { sm: "column-reverse", md: "inherit" },
          }}
        >
          <Grid item md={6} sm={12} xs={12}>
            <Image src={serviceImg} alt="home-service-img" />
          </Grid>
          <GridContent item md={6} sm={12} xs={12}>
            <Title>The right team for your painting project.</Title>
            <Desc>
              Professional and in-house painters on our staff are all insured
              and licensed, so you can rest easy knowing your project is in good
              hands. In addition to this, we utilize only the best paint
              products.
            </Desc>
          </GridContent>
        </Grid>
      </Container>
    </MainContainer>
  );
};

export default HomeService;
