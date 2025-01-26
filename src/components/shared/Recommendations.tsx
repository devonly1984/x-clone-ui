import Link from "next/link";
import UserCard from "../card/UserCard";

const Recommendations = () => {
  return (
    <div className="rounded-2xl.p-4 border-1 border-borderGray flex flex-col gap-4">
      {/**User Card */}
      <UserCard />
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};
export default Recommendations;