import UploadImage from "../shared/UploadImage"

const UserCard = () => {
  return (
    <section className="flex items-center justify-between">
    <article className="flex items-center gap-2">
      <div className="relative rounded-full overflow-hidden size-10">
        <UploadImage
          src="general/avatar.png"
          alt="John Doe"
          tr
          w={100}
          h={100}
        />
      </div>
      <div className="">
        <h1 className="text-md font-bold">John Doe</h1>
        <span className="text-gray txt-sm ">@JohnDoe</span>
      </div>
    </article>
    <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
      Follow
    </button>
  </section>
  )
}
export default UserCard