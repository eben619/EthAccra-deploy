import Head from "next/head";
import Hero from "@/components/2024/hero";
import HackathonCountdownSection from "@/components/2024/hackathon-countdown-section";
import MediaAndCommunityPartnersSection from "@/components/2024/media-and-community-section";
import AboutUsSection from "@/components/2024/about-us-section";
import HackathonSponsors from "@/components/2024/hackathon-images-and-sponsors/hackathon-sponsors";
import LastYearSpeakers from "@/components/2024/last-year-speakers";
import FaqSection from "@/components/2024/faq-section";
import FooterSection from "@/components/2024/footer-section";
import HackathonSlider from "@/components/2024/hackathon-slider";
import EthAccraVideo from "@/components/2024/eth-accra-video";
import HackathonImages from "@/components/2024/hackathon-images-and-sponsors/hackathon-images";

const EthAccra2024 = () => {
  return (
    <div>
      <Head>
        <title>Eth Accra</title>
        <link rel="canonical" href="https://eth-accra-website.vercel.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Overview - ETHAccra" />
        <meta
          property="og:description"
          content="ETHAccra AUGUST 2024 In view of the fact that ETHAccra 2024 will be held in Accra, we want to rally the community together and support developers in Accra and Africa. This year’s event comes off on the 29th through to 31st August, 2024, at ISSER Seminar Hall, University of Ghana, Legon. Days Hours Mins Secs […]"
        />
        <meta
          property="og:url"
          content="https://eth-accra-website.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://eth-accra-website.vercel.app/assets/pngs/meta_image.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://eth-accra-website.vercel.app/assets/pngs/meta_image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="">
        {/* hero contains navbar */}
        <Hero />
        <HackathonCountdownSection />
        <HackathonSponsors />
        <AboutUsSection />
        <EthAccraVideo />
        {/* <HackathonSlider /> */}
        <HackathonImages />
        <LastYearSpeakers />
        <MediaAndCommunityPartnersSection />
        <FaqSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default EthAccra2024;
