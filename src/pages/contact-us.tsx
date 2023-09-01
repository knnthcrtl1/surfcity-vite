import Layout from "../components/Layout/Layout";
import HeaderBackground from "../components/Header/HeaderBackground";
import ContactTitle from "../components/pages/contact-us/ContactTItle";
import ContactForm from "../components/pages/contact-us/ContactForm";
import TalkToUs from "../components/TalkToUs/TalkToUs";
import BannerSlogan from "../components/pages/contact-us/BannerSlogan";
import BottomBanner from "../components/pages/contact-us/BottomBanner";

const ContactUs = () => {
  return (
    <Layout>
      <HeaderBackground
        url="url(./pngs/contact-kv.png)"
        slogan={<BannerSlogan />}
      />
      <ContactTitle />
      <ContactForm />
      <TalkToUs />
      <BottomBanner />
    </Layout>
  );
};

export default ContactUs;
