import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Blog from "../pages/blog/index";
import LandingPage from "./LandingPage/index";
import UseEffectPractice from "./UseEffectPractice/index";
import UseReducer from "./UseReducer";
import UseCallBack from "./useCallBack";
import UseRef from "./UseRef";
import APICosume from "./API";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
     <LandingPage /> 
     {/* <Blog />  */}
     {/* <UseStatePractice /> */}
     {/* <UseEffectPractice /> */}
     {/* <UseCallBack /> */}
     {/* <UseRef /> */}
     {/* <APICosume /> */}
     {/* <UseReducer /> */}
    </>
    
    // <div className="text-center">
      /* <h1>This is Practice page for React and NextJS</h1> */
      
    // </div>
  );
}
