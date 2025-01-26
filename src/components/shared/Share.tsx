"use client"
import { ChangeEvent, useState } from "react";
import UploadImage from "./UploadImage";
import { shareAction } from "@/actions/upload.actions";
import Image from 'next/image'
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<ImageSettings>({
    type: "original",
    sensitive: false,
  });
  const handleMediaChange = (e: ChangeEvent<HTMLInputElement>)=>{
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0])
    }
  }
  const previewUrl = media ? URL.createObjectURL(media) : null;

  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => shareAction(formData, settings)}
    >
      {/**Avatar */}
      <div className="relative size-10 rounded-full overflow-hidden">
        <UploadImage src="general/avatar.png" alt="avatar" w={100} h={100} tr />
      </div>
      {/*Others*/}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          placeholder="What is happening"
          className="bg-transparent outline-none placeholder:text-textGray text-lg"
          name="desc"
        />
        {media?.type.includes("image") && previewUrl && (
          <div className="rounded-xl overflow-hidden relative">
            <Image
              src={previewUrl}
              alt="preview Image"
              width={600}
              height={600}
              className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`}
            />
            <div
              className="absolute left-2 top-2 bg-black bg-opacity-50 text-white py-1  px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white size-8 flex items-center justify-center rounded-full cursor-pointer text-sm font-bold"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewUrl && (
          <div className="relative">
            <video src={previewUrl} controls />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white size-8 flex items-center justify-center rounded-full cursor-pointer text-sm font-bold"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewUrl && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewUrl={previewUrl}
            settings={settings}
            setSettings={setSettings}
          />
        )}

        {/**Icons */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex  gap-4 flex-wrap">
            <input
              name="file"
              type="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <UploadImage
                src="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <UploadImage
              src="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <UploadImage
              src="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <UploadImage
              src="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <UploadImage
              src="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <UploadImage
              src="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
        {/**Icons End */}
      </div>
    </form>
  );
};
export default Share;