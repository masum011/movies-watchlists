import React, { useState } from "react";
import { BsEmojiSunglassesFill } from "react-icons/bs";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { addToWatchlist, extractData, removeWatchlist } from "../features/home/homeSlice";
import { useDispatch } from "react-redux";
const MovieCards = (props) => {
  const dispatch=useDispatch()
  const { watchlist,poster,title,yr } = props;
  const [watchcomplete, setWatchComplete]=useState(false)

  
  // const addtowatchlist=()=>{
  //   let watchlistArray = JSON.parse(localStorage.getItem('watchlists')) || [];
  //   let watchlist = {
  //     title: title,
  //     poster: poster,
  //     year: yr
  //   };
  //   const watchlistExists = watchlistArray.some(item => item.title === watchlist.title);
  //   if (!watchlistExists) {
  //     watchlistArray.push(watchlist);
  //   }
  //   localStorage.setItem('watchlists', JSON.stringify(watchlistArray));
  //   setWatchComplete(true)
  // }

  const handleAddToWatchlist = (title, poster, yr) => {
    const newWatchlistItem = { title, poster, year: yr };
    dispatch(addToWatchlist(newWatchlistItem));
  };

  const handlecomplete=(poster)=>{
    dispatch(removeWatchlist(poster))
    dispatch(extractData())
  }
  return (
    <div className="h-[350px] w-[180px] rounded-md border">
      <div className="w-full h-[70%] relative">
        {watchlist == 'true' ? (
          <div className="absolute right-0 cursor-pointer" onClick={()=>handlecomplete(poster)}> <TiTick size={'3em'} color="white"/></div>
        ) : (
          <span className="absolute -left-1 mix-blend-multiply cursor-pointer" onClick={()=>handleAddToWatchlist(poster,title,yr)}>
            {watchcomplete ? <TiTick size={'3em'} color="white" fill="green"/> : <BsFillBookmarkPlusFill size={"2em"} color="#656565"/>}
          </span>
        )}

        <img
          className=" w-full h-full object-fill"
          src={poster}
          alt={title}
        />
      </div>
      <div className="pb-3 px-3">
        <div className="rating flex justify-end items-center gap-2">
          <BsEmojiSunglassesFill />
          <span>
            83<span className="text-[10px]">/100</span>
          </span>
        </div>
        <div>
          <p className="font-medium">
            {title} <span className="text-[#656565]">({yr})</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCards;
