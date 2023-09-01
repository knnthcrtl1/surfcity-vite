import * as React from "react";
import Box from "@mui/material/Box";

import Container from "../../UI/Container";
import GalleryCarousel from "./GalleryCarousel";
import {
  alanList,
  cabinetList,
  junkieList,
  speerList,
  stairList,
  troxelList,
  youngList,
} from "../../../constants/imageList";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 620,
  bgcolor: "background.paper",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // border: "2px solid #000",
  // boxShadow: 24,
  overflow: "scroll",
  p: 4,
};

const GalleryContent = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [activeImage, setActiveImg] = React.useState("");

  const handleImageBox = (img: any) => {
    setActiveImg(img);
    handleOpen();
  };

  return (
    <>
      <Container>
        <Box sx={{ width: "100%", typography: "body1", py: 6 }}>
          <GalleryCarousel
            imageItems={[
              ...alanList,
              ...cabinetList,
              ...junkieList,
              ...speerList,
              ...stairList,
              ...troxelList,
              ...youngList,
            ]}
            handleImageBox={handleImageBox}
          />
          {/* <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Alans" value="1" />
                <Tab label="Cabinet" value="2" />
                <Tab label="Junkies" value="3" />
                <Tab label="Speers" value="4" />
                <Tab label="Stairs" value="5" />
                <Tab label="Troxel" value="6" />
                <Tab label="Young" value="7" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <GalleryCarousel
                imageItems={[...alanList, ...cabinetList, ...junkieList]}
                handleImageBox={handleImageBox}
              />
            </TabPanel>
            <TabPanel value="2">
              <GalleryCarousel
                imageItems={cabinetList}
                handleImageBox={handleImageBox}
              />
            </TabPanel>
            <TabPanel value="3">
              <GalleryCarousel
                imageItems={junkieList}
                handleImageBox={handleImageBox}
              />
            </TabPanel>
            <TabPanel value="4">
              <GalleryCarousel
                imageItems={speerList}
                handleImageBox={handleImageBox}
              />
            </TabPanel>
            <TabPanel value="5">
              <GalleryCarousel
                imageItems={stairList}
                handleImageBox={handleImageBox}
              />
            </TabPanel>
            <TabPanel value="6">
              <GalleryCarousel
                imageItems={troxelList}
                handleImageBox={handleImageBox}
              />
            </TabPanel>
            <TabPanel value="7">
              <GalleryCarousel
                imageItems={youngList}
                handleImageBox={handleImageBox}
              />
            </TabPanel>
          </TabContext> */}
        </Box>
        {/* <Image src={galleryImg} alt="gallery-content" /> */}
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          pt: 2,
        }}
      >
        <Box sx={style}>
          {activeImage && (
            <img
              src={`${activeImage.img}?w=248&fit=crop&auto=format`}
              srcSet={`${activeImage.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={activeImage.title}
              loading="lazy"
              style={{
                width: "100%",
              }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default GalleryContent;
