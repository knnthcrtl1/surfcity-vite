import Box from "@mui/material/Box";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { appColors } from "../../constants/colors";

const TextFieldType = styled(TextField)`
  & .MuiInputBase-root {
    width: 100%;
    // height: 80px;
    /* UI Properties */
    background: ${appColors.white};
    border-radius: 24px;
    opacity: 1;
    // padding: 42px;
    padding: 22px 22px 22px 16px;
    font-size: 20px;
    letter-spacing: 4px;
  }
`;

const Container = styled(Box)``;

const TextArea = (props: any) => {
  return (
    <Container>
      <TextFieldType {...props} multiline rows={4} fullWidth />
    </Container>
  );
};

export default TextArea;
