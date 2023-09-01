import Container from "../UI/Container";
import View from "../UI/View";
import styled from "styled-components";
import Text from "../UI/Text";

const MainContainer = styled(View)`
  padding: 10px 0px;
  text-align: center;
  font-size: 12px;
  background-color: #f1f1f1;
`;

const Row = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <Row>
          <Text fontSize={12}>
            <a href="ToS">{`Terms of Service`}</a>
          </Text>
          <Text fontSize={12}> &nbsp; | &nbsp;</Text>
          <Text fontSize={12}>
            <a href="privacy-policy">{`Privacy Policy`}</a>
          </Text>
        </Row>
      </Container>
    </MainContainer>
  );
};

export default Footer;
