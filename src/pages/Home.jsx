import HereSection from "../components/HeroSection";
import MySkills from "./MySkills";
import AboutMe from "./About";
import MyPortfolio from "./MyPortfolio"
import ContactMe from "./Contact"
import Footer from "../components/Footer"
export default function Home(){
    return(
       <>
        <HereSection />
        <MySkills />
        <AboutMe />
        <MyPortfolio />
        <ContactMe />
        <Footer />
       </>
    );
};