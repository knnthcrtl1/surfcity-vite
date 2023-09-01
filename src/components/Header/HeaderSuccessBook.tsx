import { styled } from "@mui/material";
import View from "../UI/View";
import Header from "./Header";
import { appColors } from "../../constants/colors";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Text from "../UI/Text";
import paintBg from "../../assets/pngs/paint-bg.png";
import Image from "next/image";

const MainContainer = styled(View)`
  min-height: 100vh;
  // background-image: ${(props) => (props.url ? props.url : "none")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  flex-direction: column;
  background-color: #81c8e1;
`;

const TitleRow = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;

  & h1 {
    color: #ffffff;
    text-transform: uppercase;
    text-align: left;
    word-break: break-word;
  }

  @media only screen and (max-width: 1050px) {
    & h1 {
      font-size: 42px !important;
      line-height: 48px !important;
    }
  }
`;

type HeaderBgProps = {
  bgcolor?: string;
  slogan: any;
  url?: string;
  size: string;
};

const Row = styled(View)`
  background-color: ${appColors.semiBlue};
`;

const Descrtipion = styled(Text)`
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  letter-spacing: 1.2px;
  text-align: justify;
  margin-top: 8px;
`;

const HeaderSuccessBook = ({ bgColor, slogan, url, size }: HeaderBgProps) => {
  return (
    <Row>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <MainContainer size={size}>
          <Header />
          <Box px={2}>
            <Box textAlign="center !important" mb={3} color="#ffffff">
              <h1>Your Appointment is Confirmed!</h1>
            </Box>
            <Descrtipion textAlign="center !important">
              {`We'll snd you an email confirmation with the additional details`}{" "}
              needed. Thank you for choosing the right team for your paint
              project. With Surf City, you are in good hands.
            </Descrtipion>
            {/* <Container>{slogan}</Container> */}
          </Box>
          <Box textAlign="center">
            <Image src={paintBg} alt="success-image" />
          </Box>
        </MainContainer>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <MainContainer py={5}>
          <Header />
          <Grid container flex={1} display="flex">
            <Grid item sm={12} md={5}>
              <Box textAlign="center">
                <Image src={paintBg} alt="success-image" />
              </Box>
            </Grid>
            <TitleRow item sm={12} md={7}>
              <h1>
                Your Appointment
                <br /> is Confirmed!
              </h1>
              <Descrtipion>
                {`We'll snd you an email confirmation with the additional details`}
                <br />
                needed. Thank you for choosing the right team for your paint
                <br />
                project. With Surf City, you are in good hands.
              </Descrtipion>
              {/* <Container>{slogan}</Container> */}
            </TitleRow>
          </Grid>
        </MainContainer>
      </Box>
    </Row>
  );
};

export default HeaderSuccessBook;
