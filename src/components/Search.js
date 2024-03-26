import debounce from "lodash.debounce";
import React, { useContext, useState } from "react";
import { CryptoContext } from "./../context/CryptoContext";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("");
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext);

  let handleInput = (e) => {
    e.preventDefault();
    let query = e.target.value;
    setSearchText(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchText);
  };

  const selectCoin = (coin) => {
    setCoinSearch(coin);
    setSearchText("");
    setSearchData();
  };

  return (
    <>
      <form
        className="w-96 relative flex  items-center  md:pl-0 justify-center pl-3
 font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="search"
          onChange={handleInput}
          value={searchText}
          className="w-full px-2 md:w-full  rounded bg-zinc-800
          placeholder:text-zinc-500 
        required outline-0 border border-transparent 
        focus:border-cyan
         "
          placeholder="search here..."
        />
        <button type="submit" className="absolute right-1 cursor-pointer size-7">


          <IoSearchSharp className="w-6 h-6 text-white " alt="search"/>

        </button>
      </form>
      {searchText.length > 0 ? (
        <ul
          className="absolute top-11 right-0 w-96 h-96 rounded
overflow-x-hidden py-2 bg-zinc-800 bg-opacity-30 
backdrop-blur-md scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-w-3 scrollbar-track-gray-100
"
        >
          {searchData ? (
            searchData.map((coin) => {
              return (
                <li
                  className="flex items-center ml-4 my-2 cursor-pointer"
                  key={coin.id}
                  onClick={() => selectCoin(coin.id)}
                >
                  <img
                    className="w-[1rem] h-[1rem] mx-1.5"
                    src={coin.thumb}
                    alt={coin.name}
                  />

                  <span>{coin.name}</span>
                </li>
              );
            })
          ) : (
            <div
              className="w-full h-full flex justify-center items-center
             "
            >
              <div
                className="w-8 h-8 border-4 border-white border-b-zinc-800 rounded-full
              animate-spin
             "
                role="status"
              />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  );
};

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext);

  const debounceFunc = debounce(function (val) {
    getSearchResult(val);
  }, 2000);

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFunc} />
    </div>
  );
};

export default Search;
