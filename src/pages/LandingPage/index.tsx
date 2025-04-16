
import Footer from "../Footer";
import HeroSection from "../Hero/index";
import Navbar from "../Navbar/index";
import SpecialCategoryDisplay from "../SpecialCategory";
import SubNavbar from "../SubNavbar/index";
// export default function LandingPage(){
//     return <div>
//             <h1>This is a simple landing page</h1>
//            </div>
// }


//This is JSX way
// Jsx will translates into React.createElement


const LandingPage = () => {
    return <div>
        <Navbar />
        <SubNavbar />
        <HeroSection />
        <SpecialCategoryDisplay title="Trending" bgColor = "bg-zinc-500"/>
        <SpecialCategoryDisplay title="Recommended Movies" bgColor = "bg-slate-800"/>
        <Footer />
    </div>
};


export default LandingPage;