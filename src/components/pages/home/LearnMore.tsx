import View from "../../UI/View";
import styled from "styled-components";
import Container from "../../UI/Container";
import ButtonBase from "@mui/material/ButtonBase";
import { appColors } from "../../../constants/colors";
import { useRouter } from "next/router";

const MainContainer = styled(View)`
  background-image: url(./pngs/about-mid-bg.png);
  background-size: cover;
  height: 120px;
`;

const Row = styled(View)`
  background-color: #82cce9;
`;

const LearnButton = styled(ButtonBase)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 11px;
    line-height: 16px;
    padding: 8px 25px;
    margin-top: -16px;
  }
  font-size: 28px;
  color: ${appColors.yellow};
  background-color: #20232c;
  border-radius: 82px;
  letter-spacing: 3.6px;
  margin-top: -32px;
  padding: 16px 50px;
  font-weight: bold;
  font-family: Gotham;
`;

const ButtonRow = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LearnMore = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/services");
  };

  return (
    <Row>
      <MainContainer>
        <Container>
          <ButtonRow>
            <LearnButton onClick={handleNavigate}>
              LEARN MORE ABOUT OUR SERVICES
            </LearnButton>
          </ButtonRow>
        </Container>
      </MainContainer>
    </Row>
  );
};

export default LearnMore;
