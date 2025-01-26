import EventCard from "../card/EventCard";
import UploadImage from "./UploadImage";

const PopularTags = () => {
  return (
    <div className="rounded-2xl p-4 border-1 border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        What&apos;s Happening
      </h1>
      <EventCard />
      <section>
        <div className="flex items-center justify-between">
          <span className="text-textGrayfont-semibold text-sm">
            Technology Trending
          </span>
          <UploadImage src="icons/infoMore.svg" alt="info" w={16} h={16} />
        </div>

        <h2 className="text-textGrayLight font-bold ">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </section>
    </div>
  );
}
export default PopularTags