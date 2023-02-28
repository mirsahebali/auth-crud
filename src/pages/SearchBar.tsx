import Link from "next/link";
import { useState } from "react";

export default function SearchBar({ data, func }: any) {
const [searchTerm, setSearchTerm] = useState("")


  return (
    <div className="flex justify-center">
      <input
        type="text"
        className="placeholder:italic placeholder:text-2xl placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-r-none rounded-l-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[80%]"
        name="search"
        id="search"
        placeholder="search..."
        onChange={func}
      />
      <Link href={`create/CreatePost`}>
        <div className="bg-[#2B3467] text-white p-2 h-[6vh] rounded-l-0 rounded-r-md w-fit flex justify-center items-center font-bold">
          + New Post
        </div>
      </Link>{" "}
    </div>
  );
}
