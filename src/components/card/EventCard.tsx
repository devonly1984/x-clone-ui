import UploadImage from "../shared/UploadImage"

const EventCard = () => {
  return (
    <section className="flex gap-4">
      <div className="relative size-20 rounded-xl overflow-hidden">
        <UploadImage src="/general/cover.jpg" alt="event" w={120} h={120} tr />
      </div>
      <div className="flex-1 ">
        <h2 className="font-bold text-textGrayLight">Test Event</h2>
        <span className="text-sm text-textGray">Testing </span>
      </div>
    </section>
  );
}
export default EventCard