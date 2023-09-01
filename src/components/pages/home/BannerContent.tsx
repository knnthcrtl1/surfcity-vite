import View from "../../UI/View";
import styled from "styled-components";
import Text from "../../UI/Text";
import { appColors } from "../../../constants/colors";
import ButtonBase from "@mui/material/ButtonBase";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";

const BannerDesc = styled(Text)`
  font-size: 28px;
  line-height: 34px;
  color: ${appColors.mediumBlue};
  max-width: 726px;
  letter-spacing: 1.6px;
`;

const Button = styled(ButtonBase)`
  color: ${appColors.yellow};
  padding: 16px 50px;
  border-radius: 56px;
  background-color: ${appColors.darkBlue2};
  box-shadow: 0px 20px 20px #00000029;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 1.6px;
  margin-top: 16px;
`;

const Contain = styled(Box)`
  & h1 {
    font-weight: bold;
  }
`;

const BannerContent = () => {
  const router = useRouter();

  const handleContact = () => {
    router.push("/contact-us");
  };

  return (
    <Contain mt={4}>
      <h1>
        Look at <br /> That Finish.
      </h1>
      <View>
        <BannerDesc>
          Surf City Home Repair Service is a painting and exterior home repair
          service focused on bringing the best repair and painting services to
          its homeowner and commercial clients.
        </BannerDesc>
      </View>
      <View pb={3}>
        <Button onClick={handleContact}>GET A FREE CONSULTATION</Button>
      </View>
    </Contain>
  );
};

export default BannerContent;
