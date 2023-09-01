import Box from "@mui/material/Box";
import styled from "styled-components";
import TextField from "@mui/material/TextField";

const TextFieldType = styled(TextField)`
  & .MuiInputBase-root {
    width: 100%;
    // height: 80px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 20px #00000029;
    border-radius: 56px;
    opacity: 1;
    padding: 32px 16px;
    font-size: 18px;
    letter-spacing: 4px;
  }
`;

const Container = styled(Box)``;

const TextArea = (props: any) => {
  return (
    <Container>
      <TextFieldType {...props} multiline rows={7} fullWidth />
    </Container>
  );
};

export default TextArea;
