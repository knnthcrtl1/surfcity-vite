import View from "../../UI/View";
import styled from "styled-components";
import { appColors } from "../../../constants/colors";

const Container = styled(View)`
  & h1 {
    color: #ffffff;
    text-align: center;
    text-shadow: 0px 2px 0px #333333;
    @media screen and (max-width: 1260px) and (min-width: 0px) {
      max-width: 910px;
      margin: 0 auto;
    }
  }
  & span {
    color: ${appColors.yellow};
  }
`;

const BookSlogan = () => {
  return (
    <Container py={4}>
      <h1>
        Bringing innovation <br />
        to the surface.
      </h1>
    </Container>
  );
};

export default BookSlogan;
