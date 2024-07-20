import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { fetchMovies, searchMovies } from "../features/home/homeThunk";

const SearchBar = () => {
  const dispatch=useDispatch()

  const [title,setTitle]=useState('')
  const handlesearch=(e)=>{
    if(title){
      dispatch(searchMovies(title))
    }else{
      dispatch(fetchMovies())
    }
  }
  return (
    <div className="">
      <div className="relative py-8">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearchOutline size={"1.4em"} color="gray" />
        </span>
        <input
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          placeholder="Tom Cruise Movies"
          className="border-2 rounded-md w-full p-1.5 pl-10 pr-24"
        />
        <span className="absolute inset-y-0 right-0 flex items-center">
          <button className="bg-[#DA4F51] text-white p-2 rounded-md px-4" onClick={handlesearch}>
            Search
          </button>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
