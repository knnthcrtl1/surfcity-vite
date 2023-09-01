import React, { useState } from "react";
import styled from "styled-components";
import View from "../../UI/View";
import Container from "../../UI/Container";
import { appColors } from "../../../constants/colors";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import TextInput from "../../UI/TextInput";
import TextArea from "../../UI/TextArea";
import axios from "axios";
import { host_local } from "../../../constants/env";
import Text from "../../UI/Text";
import { validateEmail } from "../../../utils/emailUtils";

const Button = styled(ButtonBase)`
  background: ${appColors.semiBlue};
  box-shadow: 0px 20px 20px #00000029;
  border-radius: 91px;
  opacity: 1;
  // width: 242px;
  // height: 90px;
  padding: 16px 32px;
  margin-top: 50px;
  font-size: 22px;
  letter-spacing: 4px;
  font-family: Gotham;
`;

const MainContainer = styled(View)`
  background-color: ${appColors.lightBLue};
  padding: 50px 0px;
`;

const ContactForm = () => {
  const initState = {
    email: "",
    name: "",
    address: "",
    propertySize: "",
    propertyType: "",
    message: "",
  };

  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChangeText = (field, e) => {
    setState({
      ...state,
      [field]: e.target.value,
    });
  };

  const handleClick = (event: any) => {
    event.preventDefault();
    let email = validateEmail(state.email);

    if (!email) {
      alert("Please input a valid email address");
      return false;
    }

    UseSendContact();
  };

  const UseSendContact = async () => {
    try {
      setLoading(true);

      let data = {
        name: state.name,
        email: state.email,
        address: state.address,
        property_size: state.propertySize,
        property_type: state.propertyType,
        message: state.message,
      };

      const response = await axios.post(
        `${host_local}/send-quote.php`,
        JSON.stringify(data)
      );

      if (response.status === 200) {
        setSuccess(true);
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <Container>
        <form onSubmit={handleClick}>
          {success ? (
            <Text fontSize={32} textAlign="center">
              Your message has been delivered
            </Text>
          ) : (
            <Grid container spacing={4}>
              <Grid item sm={6} xs={12}>
                <TextInput
                  placeholder="NAME"
                  required
                  onChange={(e) => handleChangeText("name", e)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextInput
                  placeholder="EMAIL"
                  required
                  onChange={(e) => handleChangeText("email", e)}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <TextInput
                  placeholder="COMPLETE ADDRESS"
                  required
                  onChange={(e) => handleChangeText("address", e)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextInput
                  placeholder="PROPERTY SIZE"
                  required
                  onChange={(e) => handleChangeText("propertySize", e)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextInput
                  placeholder="PROPERTY TYPE"
                  required
                  onChange={(e) => handleChangeText("propertyType", e)}
                />
              </Grid>
              <Grid item sm={12} xs={12}>
                <TextArea
                  // placeholder="REQUIREMENTS AND ATTACHMENTS"
                  placeholder="MESSAGE"
                  required
                  onChange={(e) => handleChangeText("message", e)}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                {loading ? (
                  <Text>Loading...</Text>
                ) : (
                  <Button type="submit">SUBMIT</Button>
                )}
              </Grid>
            </Grid>
          )}
        </form>
      </Container>
    </MainContainer>
  );
};

export default ContactForm;
