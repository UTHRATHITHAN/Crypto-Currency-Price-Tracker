import React, { useContext, useRef } from "react";

import { CryptoContext } from "./../context/CryptoContext";

import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = inputRef.current.value;
    if (val !== 0) {
      setPerPage(val);
      inputRef.current.value = val;
    }
  };

  return (
    <form
      className="pl-3 md:pl-0 relative flex items-center gap-x-2 font-nunito
          mr-12
          "
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="perpage"
        className="relative flex justify-center items-center
          mr-2  md:font-bold
          "
      >
        per page:{" "}
      </label>
      <input
        type="number"
        name="perpage"
        min={1}
        max={250}
        ref={inputRef}
        placeholder="10"
        className="w-20 rounded bg-zinc-900 placeholder:text-zinc-500
     pl-2 required outline-0 border border-transparent 
     focus:border-cyan leading-4
     remove-arrow
     "
     readonly
      />
      <button type="submit" className="ml-1 cursor-pointer">
  
        <FaRegArrowAltCircleRight alt="submit" className="md:w-6 md:h-6  w-5 h-5"/>

      </button>
    </form>
  );
};

const Pagination = () => {
  let { page, setPage, totalPages, perPage, cryptoData } =
    useContext(CryptoContext);

  const TotalNumber = Math.ceil(totalPages / perPage);

  const next = () => {
    if (page === TotalNumber) {
      return null;
    } else {
      setPage(page + 1);
    }
  };

  const prev = () => {
    if (page === 1) {
      return null;
    } else {
      setPage(page - 1);
    }
  };

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1);
    } else {
      setPage(page + 3);
    }
  };

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(TotalNumber + 1);
    } else {
      setPage(page - 2);
    }
  };

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center justify-center md:justify-end w-full md:gap-x-16 px-2">
        <PerPage />
        <ul className="flex items-center justify-end text-sm  gap-x-2 md:gap-x-4">
          <li className="flex items-center justify-between">
            <button className="outline-0 hover:text-cyan " onClick={prev}>
                      <FaRegArrowAltCircleRight alt="left" className="md:w-8 md:h-8  w-5 h-5 rotate-180"/>

            </button>
          </li>

          {page + 1 === TotalNumber || page === TotalNumber ? (
            <li>
       
              <button
                onClick={multiStepPrev}
                className="ouline-0 hover:text-cyan  rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
                               <BsThreeDots />
              </button>
            </li>
          ) : null}

          {page - 1 !== 0 ? (
            <li>
              <button
                onClick={prev}
                className="ouline-0 hover:text-cyan  rounded-full w-8 h-8 flex items-center justify-center bg-zinc-800"
              >
                {page - 1}
              </button>
            </li>
          ) : null}
          <li>
            <button
              disabled
              className="ouline-0  rounded-full w-8 h-8 flex items-center justify-center bg-zinc-800 text-white "
            >
              {page}
            </button>
          </li>

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button
                onClick={next}
                className="ouline-0 hover:text-cyan  rounded-full w-8 h-8 flex items-center justify-center bg-black "
              >
                {page + 1}
              </button>
            </li>
          ) : null}

          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li >
              <button
                onClick={multiStepNext}
                className="ouline-0 hover:text-cyan  rounded-full w-8 h-8 flex items-center justify-center text-lg"
              >
               <BsThreeDots />
              </button>
            </li>
          ) : null}

          {page !== TotalNumber ? (
            <li>
              <button
                onClick={() => setPage(TotalNumber)}
                className="ouline-0 hover:text-cyan  rounded-full w-8 h-8 flex items-center justify-center bg-black "
              >
                {TotalNumber}
              </button>
            </li>
          ) : null}
          <li>
            <button className="outline-0 hover:text-cyan w-8" onClick={next}>
            <FaRegArrowAltCircleRight alt="left" className="md:w-8 md:h-8  w-5 h-5 "/>

            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
