import { AiOutlineSearch } from "react-icons/ai";
import "./styles/SearchInput.css";

function SearchInput() {
  return (
    <div className="flex gap-4 pr-7 md:pr-16 md:w-80  phone-font  items-center bg-[#EAEAEA] rounded-md pl-3">
      <AiOutlineSearch className="size-5" />
      <input
        type="text"
        placeholder="What are you looking for?"
        className="bg-[#EAEAEA] w-full py-1 rounded-md focus:outline-none "
      />
    </div>
  );
}

export default SearchInput;
