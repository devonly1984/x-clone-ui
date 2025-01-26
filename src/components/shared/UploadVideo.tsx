"use client";
import config from "@/lib/config";
import { IKVideo } from "imagekitio-next";
interface Props {
  path: string;
  className?: string;
}
const UploadVideo = ({path,className}:Props) => {
  return (
    <IKVideo
      urlEndpoint={config.env.imagekit.urlEndpoint}
      publicKey={config.env.imagekit.ikpublicKey}
      path={path}
      className={className}
      transformation={[
        { width: "1920", height: "1080", q: "90" },
        {
          raw: "l-text,i-LamaDev,fs-100,co-white,l-end",
        },
      ]}
      controls
    />
  );
};
export default UploadVideo;
