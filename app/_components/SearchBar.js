"use client";

import { useEffect, useState } from "react";
import { useSearching } from "./SearchingContext";
import useDebounce from "./useDebounce";

function SearchBar() {
  const [search, setSearch] = useState("");
  const { searchCardList } = useSearching();
  const debounceSearch = useDebounce(search, 500);

  useEffect(
    function () {
      console.log(debounceSearch);
      searchCardList(debounceSearch);
    },
    [debounceSearch, searchCardList]
  );
  return (
    <div className="w-full py-20   ">
      <input
        type="text"
        placeholder="Search Notes"
        onChange={(e) => setSearch(e.target.value)}
        className=" block w-64 sm:w-72 lg:w-80 h-12 bg-emerald-100 border-2 focus:bg-emerald-50 focus:border-emerald-700 focus:text-emerald-900 focus:outline-none mx-auto rounded-xl text-emerald-700 pl-1.5 font-medium  border-emerald-400 transition-all "
        value={search}
      />
    </div>
  );
}

export default SearchBar;
