import React from "react";
import styled from "styled-components";
import View from "../UI/View";
import Container from "../UI/Container";
import Grid from "@mui/material/Grid";
import { appColors } from "../../constants/colors";
import Text from "../UI/Text";
import Image from "next/image";
import talkPin from "../../assets/pngs/talk-pin.png";
import talkPhone from "../../assets/pngs/talk-phone.png";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import { validateEmail } from "../../utils/emailUtils";
import { useState } from "react";
import axios from "axios";
import { host_local } from "../../constants/env";
import Link from "next/link";

const MainContainer = styled(View)`
  // padding: 125px 0px;
  background-color: #20232c;
  min-height: 100vh;
  padding: 40px 0px;
  display: flex;
  align-items: center;
`;

const TalkTitle = styled(Text)`
  font-size: 52px;
  line-height: 58px;
  font-weight: bold;
  text-align: center;
  color: ${appColors.white};
`;

const FlexBox = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const IconText = styled(Text)`
  font-size: 22px;
  color: ${appColors.textLightBlue};
  line-height: 28px;
  padding-left: 16px;
  @media screen and (max-width: 768px) and (min-width: 0px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

const Button = styled(ButtonBase)`
  background: ${appColors.semiBlue};
  border-radius: 26px;
  padding: 16px 36px;
  // font-size: 28px;
  letter-spacing: 2px;
  font-family: Gotham;
  font-weight: bold;
  color: #ffffff;
`;

const GridCenter = styled(Grid)`
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  // align-items: center;
  flex-direction: column;
`;

const TalkText = styled(Text)`
  flex: 1;
`;

const TalkToUs = () => {
  const initState = {
    email: "",
    name: "",
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

    UseSendTalk();
  };

  const UseSendTalk = async () => {
    try {
      setLoading(true);
      let data = {
        name: state.name,
        email: state.email,
        address: state.message,
      };
      const response = await axios.post(
        `${host_local}/send-talk.php`,
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
        {/* <form onSubmit={handleClick}> */}
        <GridCenter>
          <TalkTitle>Talk to Us.</TalkTitle>
          <FlexBox>
            <Image src={talkPin} alt="map-pin" width={60} height={60} />
            <TalkText>
              <IconText>
                5904 WARNER AVE SUITE 116 HUNTINGTON BEACH, CA 92649
              </IconText>
            </TalkText>
          </FlexBox>
          <FlexBox>
            <Image src={talkPhone} alt="phone-icone" width={60} height={60} />
            <TalkText>
              <IconText>{`714-782-0196`}</IconText>
            </TalkText>
          </FlexBox>
          <View display="flex" justifyContent="center" mt={3}>
            <Button>
              <Link href="/contact-us">REQUEST FOR A QUOTE</Link>
            </Button>
          </View>
          {/* <Grid item sm={6}>
              {success ? (
                <IconText>Your message has been delivered</IconText>
              ) : (
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <TextInput
                      placeholder="Name"
                      required
                      onChange={(e) => handleChangeText("name", e)}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <TextInput
                      placeholder="Email"
                      required
                      onChange={(e) => handleChangeText("email", e)}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    <TextAreaV2
                      placeholder="Message"
                      required
                      onChange={(e) => handleChangeText("message", e)}
                    />
                  </Grid>
                  <Grid item sm={12}>
                    {loading ? (
                      <IconText>Loading...</IconText>
                    ) : (
                      <Button type="submit">SUBMIT</Button>
                    )}
                  </Grid>
                </Grid>
              )}
            </Grid> */}
        </GridCenter>
        {/* </form> */}
      </Container>
    </MainContainer>
  );
};

export default TalkToUs;
