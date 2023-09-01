import HeaderBackground from "../components/Header/HeaderBackground";
import Layout from "../components/Layout/Layout";
import BannerSlogan from "../components/pages/about/BannerSlogan";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import Story from "../components/pages/about/Story";
import Mission from "../components/pages/about/Mission";
import OurTeam from "../components/pages/about/OurTeam.tsx";

const About = () => {
  return (
    <Layout>
      <HeaderBackground
        url="url(./pngs/about-bg.png)"
        slogan={<BannerSlogan />}
      />
      <Story />
      <Mission />
      <OurTeam />
      {/* <AboutMidBanner /> */}
      <TalkToUs />
    </Layout>
  );
};

export default About;
