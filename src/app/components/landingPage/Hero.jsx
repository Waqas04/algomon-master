import Image from "next/image";
import Swipper from "./Swipper";
import Button from "../common/Button";
import VideoButton from "../common/VideoButton";
import TitleAndParagraph from "../common/TitleandParagraph";

function Hero() {
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-[80px] flex flex-col  items-center h-screen">
      {/*Title- Organic Word-of-Mouth social media advertising campaigns */}
      <TitleAndParagraph
        title={"Algomon"}
        extraClassestitle={
          "text-[36px]  leading-[46.5px] text-[36px] max-w-[820px] "
        }
        extraClassespara={"max-w-[900px] font-[400] leading-[30px]"}
        extraClasses={"max-w-[921px] w-full mt-[0px]"}
        para={"Welcome To The New Era Of Gaming"}
      />
      {/* for Content Creator-video */}
      <div className="max-[1713px] w-full flex mt-[40px] z-30 flex-col items-start ml-[100px]">
        <Swipper />
      </div>
      <div className="w-full justify-center items-center flex flex-col"></div>

      <div></div>
    </div>
  );
}

export default Hero;
