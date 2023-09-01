import Box from "@mui/material/Box";
import styled from "styled-components";

const MobileContainer = styled(Box)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default MobileContainer;
