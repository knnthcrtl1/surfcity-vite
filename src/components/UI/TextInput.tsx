import Box from "@mui/material/Box";
import styled from "styled-components";

const Container = styled(Box)`
  & input {
    width: 100%;
    height: 52px;
    /* UI Properties */
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 10px #00000029;
    border-radius: 24px;
    // opacity: 1;
    padding: 16px;
    letter-spacing: 4px;
    border: 0px;
  }
`;

const TextInput = (props: any) => {
  return (
    <Container>
      <input type="text" {...props} />
    </Container>
  );
};

export default TextInput;
