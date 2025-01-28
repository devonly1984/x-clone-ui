import { Post } from "@/components/post";
import UploadImage from "@/components/shared/UploadImage";

const Comments = () => {
  return (
    <section>
      <article>
        <form action="" className="flex items-center justify-between gap-4 p-4">
          <div className="relative size-10 rounded-full overflow-hidden">
            <UploadImage src="general/avatar.png" alt="" w={100} h={100} tr />
          </div>
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent outline-none p-2 text-xl flex-1"
            placeholder="Post Your reply"
          />
          <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
            Reply
          </button>
        </form>
      </article>
      <Post />
      <Post />
      <Post />
      <Post />
    </section>
  );
};
export default Comments;
