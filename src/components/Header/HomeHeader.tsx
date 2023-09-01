import { styled } from "@mui/material";
import View from "../UI/View";
import Header from "./Header";
import Container from "../UI/Container";
import Box from "@mui/material/Box";
import { appColors } from "../../constants/colors";
import mobileKv from "../../assets/pngs/mobile-no-bg.png";
// import mobileKv from "../../assets/pngs/mobile-kv-btm.png";
import Image from "next/image";

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

const TitleRow = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: -40px;
`;

const DeskHead = styled(Box)`
  @media screen and (min-width: 0) {
    display: none;
  }
  @media screen and (min-width: 860px) {
    display: block;
  }
  @media screen and (max-width: 1060px) and (min-width: 860px) {
    display: block;
    & h1 {
      font-size: 72px;
      line-height: 78px;
    }
    & .MuiTypography-body1 {
      font-size: 16px;
      line-height: 24px;
      max-width: 540px;
    }
    & .MuiButtonBase-root {
      font-size: 16px;
      padding: 8px 25px;
    }
  }
`;

const MobileContainer = styled(Box)`
  @media screen and (min-width: 860px) {
    display: none;
  }
  @media screen and (max-width: 860px) and (min-width: 0px) {
    display: block;
  }
`;

const BottomDivider = styled(Box)`
  height: 107px;
  background-image: url("./pngs/kvdivider.png");
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`;

const MobileHead = styled(Box)`
  text-align: center;
  background-image: url(./pngs/about-mid-bg.png);
  background-size: cover;
  // height: 420px;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  & h1 {
    font-size: 50px;
    line-height: 58px;
    color: #ffffff;
  }
  & p {
    font-size: 15px;
    line-height: 21px;
    margin-top: 8px;
    color: #273c6c !important;
  }
  & button {
    font-size: 11px;
    line-height: 17px;
    padding: 8px 16px;
  }
`;

const MobileRow = styled(Box)`
  background-color: ${appColors.semiBlue};
`;

type HeaderBgProps = {
  bgcolor?: string;
  slogan: any;
  url?: string;
  size: string;
};

const HomeHeader = ({ bgColor, slogan, url, size, height }: HeaderBgProps) => {
  return (
    <>
      <MobileContainer>
        <MobileRow>
          <MobileHead>
            <Header />
            <TitleRow>
              <Container>{slogan}</Container>
            </TitleRow>
            <Image src={mobileKv} alt="mobile-kv" />
          </MobileHead>
        </MobileRow>
      </MobileContainer>
      <DeskHead>
        <MainContainer bgcolor={bgColor} url={url} size={size} height={height}>
          <Box pb={15}>
            <Header />
          </Box>
          <TitleRow>
            <Container>{slogan}</Container>
          </TitleRow>
        </MainContainer>
        <BottomDivider />
      </DeskHead>
    </>
  );
};

export default HomeHeader;
