import { leftSideBar } from "@/constants";

import Link from "next/link"
import UploadImage from "../shared/UploadImage";

const LeftSidebar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <UploadImage src="icons/logo.svg" alt="logo" w={24} h={24} />
        </Link>
        <div className="flex flex-col">
          {leftSideBar.map((item) => (
            <Link
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
              key={item.id}
            >
              <UploadImage
                src={`icons/${item.icon}`}
                alt={item.name}
                w={24}
                h={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="bg-white text-black rounded-full font-bold size-12 flex items-center justify-center xxl:hidden "
        >
          <UploadImage src="icons/post.svg" alt="post" w={24} h={24} />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20 "
        >
          Post
        </Link>
      </div>
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2 ">
          <div className=" size-10 relative rounded-full overflow-hidden">
            <UploadImage
              src="general/avatar.png"
              alt="lama dev"
              w={100}
              h={100}
              tr
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Lama Dev</span>
            <span className="text-sm text-textGray">@lamadev</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
}
export default LeftSidebar