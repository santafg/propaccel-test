import AboutSection from "@/components/AboutSection";
import ChoosePlan from "@/components/ChoosePlan";
import Footer from "@/components/Footer";
import LookingFor from "@/components/LookingFor";
import HomeNavbar from "@/components/Navbars/HomeNavbar";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import TopSection from "@/components/TopSection";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Prop Accel | Test</title>
      </Head>
      <div className="px-4 relative top-img-bg">
        <HomeNavbar />
        <TopSection />
        <div id="about">
          <AboutSection />
        </div>
        <div className="absolute -z-10 bottom-40 right-0">
          <img src="/images/mic.png" alt="" />
        </div>
      </div>
      <div id="pricing">
        <ChoosePlan />
      </div>
      <div id="review">
        <ReviewSection />
      </div>
      <div className="px-4 pt-6 bottom-img-bg">
        <LookingFor />
        <Footer />
      </div>
    </>
  );
}
