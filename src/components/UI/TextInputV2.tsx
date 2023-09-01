import Box from "@mui/material/Box";
import styled from "styled-components";
import { appColors } from "../../constants/colors";

const Container = styled(Box)`
  & input {
    letter-spacing: 4px;
    width: 100%;
    height: 80px;
    background: ${appColors.white};
    border-radius: 24px;
    padding: 26px 42px;
    font-size: 20px;
    // font-family: "Quicksand";
  }
`;

const TextInputV2 = (props: any) => {
  return (
    <Container>
      <input type="text" {...props} />
    </Container>
  );
};

export default TextInputV2;
