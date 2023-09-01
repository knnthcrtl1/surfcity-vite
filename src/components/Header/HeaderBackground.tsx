import { styled } from "@mui/material";
import View from "../UI/View";
import Header from "./Header";
import Container from "../UI/Container";
import Box from "@mui/material/Box";

const MainContainer = styled(View)`
  background-image: ${(props) => (props.url ? props.url : "none")};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "none")};
  background-size: ${(props) => (props.size ? props.size : "100% 100%")};
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  min-height: ${(props) => (props.height ? props.height : "100vh")};
`;

const MobileMain = styled(View)`
  background-image: ${(props) => (props.url ? props.url : "none")};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "none")};
  background-position: center;
  background-size: cover;
  display: flex;
  min-height: 534px;
  width: 100%;
  flex-direction: column;
`;

const TitleRow = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: -40px;
`;

type HeaderBgProps = {
  bgcolor?: string;
  slogan: any;
  url?: string;
  size: string;
};

const HeaderBackground = ({
  bgColor,
  slogan,
  url,
  size,
  height,
}: HeaderBgProps) => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <MobileMain bgcolor={bgColor} url={url} size={size}>
          <Header />
          <TitleRow>
            <Container>{slogan}</Container>
          </TitleRow>
        </MobileMain>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <MainContainer bgcolor={bgColor} url={url} size={size} height={height}>
          <Header />
          <TitleRow>
            <Container>{slogan}</Container>
          </TitleRow>
        </MainContainer>
      </Box>
    </>
  );
};

export default HeaderBackground;
