"use client"

import config from "@/lib/config"
import { IKImage,  } from "imagekitio-next"
interface Props {
  src: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?:boolean;
}
const UploadImage = ({src,w,h,alt,className,tr}:Props) => {

  return (
    <IKImage
      urlEndpoint={config.env.imagekit.urlEndpoint}
      publicKey={config.env.imagekit.ikpublicKey}
      path={src.includes("/xui-clone") ? src : `/xui-clone/${src}`}
      alt={alt}
      lqip={{ active: true, quality: 20 }}
      className={className}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
    />
  );
}
export default UploadImage