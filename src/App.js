import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BigSpinner from "./components/BigSpinner";
import HomeView from "./viewa/afterAuth/HomeView";
import WatchListsView from "./viewa/afterAuth/WatchListsView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
  {
    path: "/watchlists",
    element: <WatchListsView/>,
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<BigSpinner />} />;
}
