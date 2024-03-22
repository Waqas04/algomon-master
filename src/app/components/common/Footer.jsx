import Link from "next/link";
import { popins } from "../../layout";

function Footer({ extraclasses }) {
  const maindata = [
    {
      id: 0,
     
      titlepage2: " App",
      titlepage3: " Foundation",
      linktitlepage1: "/bussiness",
      

    },
    {
      id: 1,
      title: "Support",
      titlepage1: "Help center",
      titlepage2: "Contact us",
      titlepage3: "DMCA",
      linktitlepage1: "/help-center",
      linktitlepage2: "/contact-us",
      linktitlepage3: "/dmca",    },
    {
      id: 2,
      title: "Resources",
      titlepage1: "for Foundations",
      titlepage2: "for Advertisers",
      titlepage3: "for Content Creators",
      linktitlepage1: "/for-foundations",
      linktitlepage2: "/for-advertisers",
      linktitlepage3: "/for-content-creators",    },
    {
      id: 3,
      title: "Company",
      titlepage1: "About us",
      titlepage2: "Careers",
      linktitlepage1: "/about-us",
      linktitlepage2: "/careers",
    },
  ];
  return (
    <>
      <div
        className={`${extraclasses} w-full  flex justify-center  absolute mt-[255px] `}
      >
        <img src="footer/Ornament - circle.svg" alt="" />
      </div>
      <div className=" w-full  flex justify-between   bg-[#262F61]  mt-[467px]  z-10 relative">
        <div className="max-w-[1290px] w-full mx-auto flex justify-between pt-[57px] pb-[31px] flex-col gap-[82px] ">
          <div className="max-w-[1290px] w-full mx-auto flex justify-between  flex-col gap-[82px] ">
            <div className="max-w-[1290px] w-full flex justify-between  ">
          
              {/* products all */}
              <div className="max-w-[781px] w-full flex justify-between text-[#fff]  ">
                {maindata.map((items, id) => {
                  return (
                    <div
                      className={` ${popins.className}  max-w-[165px] w-full flex flex-col gap-[12px] `}
                    >
                      <div className="text-[20px] font-[600] ">
                        {items.title}
                      </div>
                      <div className="w-full flex flex-col gap-[2px] justify-center ">
                        <Link href={`${items.linktitlepage1}`} className="text-[16px] ">{items.titlepage1}</Link>
                        <Link href={`${items.linktitlepage2}`} className="text-[16px]  ">{items.titlepage2}</Link>
                        <Link href={`${items.linktitlepage3}`} className="text-[16px] ">{items.titlepage3}</Link>
                      </div>
                    </div>
                  ); 
                })}
              </div>
            </div>
            {/* © 2019 Verbyo LLC. All rights reserved. */}
            <div className="ma-w-[1290px] w-full flex flex-col gap-[23px] ">
              <div className="w-full border-[0.6px] bg-[#FFFFFF] "></div>
              <div className="w-full flex justify-between">
                <Link
                  href={"/"}
                  className={`${popins.className} text-[#FFFFFF] text-[16px] leading-[24px]`}
                >
                  © 2019 Algomon LLC. All rights reserved.
                </Link>

                <div className="max-w-[241px] w-full flex justify-between items-center ">
                  <Link
                    href={"/"}
                    className={`${popins.className} text-[#FFFFFF] text-[16px] leading-[24px]`}
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    href={"/"}
                    className={`${popins.className} text-[#FFFFFF] text-[16px] leading-[24px]`}
                  >
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
