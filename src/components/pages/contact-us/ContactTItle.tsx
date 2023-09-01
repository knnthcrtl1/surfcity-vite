import View from "../../UI/View";
import styled from "styled-components";
import Text from "../../UI/Text";
import Container from "../../UI/Container";
import { appColors } from "../../../constants/colors";

const MainContainer = styled(View)`
  padding: 70px 0px;

  & p {
    color: ${appColors.semiBlue};
    font-size: 42px;
    text-align: center;
    line-height: 48px;
    letter-spacing: 4px;
  }
`;


const ContactTitle = () => {
  return (
    <MainContainer>
      <Container>
        <Text>REQUEST FOR A QUOTE</Text>
      </Container>
    </MainContainer>
  );
};

export default ContactTitle;
