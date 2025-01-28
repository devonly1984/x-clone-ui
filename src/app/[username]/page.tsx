import Feed from "@/components/layout/Feed";
import UploadImage from "@/components/shared/UploadImage";
import Link from "next/link";

const UserProfile = () => {
  return (
    <div>
      {/**Title */}
      <section className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#000000] ">
        <Link href="/">
          <UploadImage src="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Lama Dev</h1>
      </section>
      {/**Info */}
      <section className="">
        {/**Cover and avatar */}
        <article className="relative w-full">
          <div className="w-full aspect-[3/1] relative">
            <UploadImage src="general/cover.jpg" alt="" w={600} h={200} tr />
          </div>
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 bg-gray-300 absolute border-black  left-4 -translate-y-1/2">
            <UploadImage src="general/avatar.png" alt="" w={100} h={100} tr />
          </div>
        </article>
      </section>
      <section>
        <article className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <UploadImage src="icons/more.svg" alt="" w={20} h={20} />
          </div>
          <div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <UploadImage src="icons/explore.svg" alt="" w={20} h={20} />
          </div>
          <div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <UploadImage src="icons/message.svg" alt="" w={20} h={20} />
          </div>
          <button className="py-2 px-4 bg-white text-black font-bold rounded-full"></button>
        </article>
      </section>
      {/**User Details */}
      <section className="p-4 flex flex-col gap-2">
        {/**username & handle */}
        <article className="">
          <h1 className="text-2xl font-bold">Labal Dev</h1>
          <span className="text-textGray text-sm">@lamadev</span>
        </article>
        <p className="">LamaDev YouTube</p>
      </section>
      {/**Job & location & date */}
      <section className="flex gap-4 text-textGray text-[15px]">
        <article className="flex items-center gap-2">
          <UploadImage src="icons/userLocation.svg" alt="" w={20} h={20} />
          <span>USA</span>
        </article>
        <article className="flex items-center gap-2">
          <UploadImage src="icons/date.svg" alt="" w={20} h={20} />
          <span>Date</span>
        </article>
        <article className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">100</span>
            <span className="text-textGray text-[15px]">Followers</span>
          </div>
        </article>
        <article className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold">100</span>
            <span className="text-textGray text-[15px]">Followings</span>
          </div>
        </article>
      </section>
      <section>
        <Feed />
      </section>
    </div>
  );
};
export default UserProfile;
