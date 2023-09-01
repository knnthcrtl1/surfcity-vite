import View from "../../UI/View";
import styled from "styled-components";
import Box from "@mui/material/Box";

const Container = styled(View)`
  & h1 {
    color: #ffffff;
    @media screen and (max-width: 768px) and (min-width: 0px) {
      text-align: center;
    }
  }
  & span {
    color: #ffd811;
  }
`;

const BannerSlogan = () => {
  return (
    <Container py={8}>
      <h1>Bringing innovation to the surface.</h1>
    </Container>
  );
};

export default BannerSlogan;
