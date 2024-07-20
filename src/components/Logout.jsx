import React from "react";
import { IoMdLogOut } from "react-icons/io";

const Logout = (props) => {
  const { isOpen, onClose } = props;
  if (!isOpen) return null;
  return (
    <div className=" z-50">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-12 w-full max-w-md z-10">
        <div className="absolute -top-10 right-1 mr-2">
          <a href="" className="flex items-center gap-1">
            <span>
              <IoMdLogOut />
            </span>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Logout;
