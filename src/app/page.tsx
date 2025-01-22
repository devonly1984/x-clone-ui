import Feed from "@/components/layout/Feed";
import Share from "@/components/shared/Share";
import Link from "next/link";


const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-between text-textGray font-bold border-b-[1px] border-borderGray pt-4 px-4">
        <Link
          href="/"
          className="pb-flex items-center border-b-4 border-iconBlue"
        >
          For You
        </Link>

        <Link href="/" className="pb-flex items-center">
          Following
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}

export default Homepage