import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Text from "../../UI/Text";
import { appColors } from "../../../constants/colors";
import Image from "next/image";

const ServiceTitle = styled(Text)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    font-size: 19px;
    line-height: 25px;
  }
  font-size: 32px;
  line-height: 38px;
  color: ${appColors.semiBlue};
  text-transform: uppercase;
`;

const Circle = styled(Box)`
  width: 106px;
  height: 106px;
  background-color: #c0e5f3;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

type ItemProp = {
  title: string;
  imgSource: string | StaticImport;
};

const ServiceItem = ({ title, imgSource }: ItemProp) => {
  return (
    <Box
      container
      alignItems="center"
      mb={4}
      justifyContent="center"
      paddingX={4}
      spacing={4}
      display="flex"
    >
      <Box flex={3}>
        <Circle>
          <Image src={imgSource} alt="icon" />
        </Circle>
      </Box>
      <Box flex={9} ml={2}>
        <ServiceTitle>{title}</ServiceTitle>
      </Box>
    </Box>
  );
};

export default ServiceItem;
