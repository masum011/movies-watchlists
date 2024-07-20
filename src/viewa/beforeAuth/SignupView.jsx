import React, { useState } from "react";
import LoginModal from "../../components/LoginModal";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/login/loginSlice";

const SignupView = (props) => {
  const dispatch=useDispatch()
  const { onSwitchToLogin, modalIsOpen, closeModal } = props;
  const data = {
    name:'',
    email: "",
    password: "",
  };
  const [user, setUser] = useState(data);

  const handleonchange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name] : value})
  };

  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(user)
    dispatch(addUser(user))
    setUser(data)
  };
  return (
    <div>
      <LoginModal isOpen={modalIsOpen} onClose={closeModal}>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Welcome Back</h2>
          <p className="text-center text-gray-600 mb-6">SIGNUP WITH EMAIL</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Name:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={user.name}
                onChange={(e) => handleonchange(e)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email Address:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={(e) => handleonchange(e)}
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
                value={user.password}
                onChange={(e) => handleonchange(e)}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-500" onClick={onSwitchToLogin}>
              Log in here
            </a>
          </p>
        </div>
      </LoginModal>
    </div>
  );
};

export default SignupView;
