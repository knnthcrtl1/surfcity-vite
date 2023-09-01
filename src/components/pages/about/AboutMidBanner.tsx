import styled from "styled-components";
import View from "../../UI/View";
import Container from "../../UI/Container";
import { appColors } from "../../../constants/colors";
import Text from "../../UI/Text";

const MainContainer = styled(View)`
  min-height: 100vh;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  padding: 80px 0px;
  background-color: #fad049;
`;

const Row = styled(View)`
  background-color: ${appColors.semiBlue};
`;

const Title = styled(Text)`
  // font-size: 92px;
  // line-height: 88px;
  color #ffffff !important;
  text-align: left;
  letter-spacing: 2.6px;
`;

const BoxRow = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const AboutMidBanner = () => {
  return (
    <Row>
      <MainContainer>
        <Container>
          <BoxRow>
            <Title
              sx={{
                fontSize: { md: "92px", sm: "42px" },
                lineHeight: { md: "98px", sm: "48px" },
              }}
            >
              NOTHING FEELS BETTER
              <br />
              THAN A FRESH COAT
            </Title>
          </BoxRow>
        </Container>
      </MainContainer>
    </Row>
  );
};

export default AboutMidBanner;
