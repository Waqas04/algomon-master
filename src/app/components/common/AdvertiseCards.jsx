import { popins } from "@/app/layout";

function AdvertiseCards({ extraClassesCards, maindata, singleExtraClass }) {
  return (
    <div
      className={` ${extraClassesCards} max-w-[1290px] w-full  mt-[41px] gap-x-[30px] gap-y-[21px] `}
    >
      {maindata.map((items, id) => {
        return (
          <div
            className={`${singleExtraClass} max-w-[300px] w-full bg-[#EFF0FC]  flex justify-center items-center flex-col pt-[48px] pl-[46px] pr-[33px] pb-[72px] rounded-[12px] gap-[30px]`}
          >
            <div className=" w-full justify-center items-center flex  ">
              <img src={items.imgUrl} />
            </div>
            <div
              className={` ${popins.className} font-[600] text-[#1C1934] text-[20px] leading-[30px] max-w-[221px] w-full flex justify-center items-center `}
            >
              {" "}
              {items.title}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AdvertiseCards;
