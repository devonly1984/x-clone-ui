"use client"
import IconBar from "@/components/shared/IconBar";
import UploadImage from "@/components/shared/UploadImage";
import { useRouter } from "next/navigation";
const PostModal = () => {
    const router = useRouter();
    const closeModal = ()=>{
        router.back();
    }
  return (
    <main className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/**Top */}
        <section className="flex items-center justify-between">
          <article className="cursor-pointer " onClick={closeModal}>
            X
          </article>
          <article className="text-iconBlue font-bold">Drafts</article>
        </section>
        {/**Center */}
        <section className="py-8 flex gap-4">
          <article className="relative size-10 rounded-full overflow-hidden">
            <UploadImage src="general/avatar.png" alt="" w={100} h={100} tr />
          </article>
          <input
            type="text"
            placeholder="What's happening"
            className="flex-1 bg-transparent outline-none text-lg"
          />
        </section>
        {/**Bottom */}
        <section className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          <IconBar />
          <button className="py-2 px-5 text-black bg-white rounded-full font-bold">
            Post
          </button>
        </section>
      </div>
    </main>
  );
};
export default PostModal;