import { HiSearch } from "react-icons/hi";

function Search() {
  return (
    <div className="flex items-center gap-2 max-w-[256px]">
      <HiSearch className="absolute" />
      <input
        type="text"
        placeholder="جستجو کنید..."
        className="size-full outline-none px-8 text-sm left-0 right-0"
      />
    </div>
  );
}

export default Search;
