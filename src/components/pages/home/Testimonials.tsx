import React from "react";
import Container from "../../UI/Container";
import Text from "../../UI/Text";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { appColors } from "../../../constants/colors";
import Grid from "@mui/material/Grid";
import cRight from "../../../assets/pngs/chev-right.png";
import cLeft from "../../../assets/pngs/chev-left.png";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";

const Title = styled(Text)`
  font-size: 42px;
  line-height: 48px;
  text-align: center;
  font-weight: bold;
  font-family: Gotham !important;
  color: ${appColors.darkBlue};
`;

const MainContainer = styled(Container)`
  min-height: 100vh;
  padding: 40px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TestTitle = styled(Text)`
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: ${appColors.blueGreen};
`;

const TestAuthor = styled(Text)`
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  color: ${appColors.blueGreen};
  margin-top: 16px;
`;

const ChevronRow = styled(Box)`
  @media screen and (max-width: 860px) and (min-width: 0px) {
    width: 48px;
    height: 48px;
  }
  width: 68px;
  height: 68px;
  background-color: ${appColors.semiBlue};
  display: flex;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
`;

const GridChevron = styled(Grid)`
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
`;

const Testimonials = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep >= 1) return false;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep <= 0) return false;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    console.log(step);
    setActiveStep(step);
  };

  return (
    <MainContainer>
      <Title>Testimonials</Title>
      {/* <TitleRow></TitleRow> */}
      <Grid container mt={4} alignItems="center">
        <GridChevron item sm={2} xs={2}>
          <ChevronRow onClick={handleBack}>
            <Box pr={1.5}>
              <Image src={cLeft} alt="chevron" width={13} height={34} />
            </Box>
          </ChevronRow>
        </GridChevron>
        <Grid item sm={8} xs={8}>
          <SwipeableViews
            enableMouseEvents
            onChangeIndex={handleStepChange}
            index={activeStep}
          >
            <Box>
              <TestTitle>
                They are such a unique, upbeat crew. It is obvious they care
                about special requests from their customers and will go out of
                their way to accomplish the request. I always strongly recommend
                this business.
              </TestTitle>
              <TestAuthor>
                Sally J. <br />
                Watsonville, CA
              </TestAuthor>
            </Box>
            <Box>
              <TestTitle>
                They are such a unique, upbeat crew. It is obvious they care
                about special requests from their customers and will go out of
                their way to accomplish the request. I always strongly recommend
                this business.
              </TestTitle>
              <TestAuthor>
                Sally J. <br />
                Watsonville, CA
              </TestAuthor>
            </Box>
          </SwipeableViews>
        </Grid>
        <GridChevron item sm={2} xs={2}>
          <ChevronRow onClick={handleNext}>
            <Box pl={1.2}>
              <Image src={cRight} alt="chevron" width={13} height={34} />
            </Box>
          </ChevronRow>
        </GridChevron>
      </Grid>
    </MainContainer>
  );
};

export default Testimonials;
