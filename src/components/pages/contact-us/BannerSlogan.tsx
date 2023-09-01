import View from "../../UI/View";
import styled from "styled-components";
import { appColors } from "../../../constants/colors";

const Container = styled(View)`
  & h1 {
    color: #ffffff;
    text-align: left;
  }
  & span {
    color: ${appColors.yellow};
  }
`;

const BannerSlogan = () => {
  return (
    <Container>
      <h1>
        {`Let's put`}
        <br /> A little color
        <br /> In your world.
      </h1>
    </Container>
  );
};

export default BannerSlogan;
