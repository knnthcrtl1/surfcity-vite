import Container from "../../UI/Container";
import styled from "styled-components";
import View from "../../UI/View";
import Grid from "@mui/material/Grid";
import Text from "../../UI/Text";
import { appColors } from "../../../constants/colors";

const MainContainer = styled(View)`
  background-color: ${appColors.semiBlue};
`;

const RowContainer = styled(View)`
  background-image: url(./pngs/about-mid-bg.png);
  background-size: cover;
  background-position: top;
  min-height: 100vh;
  padding: 40px 0px;
  display: flex;
`;

const Title = styled(Text)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 50px;
    line-height: 58px;
  }
  font-size: 82px;
  line-height: 88px;
  text-align: center;
  color: #ffffff;
  font-family: Gotham;
`;

const GridRow = styled(Grid)`
  // padding: 90px 0px;
`;

const Desc = styled(Text)`
  color: #ffffff;
  @media screen and (max-width: 768px) and (min-width: 0px) {
    text-align: center;
  }
`;

const WaterBackground = styled(View)`
  background-image: url(./pngs/waterfall-divider.png);
  height: 272px;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -6px;
`;

const Story = () => {
  return (
    <>
      <MainContainer>
        <RowContainer>
          <Container display="flex">
            <GridRow container alignItems="center" display="flex" spacing={2}>
              <Grid item md={6} sm={12}>
                <Title>Our Mission.</Title>
              </Grid>
              <Grid item md={6} sm={12}>
                <Desc>
                  In Surf City, we endeavor to bring your property’s vision to
                  reality through our services. We are a forward-thinking
                  company that values customer service and pleasure above all
                  else. <br />
                  <br />
                  We’ve worked on a wide range of projects, from little
                  residential houses to major commercial buildings, and we’ve
                  always done an excellent job. It is our objective at Surf
                  City to be the best in the business. Our services are
                  delivered with integrity and consideration for your needs in
                  mind. <br />
                  <br />
                  Surf City values honesty and consideration in the way we
                  handle our partners, staff, and consumers. We aim to bring
                  value to our business operations and client community.
                </Desc>
              </Grid>
            </GridRow>
          </Container>
        </RowContainer>
      </MainContainer>
      <WaterBackground />
    </>
  );
};

export default Story;
