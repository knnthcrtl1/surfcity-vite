import { useState } from "react";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";
import Box from "@mui/material/Box";
import styled from "styled-components";
import leftArr from "../../../assets/pngs/left-image.png";
import rightArr from "../../../assets/pngs/right-arrow-image.png";

const ImageBox = styled(Box)`
  width: 100%;
  // height: 720px;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
    // height: 100%;
  }
`;

const LeftArrow = styled(Box)`
  width: 90px;
  height: 90px;
  position: absolute;
  left: 0px;
  top: 50%;
  cursor: pointer;
  z-index: 100;
`;

const RightArrow = styled(Box)`
  width: 90px;
  height: 90px;
  position: absolute;
  right: 0px;
  top: 50%;
  cursor: pointer;
  z-index: 100;
`;

const GalleryCarousel = ({
  imageItems,
  handleImageBox,
}: {
  imageItems: any[];
  handleImageBox: (e: any) => void;
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep >= imageItems.length - 1) return false;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep <= 0) return false;
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box position="relative">
      <LeftArrow onClick={handleBack}>
        <Image src={leftArr} alt="left-image" />
      </LeftArrow>
      <SwipeableViews
        enableMouseEvents
        onChangeIndex={handleStepChange}
        index={activeStep}
      >
        {imageItems.map((item) => (
          <ImageBox
            onMouseMove={(event) => event.stopPropagation()}
            // onClick={() => console.log("onClick")}
            key={item.img}
          >
            {/* <Image src={item.img} alt={item.title} layout='fill' /> */}
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
              onClick={() => handleImageBox(item)}
            />
          </ImageBox>
        ))}
      </SwipeableViews>
      <RightArrow onClick={handleNext}>
        <Image src={rightArr} alt="left-image" />
      </RightArrow>
    </Box>
  );
};

export default GalleryCarousel;
