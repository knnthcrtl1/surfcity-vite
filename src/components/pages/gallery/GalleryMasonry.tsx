import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styled from "styled-components";

const ImageItem = styled(ImageListItem)`
  cursor: pointer;
`;

const GalleryMasonry = ({
  imageItems,
  handleImageBox,
}: {
  imageItems: any[];
  handleImageBox: (e: any) => void;
}) => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {imageItems.map((item) => (
        <ImageItem key={item.img} onClick={() => handleImageBox(item)}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageItem>
      ))}
    </ImageList>
  );
};

export default GalleryMasonry;
