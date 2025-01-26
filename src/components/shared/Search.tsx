import UploadImage from "./UploadImage"

const Search = () => {
  return (
    <div className="bg-inputGray py-2 px-4 flex items-cneter gap-4 rounded-full">
      <UploadImage src="icons/explore.svg" alt="search" w={16} h={16} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none "
      />
    </div>
  );
}
export default Search