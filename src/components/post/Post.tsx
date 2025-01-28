
import { imagekit_Server } from "@/lib/utils";
import UploadImage from "../shared/UploadImage";
import { PostInfo, PostInteractions } from "@/components/post";
import UploadVideo from "../shared/UploadVideo";
import Link from "next/link";

const Post = async ({ type }: { type?: "status" | "comment" }) => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit_Server.getFileDetails(fileId, (error, result) => {
        if (error) reject(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };
  const fileDetails = await getFileDetails("678f16c20869cdf6ea9c3c87");

  return (
    <div className="p-4 border-borderGray border-y-[1px]">
      {/**Post Type */}
      <div className=" flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
        >
          <path
            fill="#71767b"
            d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
          />
        </svg>
        <span>Lama dev reposted</span>
      </div>
      {/**Post Content */}
      <div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
        {/**Avatar */}
        <div
          className={`relative size-10 rounded-full overflow-hidden ${type === "status" && "hidden"}`}
        >
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
          <div className={`w-full flex justify-between`}>
            <Link href={`/test`} className={`flex gap-4`}>
              <div
                className={`relative size-10 rounded-full overflow-hidden ${type === "status" && "hidden"}`}
              >
                <UploadImage
                  src="general/avatar.png"
                  alt="avatar"
                  w={100}
                  h={100}
                  tr
                />
              </div>
              <div
                className={`flex items-center gap-2 flex-wrap ${type === "status" && "flex-col gap-0 !items-start"}`}
              >
                <h1 className="tex-md font-bold">Lama Dev</h1>
                <span
                  className={`text-textGray ${type === "status" && "text-sm"}`}
                >
                  @lamadev
                </span>
                {type !== "status" && (
                  <span className="text-textGray">X days ago</span>
                )}
              </div>
            </Link>

            <PostInfo />
          </div>

          {/**Text and media */}
          <Link href={`/text/status/123`}>
            <p className={`${type === "status" && "text-lg"}`}>
              Sunt laborum in nulla aute. Culpa sunt et magna voluptate quis
              voluptate. Excepteur eu in eu ut sit mollit mollit aute. Do quis
              irure ad consequat ut laborum aute voluptate reprehenderit commodo
              non cillum exercitation nulla. Sunt qui magna Lorem adipisicing
              sit voluptate dolore exercitation anim pariatur tempor irure ex.
              Magna irure nostrud voluptate qui officia laboris occaecat esse
              exercitation. Nostrud fugiat tempor esse sunt eiusmod
              reprehenderit elit sint consectetur ut aliquip.
            </p>
          </Link>
          {/*<UploadImage src="general/post.jpeg" alt="" w={600} h={600} />*/}
          {fileDetails && fileDetails.fileType === "image" ? (
            <UploadImage
              src={fileDetails.filePath}
              alt=""
              w={fileDetails.width}
              h={fileDetails.height}
              className={fileDetails.customMetaData?.sensitive ? "blur-lg" : ""}
            />
          ) : (
            <UploadVideo
              path={fileDetails.filePath}
              className={fileDetails.customMetaData?.sensitive ? "blur-lg" : ""}
            />
          )}
          {type === "status" && <span className="text-textGray">Date</span>}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
};
export default Post