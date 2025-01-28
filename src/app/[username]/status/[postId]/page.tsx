import Comments from "@/components/shared/Comments";
import { Post } from "@/components/post/";
import UploadImage from "@/components/shared/UploadImage";
import Link from "next/link";

const StatusPage = () => {
  return (
    <section className="">
      <article className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <UploadImage src="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </article>
      <Post type="status" />
      <Comments />
    </section>
  );
};
export default StatusPage;
