import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="w-[80%] md:w-[40%] bg-gray-200 mb-12
    last:mb-0 rounded-lg p-4 gap-x-4 relative cursor-pointer
    hover:bg-gray-300
    "
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-black  capitalize">name:&nbsp;</span>
            <span className="text-black font-bold text-md">{data.name}</span>
            <img
              src={data.small}
              alt={data.name}
              className="w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full"
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-black capitalize">
              market cap rank:&nbsp;
            </span>
            <span className="text-black font-bold text-md">{data.market_cap_rank}</span>
          </h3>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-black capitalize">
              price (in btc):&nbsp;
            </span>
            <span className="text-black font-bold text-md">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 5,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-black capitalize">score:&nbsp;</span>
            <span className="text-black font-bold text-md">{data.score}</span>
          </h3>

          <img
            src={data.large}
            alt={data.name}
            className="w-[35%] h-auto rounded-full absolute top-2/4 -right-12
-translate-y-2/4 
"
          />
        </>
      ) : (
        <div
          className="w-full  h-full flex justify-center items-center
             "
        >
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full
             border-b-gray-200 animate-spin 
             "
            role="status"
          />
          <span className="ml-2">please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
