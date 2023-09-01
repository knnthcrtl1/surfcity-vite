import HeaderBackground from "../components/Header/HeaderBackground";
import Layout from "../components/Layout/Layout";
import BannerSlogan from "../components/pages/services/BannerSlogan";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import ServiceContent from "../components/pages/services/ServiceContent";
import Box from "@mui/material/Box";

const Services = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <HeaderBackground url="" bgColor="#1C374E" slogan={<BannerSlogan />} />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <HeaderBackground url="" bgColor="#1C374E" slogan={<BannerSlogan />} />
      </Box>
      <ServiceContent />
      <TalkToUs />
    </Layout>
  );
};

export default Services;
