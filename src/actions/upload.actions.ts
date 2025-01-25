"use server";

import { imagekit_Server } from "@/lib/utils";





export const shareAction = async (
  formData: FormData,
  settings: ImageSettings
) => {
  const file = formData.get("file") as File;
  //const desc = formData.get("desc") as string;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const transformation = `w-600, ${settings.type === "square" ? "ar-1-1" : settings.type === "wide" ? "ar-16-9" : ""} `;
  imagekit_Server.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: transformation,
      },
      customMetadata: {
        sensitive: settings.sensitive,
      },
    },
    (error, result) => {
      if (error) console.log(error);
      else console.log(result);
    }
  );
};