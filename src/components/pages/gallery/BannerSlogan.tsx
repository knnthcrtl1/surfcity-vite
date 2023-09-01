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
`;

const BannerSlogan = () => {
  return (
    <Container>
      <h1>
        From buckets <br /> to brushes, <br />
        we’re the painters
        <br /> you can trust.
      </h1>
    </Container>
  );
};

export default BannerSlogan;
