import { Container } from "@mui/material";
import styled from "styled-components";
import { appColors } from "../../../constants/colors";
import Text from "../../UI/Text";
import View from "../../UI/View";

const MainContainer = styled(View)`
  padding: 85px 0px;
  min-height: 100vh;
padding: 40px 0px;
  display: flex;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 42px;
  line-height: 48px;
  padding-left: 36px;
  color: ${appColors.darkBlue};
  border-left: 20px solid ${appColors.darkBlue};
`;

const Row = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomBanner = () => {
  return (
    <MainContainer>
      <Container>
        <Row>
          <Title>
            WE PAINT IT <br />
            JUST THE WAY <br />
            YOU WANT IT
          </Title>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default BottomBanner;
