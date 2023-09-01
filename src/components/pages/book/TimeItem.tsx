import styled from "styled-components";
import Box from "@mui/material/Box";
import Text from "../../UI/Text";
import { appColors } from "../../../constants/colors";

type ItemProp = {
  title: string;
  id: number;
};

type ServiceProp = {
  item: ItemProp;
  handleItem: (e: number | string) => void;
  selectedItem: string;
};

const Container = styled(Box)`
  border-radius: 24px;
  background-color: ${(props) =>
    props?.isactive ? appColors.semiBlue2 : "#ffffff"};
  cursor: pointer;
  border: 1px solid
    ${(props) => (props?.isactive ? appColors.semiBlue2 : "#DDDDDD")};
  padding: 8px;
`;

const Title = styled(Text)`
  font-size: 16px;
  color: ${(props) => (props?.isactive ? "#ffffff" : appColors.semiBlue2)};
  letter-spacing: 4px;
  text-align: center;
`;

const TimeItem = ({ item, handleItem, selectedItem }: ServiceProp) => {
  let isactive = selectedItem === item.id ? 1 : 0;
  return (
    <Container isactive={isactive} onClick={() => handleItem(item)}>
      <Title isactive={isactive}>{item?.title}</Title>
    </Container>
  );
};

export default TimeItem;
