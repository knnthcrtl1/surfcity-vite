import HeaderBackground from "../components/Header/HeaderBackground";
import Layout from "../components/Layout/Layout";
import { appColors } from "../constants/colors";
import BannerSlogan from "../components/pages/gallery/BannerSlogan";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import GalleryContent from "../components/pages/gallery/GalleryContent";

const Gallery = () => {
  return (
    <Layout>
      <HeaderBackground bgColor={appColors.primary} slogan={<BannerSlogan />} />
      <GalleryContent />
      <TalkToUs />
    </Layout>
  );
};

export default Gallery;
