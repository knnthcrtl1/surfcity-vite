import View from "../../UI/View";
import styled from "styled-components";
import BannerContent from "./BannerContent";

const Container = styled(View)`
  & h1 {
    color: #ffffff;
  }
`;

const BannerSlogan = () => {
  return (
    <Container>
      <BannerContent />
    </Container>
  );
};

export default BannerSlogan;
