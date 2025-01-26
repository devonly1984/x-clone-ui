import Link from "next/link"
import PopularTags from "../shared/PopularTags"
import Recommendations from "../shared/Recommendations"
import Search from "../shared/Search"

const RightSidebar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>&copy; 2025 Test</span>
      </div>
    </div>
  );
}
export default RightSidebar