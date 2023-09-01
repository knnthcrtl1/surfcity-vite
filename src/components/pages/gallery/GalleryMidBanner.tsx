import styled from "styled-components";
import Container from "../../UI/Container";
import View from "../../UI/View";
import { appColors } from "../../../constants/colors";
import Text from "../../UI/Text";

const MainContainer = styled(View)`
  background-image: url(./pngs/gallery-bg.png);
  background-size: cover;
  background-position: center;
  min-height: 100vh;
padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 90px 0px;
`;

const InnerContainer = styled(View)`
  background-color: ${appColors.semiBlue};
`;

const Title = styled(Text)`
  font-size: 42px;
  line-height: 48px;
  text-align: center;
  color: ${appColors.white};
  font-family: Gotham;
  letter-spacing: 4px;
`;

const GalleryMidBanner = () => {
  return (
    <InnerContainer>
      <MainContainer>
        <Container>
          <Title>
            The right paint job <br /> for the right price
          </Title>
        </Container>
      </MainContainer>
    </InnerContainer>
  );
};

export default GalleryMidBanner;
