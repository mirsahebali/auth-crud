function SearchBar({data}:any ) {
          return ( <div className="flex justify-center">
<input type="text" className="placeholder:italic placeholder:text-2xl placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm w-[80%]" name="search" id="search" placeholder="search..." />
          </div> );
}

export default SearchBar;