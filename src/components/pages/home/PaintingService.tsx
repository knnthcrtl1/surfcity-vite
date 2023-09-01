import Container from "../../UI/Container.tsx";
import Text from "../../UI/Text";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import ServiceItem from "./ServiceItem";
import h1 from "../../../assets/pngs/h-icon1.png";
import h2 from "../../../assets/pngs/h-icon2.png";
import h3 from "../../../assets/pngs/h-icon3.png";
import h4 from "../../../assets/pngs/h-icon4.png";
import h5 from "../../../assets/pngs/h-icon5.png";
import h6 from "../../../assets/pngs/h-icon6.png";
import h7 from "../../../assets/pngs/h-icon7.png";
import h8 from "../../../assets/pngs/h-icon8.png";

const Title = styled(Text)`
  font-size: 42px;
  line-height: 48px;
  color: #20232c;
  text-align: center;
  font-family: Gotham !important;
  letter-spacing: 2.6px;
  font-weight: bold;
  @media screen and (max-width: 420px) and (min-width: 0px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const MainContainer = styled(Container)`
  padding: 50px 0px;
`;

const PaintingService = () => {
  return (
    <MainContainer>
      <Title px={2}>Exceptional Painting Services.</Title>
      <Grid container mt={4}>
        <Grid item md={6} sm={12}>
          <ServiceItem imgSource={h1} title="Home Repair Services" />
          <ServiceItem imgSource={h2} title="Interior Painting" />
          <ServiceItem imgSource={h3} title="Exterior Painting" />
          <ServiceItem imgSource={h4} title="Cosmetic Exterior Repair" />
        </Grid>
        <Grid item md={6} sm={12}>
          <ServiceItem imgSource={h5} title="Commercial Painting" />
          <ServiceItem imgSource={h6} title="Industrial Painting" />
          <ServiceItem imgSource={h7} title="HOA Painting" />
          <ServiceItem imgSource={h8} title="Drywall Repair" />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default PaintingService;
