import { styled } from "@mui/material";
import View from "../UI/View";
import Header from "./Header";
import Container from "../UI/Container";
import { appColors } from "../../constants/colors";
// import Box from "@mui/material/Box";

const MainContainer = styled(View)`
  background-image: ${(props) => (props.url ? props.url : "none")};
  background-size: ${(props) => (props.size ? props.size : "contain")};
  @media screen and (max-width: 768px) and (min-width: 0px) {
    background-image: url(pngs/cloud-bg2.png);
  }
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${appColors.semiBlue};
  display: flex;
  flex-direction: column;
  min-height: 534px;
`;

const TitleRow = styled(View)`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: -40px;
  // padding-left: 207px;
`;

type HeaderBgProps = {
  bgcolor?: string;
  slogan: any;
  url?: string;
  size: string;
};

const HeaderBook = ({ bgColor, slogan, url, size }: HeaderBgProps) => {
  return (
    <>
      <MainContainer bgcolor={bgColor} url={url} size={size}>
        <Header />
        <TitleRow>
          <Container>{slogan}</Container>
        </TitleRow>
      </MainContainer>
    </>
  );
};

export default HeaderBook;
