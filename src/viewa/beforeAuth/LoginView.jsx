import React, { useEffect, useState } from "react";
import LoginModal from "../../components/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../features/login/loginThunk";
import { loginUser } from "../../features/login/loginSlice";

const LoginView = (props) => {
  const { modalIsOpen, closeModal, onSwitchToSignup } = props;
  const {error}=useSelector((state)=>state.login)
  console.log(error)
  const dispatch= useDispatch()

  const data = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(data);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data))
  };
  return (
    <div>
      <LoginModal isOpen={modalIsOpen} onClose={closeModal}>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
          <p className="text-center text-gray-600 mb-6">LOGIN WITH EMAIL</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={userData.email}
                onChange={handlechange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                onChange={handlechange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <input
                  type="checkbox"
                  name="checkbox"
                  // checked={userData.rememberMe}
                  // onChange={handlechange}
                  className="mr-2"
                />
                <label className="text-gray-700">Keep me logged in</label>
              </div>
              <a href="#" className="text-red-500">
                Forgotten your password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-blue-500" onClick={onSwitchToSignup}>
              Sign up here
            </a>
          </p>
        </div>
      </LoginModal>
    </div>
  );
};

export default LoginView;
