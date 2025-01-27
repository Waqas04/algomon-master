import Image from "next/image";
import Button from "../common/Button";
import TitleAndParagraph from "../common/TitleandParagraph";

const OrganicDistribution = () => {
  const maindata = [
    {
      id: 0,
      title: "Organic Campaign ",
      para: "Ask people to post your content on their social media accounts and pay for each post individually.",
      imgUrl: "/organic/organic-cam.svg",
    },
    {
      id: 1,
      title: "Scripted UGC Campaign ",
      para: "People will create content based on your script and then post it on their personal social media accounts. ",
      imgUrl: "/organic/stripped.svg",
    },
    {
      id: 2,
      title: "Raffle Campaign ",
      para: "Sponsor a raffle to increase your brand awareness among our users and",
      imgUrl: "/organic/raffle-camp.svg",
    },
    // {
    //   id: 3,
    //   title: "Raffle Campaign ",
    //   para: "Sponsor a raffle to increase your brand awareness among our users and",
    // },
  ];
  return (
    <div className="max-w-[1280px] w-full mx-auto mt-[187px] flex flex-col  items-center">
      <TitleAndParagraph
        title={"New Era Of Gaming"}
        extraClassestitle={"text-[36px]  leading-[46.5px] text-[36px] "}
        extraClassespara={"max-w-[900px] font-[400] leading-[30px]"}
        para={"Promote your ."}
      />
      <div className="w-full flex justify-between  flex-wrap">
        {maindata.map((items, id) => {
          return (
            <div className="max-w-[413px] w-full bg-[#EFF0FC] px-[32px] py-[40px] rounded-[20px]  flex flex-col gap-[30px] mt-[64px]">
              <img src={items.imgUrl} alt="" />

              <div className="max-w-[341px] w-full flex flex-col gap-[15px]">
                {/* title */}
                <div className="font-[700] text-[24px] leading-[31px] text-[#000000]">
                  {items.title}
                </div>
                {/* para */}
                <div className="text-[#4E4E4E] font-[400] text-[18px] ">
                  {items.para}
                </div>
              </div>
              <div className="w-full flex justify-center items-center">
                <Button
                  text={"Learn More"}
                  extraClasses={"rounded-[6px] leading-[28.8px]"}
                />
              </div>
            </div>
          );
        })}
        {/* social-network */}
        <div className="max-w-[846px] w-full bg-[#EFF0FC]  flex pl-[32px] pr-[48px] mt-[15px] rounded-[20px] pt-[43px] pb-[23px] ">
          {/* content */}
          <div className="max-w-[418px] w-full   rounded-[20px]  flex flex-col gap-[39px] mt-[100px] ">
            <div className="max-w-[418px] w-full  flex flex-col gap-[15px]">
              {/* title */}
              <div className="font-[700] text-[24px] leading-[31px] text-[#000000]">
                Social Networks
              </div>
              {/* para */}
              <div className="text-[#4E4E4E] font-[400] text-[18px] max-w-[418px] w-full leading-[28px] ">
                Create and launch organic social media campaigns across all
                major social networks. Tailored campaigns are available for each
                specific social media platform.
              </div>
            </div>
            <div className="w-full flex  items-center">
              <Button
                text={"Learn More"}
                extraClasses={"rounded-[6px] leading-[28.8px]"}
              />
            </div>
          </div>

          {/* img */}

          <img src="organic/social-network.svg" alt="" />
        </div>
        <div className="max-w-[413px] w-full bg-[#EFF0FC] px-[32px] py-[40px] rounded-[20px]  flex flex-col gap-[30px] mt-[15px]">
          <img src="organic/pay-per-cam.svg" alt="" />

          <div className="max-w-[341px] w-full flex flex-col gap-[15px]">
            {/* title */}
            <div className="font-[700] text-[24px] leading-[31px] text-[#000000]">
              Pay per Post
            </div>
            {/* para */}
            <div className="text-[#4E4E4E] font-[400] text-[18px] ">
              Pay for each post that users create with your content, directly
              from your campaign wallet.
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Button
              text={"Learn More"}
              extraClasses={"rounded-[6px] leading-[28.8px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicDistribution;
