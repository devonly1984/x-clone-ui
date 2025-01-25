"use client"
import { ImageOptions } from "@/constants";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  onClose: () => void;
  previewUrl: string;
  settings: ImageSettings;
  setSettings: Dispatch<SetStateAction<ImageSettings>>;
}
const ImageEditor = ({ onClose, previewUrl, settings, setSettings }: Props) => {
    const handleChangeSensitive = (sensitive:boolean)=>{
        setSettings((prev) => ({ ...prev, sensitive }));
    }
    const handleChangeType = (type: "original" | "wide" | "square") => {
      setSettings((prev) => ({ ...prev, type }));
    };
  return (
    <div className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl flex flex-col gap-4 p-12">
        {/**Top */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              onClick={onClose}
              className="cursor-pointer"
            >
              <path
                fill="#e7e9ea"
                d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"
              />
            </svg>
            <h1 className="font-bold text-xl">Media Settings</h1>
          </div>
          <button
            className=" px-4 py-2 rounded-full bg-white text-black font-bold"
            onClick={onClose}
          >
            Save
          </button>
        </div>
        <div className="w-[600px] h-[600px] flex items-center">
          <Image
            src={previewUrl}
            alt="previewUrl"
            width={600}
            height={600}
            className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`}
          />
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-8">
            {ImageOptions.map((option) => (
              <div
                className="flex items-center gap-2 cursor-pointer"
                //@ts-expect-error  issue with string vs enum
                onClick={() => handleChangeType(option.type)}
                key={option.type}
              >
                <svg
                  width={24}
                  viewBox="0 0 24 24"
                  className={
                    settings.type === option.type
                      ? "fill-iconBlue"
                      : "fill-[#e7e9ea]"
                  }
                >
                  <path d={`${option.svg}`} />
                </svg>
                {option.type}
              </div>
            ))}
          </div>
          <div
            className={`cursor-pointer rounded-full py-1 px-4 text-black ${settings.sensitive ? "bg-red-500" : "bg-white"} `}
            onClick={() => handleChangeSensitive(!settings.sensitive)}
          >
            Sensitve
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageEditor;