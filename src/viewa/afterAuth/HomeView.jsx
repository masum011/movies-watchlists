import React, { useEffect } from "react";
import Layout from "../../layout/Layout";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import MovieCards from "../../components/MovieCards";
import SearchBar from "../../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../features/home/homeThunk";
import { extractData } from "../../features/home/homeSlice";

const HomeView = () => {
  const dispatch = useDispatch();

  const { data, loading, emptymeg,watchData } = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(extractData())
  }, []);
  return (
    <div>
      <Layout>
        <main>
          <div className="border-2 border-[#da4f51a2] p-4 rounded-md">
            <p className="text-4xl py-4 font-medium">
              Welcome to <span className="text-[#DA4F51]">Watchlists</span>
            </p>
            <p>
              Browse movies, add them to watchlists and share them with friends.
            </p>
            <p className="flex">
              Just click the{" "}
              <span className="mt-1">
                <BsFillBookmarkPlusFill size={"2em"} color="#656565" />
              </span>
              To add a movie, hover over the poster for more information, then
              click the checkbox to indicate the film as watched.
            </p>
          </div>

          <div className="">
            <SearchBar />
          </div>

          {loading ? (
            <div className="h-[320px] w-full flex justify-center items-center text-4xl ">
              loading...
            </div>
          ) : (
            <div className="flex flex-wrap gap-12 overflow-y-scroll h-[320px]">
              {data ? (
                data?.map((items, index) => (
                  <div key={index}>
                    <MovieCards
                      title={items.Title}
                      poster={items.Poster}
                      yr={items.Year}
                    />
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-full w-full">
                  {emptymeg}
                </div>
              )}
            </div>
          )}
        </main>
      </Layout>
    </div>
  );
};

export default HomeView;
