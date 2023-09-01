import styled from "styled-components";
import View from "../../UI/View";
import Text from "../../UI/Text";
import Grid from "@mui/material/Grid";
import TimeItem from "./TimeItem";
import { useCallback, useState } from "react";

const timeList = [
  {
    id: "0",
    title: "10:00 AM",
    start: "02:00:00-00:00",
    end: "03:00:00-00:00",
  },
  {
    id: "1",
    title: "11:00 AM",
    start: "03:00:00-00:00",
    end: "04:00:00-00:00",
  },
  {
    id: "3",
    title: "12:00 AM",
    start: "04:00:00-00:00",
    end: "05:00:00-00:00",
  },
  {
    id: "4",
    title: "1:00 PM",
    start: "05:00:00-00:00",
    end: "06:00:00-00:00",
  },
  {
    id: "5",
    title: "2:00 PM",
    start: "06:00:00-00:00",
    end: "07:00:00-00:00",
  },
  {
    id: "6",
    title: "3:00 PM",
    start: "07:00:00-00:00",
    end: "08:00:00-00:00",
  },
  {
    id: "7",
    title: "4:00 PM",
    start: "08:00:00-00:00",
    end: "09:00:00-00:00",
  },
  {
    id: "8",
    title: "5:00 PM",
    start: "09:00:00-00:00",
    end: "10:00:00-00:00",
  },
  {
    id: "9",
    title: "6:00 PM",
    start: "10:00:00-00:00",
    end: "11:00:00-00:00",
  },
  {
    id: "10",
    title: "7:00 PM",
    start: "11:00:00-00:00",
    end: "12:00:00-00:00",
  },
  {
    id: "11",
    title: "8:00 PM",
    start: "12:00:00-00:00",
    end: "13:00:00-00:00",
  },
];

const Container = styled(View)`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 32px;

  @media screen and (max-width: 480px) and (min-width: 0px) {
    & .MuiGrid-item {
      width: 100%;
    }
  }
`;

const Title = styled(Text)`
  // text-transform: uppercase;
  font-size: 38px;
  line-height: 44px;
`;

const GridRow = styled(Grid)`
  // @media screen and (max-width: 860px) and (min-width: 0px) {
  // }
`;

const TimeSlot = ({ setActiveTime, setEndTime }) => {
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleItem = (item: any) => {
    // handleTimeSlot(item.value);
    setActiveTime(item?.start);
    setEndTime(item?.end);
    setSelectedItem(item?.id);
  };

  return (
    <Container>
      <Title>Time Slot</Title>
      <Grid container spacing={2} mt={1}>
        {timeList.map((item) => (
          <GridRow item md={6} key={item?.id}>
            <TimeItem
              item={item}
              handleItem={handleItem}
              selectedItem={selectedItem}
            />
          </GridRow>
        ))}
      </Grid>
    </Container>
  );
};

export default TimeSlot;
