import Box from "@mui/material/Box";
import styled from "styled-components";

const DesktopContainer = styled(Box)`
  @media screen and (max-width: 768px) and (min-width: 0px) {
    display: none;
  }
`;

export default DesktopContainer;
