import Layout from "../components/Layout/Layout";
import BannerSlogan from "../components/pages/home/BannerSlogan";
import HomeService from "../components/pages/home/HomeService";
import PaintService from "../components/pages/home/PaintingService";
import LearnMore from "../components/pages/home/LearnMore";
import WhyChoose from "../components/pages/home/WhyChoose";
import RequestQuote from "../components/pages/home/RequestQuote";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import Testimonials from "../components/pages/home/Testimonials";
import HomeHeader from "../components/Header/HomeHeader";

const Home = () => {
  return (
    <Layout>
      <HomeHeader
        url="url(./pngs/kvmain.png)"
        size="cover"
        slogan={<BannerSlogan />}
      />
      <HomeService />
      <PaintService />
      <LearnMore />
      <WhyChoose />
      <RequestQuote />
      <Testimonials />
      <TalkToUs />
    </Layout>
  );
};

export default Home;
