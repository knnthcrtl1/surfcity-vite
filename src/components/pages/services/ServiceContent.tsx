import Container from "../../UI/Container";
import styled from "styled-components";
import View from "../../UI/View";
import { appColors } from "../../../constants/colors";
import Grid from "@mui/material/Grid";
import ServiceItem from "./ServiceItem";
import Text from "../../UI/Text";
import Box from "@mui/material/Box";

const MainContainer = styled(View)`
  padding: 50px 0px;
`;

const Title = styled(Text)`
  font-size: 39px;
  line-height: 45px;
  color: ${appColors.primary};
  font-family: Gotham;
  @media screen and (max-width: 768px) and (min-width: 0px) {
    text-align: center;
  }
  @media screen and (max-width: 768px) and (min-width: 0px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

const GridRow = styled(Grid)`
  & > .MuiGrid-root {
    @media screen and (max-width: 960px) and (min-width: 768px) {
      flex-basis: 33.33% !important;
      max-width: 33.33% !important;
    }
    @media screen and (max-width: 520px) and (min-width: 0px) {
      flex-basis: 100% !important;
      max-width: 100% !important;
      display: flex;
      justify-content: center;
    }
  }
`;

const ServiceContent = () => {
  return (
    <MainContainer>
      <Container>
        <Title>Never tackle any painting project alone.</Title>
        <GridRow container mt={2} display="flex" justifyContent="center">
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem
              title="Home Repair Service"
              bgImage="url(./pngs/home-repair-service.png)"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem
              title="Interior Painting"
              bgImage="url(./pngs/interior.png)"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem
              title="Exterior Painting"
              bgImage="url(./pngs/exterior-painting.png)"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem
              title="COSMETIC EXTERIOR REPAIR"
              bgImage="url(./pngs/cosmetic-exterior-repair.png)"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem
              title="Commercial Painting"
              bgImage="url(./pngs/commercial.png)"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem
              title="Industrial Painting"
              bgImage="url(./pngs/industrial.png)"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem
              title="Hoa Painting"
              bgImage="url(./pngs/hoa-repair.png)"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ServiceItem title="Dry Wall" bgImage="url(./pngs/drywall.png)" />
          </Grid>
        </GridRow>
      </Container>
    </MainContainer>
  );
};

export default ServiceContent;
