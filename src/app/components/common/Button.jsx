import Link from "next/link";
import { popins } from "../../layout";

const Button = ({ text, extraClasses, href }) => {
  return (
    <Link
      href={`${href}`}
      className={`text-[#fff] ${extraClasses} ${popins.className} bg-[#057DF3] rounded-[12px]   font-[600] text-[16px] max-w-[184px] w-full justify-center flex px-[18px] py-[10px]`}
    >
      {text}
    </Link>
  );
};

export default Button;
