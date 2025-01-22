import UploadImage from "../shared/UploadImage";
import PostInfo from "./PostInfo";

const Post = () => {
  return (
    <div className="p-4 border-borderGray border-y-[1px]">
      {/**Post Type */}
      <div className=" flex items-center text-sm text-textGray mb-2 font-bold  ">
        icon
        <span>Lama dev reposted</span>
      </div>
      {/**Post Content */}
      <div className="flex gap-4">
        {/**Avatar */}
        <div className="relative size-10 rounded-full overflow-hidden">
          <UploadImage
            src="general/avatar.png"
            alt="avatar"
            w={100}
            h={100}
            tr
          />
        </div>
        {/**Avatar end */}
        {/**Content Start */}

        <div className="flex-1 flex flex-col gap-2">
          {/**Top */}
          <div className="w-full flex justify-between">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-textGray font-bold">Lama Dev</h1>
              <span className="text-textGray">@lamadev</span>
              <span className="text-textGray">X days ago</span>
            </div>
            <PostInfo />
          </div>
          {/**Text and media */}
          <p>
            Sunt laborum in nulla aute. Culpa sunt et magna voluptate quis
            voluptate. Excepteur eu in eu ut sit mollit mollit aute. Do quis
            irure ad consequat ut laborum aute voluptate reprehenderit commodo
            non cillum exercitation nulla. Sunt qui magna Lorem adipisicing sit
            voluptate dolore exercitation anim pariatur tempor irure ex. Magna
            irure nostrud voluptate qui officia laboris occaecat esse
            exercitation. Nostrud fugiat tempor esse sunt eiusmod reprehenderit
            elit sint consectetur ut aliquip.
          </p>
          <UploadImage src="general/post.jpeg" alt="" w={600} h={600} />
        </div>
      </div>
    </div>
  );
}
export default Post