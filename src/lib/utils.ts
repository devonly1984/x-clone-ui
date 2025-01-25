import ImageKit from "imagekit";

export const imagekit_Server = new ImageKit({
    urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT!,
  
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY!,
    privateKey: process.env.IK_PRIVATE_KEY!,
  });