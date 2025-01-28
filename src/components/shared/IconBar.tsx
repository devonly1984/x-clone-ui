import UploadImage from "./UploadImage"

const IconBar = () => {
  return (
    <div className="flex gap-4 flex-wrap">
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
  );
}
export default IconBar