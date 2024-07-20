import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { LiaEdit } from "react-icons/lia";
import MovieCards from "../../components/MovieCards";
import { useSelector } from "react-redux";
const WatchListsView = () => {
  const {watchData}=useSelector((state)=>state.home)
  console.log(watchData,'masum')
  const [title, setTitle] = useState("Tom Crease");
  const [edit, setEdit] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);
  const [watchList, setWatchList] = useState([]);

  const handleTitleClose = () => {
    setTempTitle(title);
    setEdit(false);
  };

  const handleTitleComplete = () => {
    setTitle(tempTitle);
    setEdit(false);
  };
  // useEffect(() => {
  //   const storedWatchlist = localStorage.getItem("watchlists");
  //   if (storedWatchlist) {
  //     setWatchList(JSON.parse(storedWatchlist));
  //   }
  // }, []);

  return (
    <div>
      <Layout>
        <main>
          <div className="pb-4">
            <p className="text-4xl font-medium flex items-center gap-4 ">
              Movies by
              <span className="">
                {edit ? (
                  <input
                    className="outline-none"
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                  />
                ) : (
                  <span>{title}</span>
                )}
              </span>
              <span className="mt-2">
                {!edit ? (
                  <LiaEdit size={".8em"} onClick={() => setEdit(true)} />
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={handleTitleComplete}
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-blue-600"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleTitleClose}
                      class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600"
                    >
                      Cancle
                    </button>
                  </div>
                )}
              </span>
            </p>
            <div className="py-6">
              <p className="font-bold text-[1.3em]">About this watchlist</p>
              <p className="flex">
                This list lorem ipsum dolor et blah blah blahn
              </p>
            </div>
          </div>

          <div>
              <div className="flex flex-wrap gap-12 overflow-y-scroll h-[320px]">
                {watchData ? watchData.map((items, index) => (
                  <div key={index}>
                    <MovieCards
                      watchlist="true"
                      title={items.poster}
                      yr={items.year}
                      poster={items.title}
                    />
                  </div>
                )) : <div> <h2>empty</h2></div>}
              </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default WatchListsView;
