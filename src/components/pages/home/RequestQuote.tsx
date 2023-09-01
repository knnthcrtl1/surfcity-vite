import styled from "styled-components";
import View from "../../UI/View";
import Container from "../../UI/Container";
import { appColors } from "../../../constants/colors";
import Text from "../../UI/Text";
import ButtonBase from "@mui/material/ButtonBase";
import { useRouter } from "next/router";

const MainContainer = styled(View)`
  background-image: url(./pngs/about-mid-bg.png);
  background-size: cover;
  min-height: 100vh;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  padding: 80px 0px;
`;

const Row = styled(View)`
  background-color: ${appColors.semiBlue};
`;

const Title = styled(Text)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 50px;
    line-height: 58px;
  }
  font-size: 92px;
  line-height: 98px;
  color #ffffff;
  text-align: center;
  font-family: Gotham !important;
  letter-spacing: 2.6px;
`;

const Button = styled(ButtonBase)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 11px;
    line-height: 16px;
    padding: 8px 25px;
  }
  font-size: 22px;
  line-height: 28px;
  color: ${appColors.yellow};
  background-color: #20232c;
  border-radius: 82px;
  letter-spacing: 3.6px;
  padding: 16px 46px;
  margin-top: 32px;
  text-transform: uppercase;
  font-family: Gotham;
`;

const BoxRow = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const RequestQuote = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact-us");
  };

  return (
    <Row>
      <MainContainer>
        <Container>
          <BoxRow>
            <Title>Take your Home to the Next level</Title>
            <Button onClick={handleNavigate}>Request for a quote</Button>
          </BoxRow>
        </Container>
      </MainContainer>
    </Row>
  );
};

export default RequestQuote;
