import TitleAndParagraph from "../common/TitleandParagraph";
import AdvertiseCards from "../common/AdvertiseCards";

function EasyTounderstand({ cardmaindata }) {
  return (
    <div
      className={` w-full mx-auto max-w-[1290px]  mt-[103px] justify-between`}
    >
      <TitleAndParagraph
        title={"Easy to understand metrics"}
        para={
          "We offer several metrics to help you optimize your campaign more effectively. You can view in real time the posts made by users, as well as the audience and reach of your campaign."
        }
        extraClassespara={"max-w-[1000px]"}
      />
      <AdvertiseCards
        maindata={cardmaindata}
        extraClassesCards={"grid grid-cols-4"}
      />
    </div>
  );
}

export default EasyTounderstand;
