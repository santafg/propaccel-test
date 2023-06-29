import AboutSection from "@/components/AboutSection";
import ChoosePlan from "@/components/ChoosePlan";
import Footer from "@/components/Footer";
import LookingFor from "@/components/LookingFor";
import HomeNavbar from "@/components/Navbars/HomeNavbar";
import ReviewSection from "@/components/ReviewSection/ReviewSection";
import TopSection from "@/components/TopSection";
export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + `/images/top-img.png` + ")",
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="px-4"
      >
        <HomeNavbar />
        <TopSection />
        <div id="about">
          <AboutSection />
        </div>
      </div>
      <div id="pricing">
        <ChoosePlan />
      </div>
      <ReviewSection />
      <div
        style={{
          backgroundImage: "url(" + `/images/bottom-img.png` + ")",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          height: "100%",
        }}
        className="px-4 pt-6"
      >
        <LookingFor />
        <Footer />
      </div>
    </>
  );
}
