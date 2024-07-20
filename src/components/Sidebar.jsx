import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { IoMdLogOut } from "react-icons/io";
import LoginView from "../viewa/beforeAuth/LoginView";
import SignupView from "../viewa/beforeAuth/SignupView";
import LoginModal from "./LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { extractData } from "../features/home/homeSlice";

const Sidebar = () => {
  const {watchData}=useSelector((state)=>state.home)
  console.log(watchData,'<<<<<<<<<<')
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [logout, setLogout] = useState(false);
  const handlelogoutOpen = () => setLogout(true);
  const handlelogoutClose = () => setLogout(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [isLogin, setIsLogin] = useState(true);
  const switchToLogin = () => setIsLogin(!isLogin);

  const [logoutModal, setLogoutModal] = useState(false);
  const openModalLogout = () => setLogoutModal(true);
  const closeModalLogout = () => {
    setLogoutModal(false);
    handlelogoutClose();
  };

  const handleconfirm=()=>{
    localStorage.removeItem('watchlists')
    dispatch(extractData())
    closeModalLogout()
  }

  useEffect(()=>{
    dispatch(extractData())
  },[dispatch])

  const isArrayEmpty = (arr) => {
    // Check if the array is empty
    return Array.isArray(arr) && arr.length === 0;
  };
  return (
    <div className="px-6 ">
      <div className="h-screen relative">
        <div className="mr-2">
          <p className="text-4xl text-[#F33F40] font-bold py-4 px-2">
            Watchlists
          </p>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <IoSearchOutline size={"1.4em"} color="#E5E7EB" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="border-2 rounded-md w-full p-1.5 pl-10"
            />
          </div>
          <p
            className="py-2 my-6 bg-[#F33F40] text-white flex items-center gap-2 rounded-md px-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <IoHomeOutline size={"1.3em"} />{" "}
            <span className="text-[#FCC6C6]">Home</span>
          </p>
        </div>

        <p className="font-medium p-3 border-t-2">My Lists</p>
        {!isArrayEmpty(watchData) &&
        <ul>
          <li
            className="border-2 rounded-md py-1 flex justify-between items-center px-2 mr-2 cursor-pointer"
            onClick={() => navigate("/watchlists")}
          >
            <span className="flex items-center gap-2">
              <span className="bg-black px-1 text-white">M</span>
              <span className="text-[.7em]">Tom Cruise</span>
            </span>
          </li>
        </ul>}

        <div className="absolute w-full bottom-7">
          {logout && (
            <div className="absolute -top-10 right-1 mr-2">
              <a
                href="#"
                className="flex items-center gap-1"
                onClick={openModalLogout}
              >
                <span>
                  <IoMdLogOut />
                </span>
                Logout
              </a>
            </div>
          )}
          <p className="border-2 rounded-md py-1 flex justify-between items-center px-2 mr-2">
            <span className="flex items-center gap-3 cursor-pointer" onClick={openModal}>
              <FaRegCircleUser size={"1.7em"} />{" "}
              <span className="text-[.7em]">GUEST</span>
            </span>{" "}
            <BsThreeDots onClick={handlelogoutOpen} className="cursor-pointer" />
          </p>
        </div>
        {isLogin ? (
          <LoginView
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onSwitchToSignup={switchToLogin}
          />
        ) : (
          <SignupView
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
            onSwitchToLogin={switchToLogin}
          />
        )}
      </div>

      <LoginModal isOpen={logoutModal} onClose={closeModalLogout}>
        <div className="flex justify-center">
          <div>
          <SlLogout size={"5em"} />
          <p className="py-4">Are you Leaving?</p>

          </div>
        </div>
          <div className="flex justify-end gap-4">
            <button className="border p-2 rounded-md" onClick={closeModalLogout}>Cancle</button>
            <button
              className=" bg-blue-700 hover:bg-blue-800 focus:ring-4 text-white p-2 rounded-md"
              type="button"
              onClick={handleconfirm}
              >
              Confrom
            </button>
          </div>
      </LoginModal>
    </div>
  );
};

export default Sidebar;
