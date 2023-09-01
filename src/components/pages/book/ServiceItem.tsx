import styled from "styled-components";
import Box from "@mui/material/Box";
import Text from "../../UI/Text";
import { appColors } from "../../../constants/colors";
import CheckIcon from "@mui/icons-material/Check";

type ItemProp = {
  title: string;
  id: number;
};

type ServiceProp = {
  item: ItemProp;
  handleServiceItem: (e: number | string) => void;
  selectedItem: string;
};

const Container = styled(Box)`
  box-shadow: 0px 10px 10px #00000029;
  border-radius: 24px;
  min-height: 62px;
  background-color: ${(props) =>
    props?.isactive ? appColors.semiBlue2 : "#ffffff"};
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
`;

const Circle = styled(Box)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 4px solid ${appColors.semiBlue2};
`;

const ActiveCircle = styled(Box)`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
`;

const Title = styled(Text)`
  margin-left: 16px !important;
  font-size: 22px;
  color: ${(props) => (props?.isactive ? "#ffffff" : appColors.semiBlue2)};
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const ServiceItem = ({
  item,
  handleServiceItem,
  selectedItem,
}: ServiceProp) => {
  let isactive = selectedItem === item?.id ? 1 : 0;
  return (
    <Container isactive={isactive} onClick={() => handleServiceItem(item)}>
      {isactive ? (
        <ActiveCircle>
          <CheckIcon style={{ color: appColors.semiBlue2 }} />
        </ActiveCircle>
      ) : (
        <Circle />
      )}
      <Title isactive={isactive}>{item?.title}</Title>
    </Container>
  );
};

export default ServiceItem;
