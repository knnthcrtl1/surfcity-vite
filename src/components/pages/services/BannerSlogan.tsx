import View from "../../UI/View";
import styled from "styled-components";
import Box from "@mui/material/Box";

const Container = styled(View)`
  & h1 {
    color: #ffffff;
    @media screen and (max-width: 420px) and (min-width: 0px) {
      font-size: 32px;
      line-height: 38px;
    }
    @media screen and (max-width: 768px) and (min-width: 0px) {
      text-align: center;
    }
  }
`;

const BannerSlogan = () => {
  return (
    <Container>
      <h1>All your painting needs, in one click</h1>
    </Container>
  );
};

export default BannerSlogan;
