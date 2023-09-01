import Box from "@mui/material/Box";
import styled from "styled-components";
import Text from "../../UI/Text";
import ButtonBase from "@mui/material/ButtonBase";
import { appColors } from "../../../constants/colors";
import View from "../../UI/View";
import { useRouter } from "next/router";

const Container = styled(Box)`
  border-radius: 40px;
  padding: 24px;
  display: flex;
  height: 240px;
  flex-direction: column;
  background-color: rgba(80, 176, 224, 0.9);
  @media screen and (max-width: 520px) and (min-width: 0px) {
    width: 240px;
  }
`;

const Title = styled(Text)`
  word-break: break-word;
  font-size: 28px;
  text-transform: uppercase;
  line-height: 34px;
  color: #ffffff;
`;

const Button = styled(ButtonBase)`
  width: 100%;
  // height: 26px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 30px;
  text-transform: uppercase;
  background-color: ${appColors.yellow2};
  display: flex;
  padding: 0px 8px;
  @media screen and (max-width: 768px) and (min-width: 0px) {
    font-size: 11px;
    padding: 8px 0px;
    line-height: 17px;
  }
  color: #49acdc;
`;

const ButtonRow = styled(View)`
  align-items: flex-end;
  display: flex;
  flex: 1;
`;

const OuterBox = styled(Box)`
  border-radius: 40px;
  background-image: ${(props: any) => props.bgimage || "none"};
  background-repeat: no-repeat;
  background-size: cover;
  margin: 16px;
  height: 240px;
  @media screen and (max-width: 520px) and (min-width: 0px) {
    width: 240px;
  }
`;

type ItemProp = {
  bgImage: string;
  title: string;
};

const ServiceItem = ({ bgImage, title }: ItemProp) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact-us");
  };

  return (
    <OuterBox bgimage={bgImage}>
      <Container>
        <Box flex={1} flexDirection="column" display="flex">
          <Title>{title}</Title>
          <ButtonRow>
            <Button onClick={handleNavigate}>Request for quote</Button>
          </ButtonRow>
        </Box>
      </Container>
    </OuterBox>
  );
};

export default ServiceItem;
