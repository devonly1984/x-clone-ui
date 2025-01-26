import UploadImage from "@/components/shared/UploadImage";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div>
      {/**Title */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#000000] ">
        <Link href="/">
          <UploadImage src="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Lama Dev</h1>
      </div>
      <UploadImage src="general/cover.jpg" alt="cover" w={600} h={600} />
      <UploadImage src="general/cover.jpg" alt="cover" w={600} h={600} />
      <UploadImage src="general/cover.jpg" alt="cover" w={600} h={600} />
    </div>
  );
};
export default UserProfile;
