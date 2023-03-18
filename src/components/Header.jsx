import React from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { MdOutlineShoppingBag ,MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';

const Header = () => {

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const [isMenu,setIsMenu] = useState(false);

    const login = async () => {
      if (!user) {
        const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type : actionType.SET_USER,
        user : providerData[0 ],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      }else {
        setIsMenu(!isMenu);
      }
    };


    const logout = () => {
      setIsMenu(false)
      localStorage.clear()

      dispatch({
        type : actionType.SET_USER,
        user : null,
      });
    };

  return (
    <header className="z-50 w-screen bg-blue-500 p-6 text-white px-16 rounded-bl-3xl rounded-tr-3xl">
    {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img whileTap={{ scale: 0.8 }} src={Logo} className="absolute w-10 object-cover left-28" alt="logo" />
          <p className="relative text-headingColor text-2xl font-bold shadow-md">Rental Parrot</p>
        </Link>

          <motion.ul
            initial={{ opacity : 0, x : 200 }}
            animate={{ opacity : 3, x : 0 }}
            exit={{ opacity : 0, x : 200 }}
            className="flex items-center gap-8 m-auto">
            <Link to={"/*"}>
            <li className="text-base text-stone-700 hover:text-zinc-800 shadow-md duration-100 transition-all ease-in-out cursor-pointer">Home</li>
            </Link>
            <Link to={"/menuContainer"}>
            <li className="text-base text-stone-700 hover:text-zinc-800 shadow-md duration-100 transition-all ease-in-out cursor-pointer">Menu</li></Link>
            <Link to={"/contactMe"}>
            <li className="text-base text-stone-700 hover:text-zinc-800 shadow-md duration-100 transition-all ease-in-out cursor-pointer">Contact Us</li></Link>
            <li className="text-base text-stone-700 hover:text-zinc-800 shadow-md duration-100 transition-all ease-in-out cursor-pointer">Why Order @RentalParrot</li>
          </motion.ul>

          <div className="relative flex items-center justify-center ml-4">
            <MdOutlineShoppingBag className="text-4xl text-zinc-800 hover:text-white duration-100 transition-all ease-in-out cursor-pointer drop-shadow-2xl"/>
            <div className="absolute w-4 h-4 top-3 rounded-full bg-zinc-800  hover:bg-white duration-100 transition-all ease-in-out cursor-pointer flex items-center justify-center">
              <p className="text-xs text-white hover:text-zinc-800 font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img 
              whileTap={{ scale: 0.7 }}
              src={ user ? user.photoURL : Avatar }
              className="w-8 min-w-[40px] h-8 min-h-[40px] ml-6 drop-shadow-xl cursor-pointer rounded-full"
              alt="userProfile"
              onClick={login}
            />
            {isMenu && (
                <motion.div
                  initial={{ opacity : 0, scale : 0.6 }}
                  animate={{ opacity : 3, scale : 1 }}
                  exit={{ opacity : 0, scale : 0.6 }}
                  className="w-32 bg-slate-600 shadow-xl rounded-lg flex flex-col absolute top-10 right-4">
              {
                user && user.email === "subhosingha732@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-3 py-2 flex items-center gap-3 cursor-pointer
                  hover:bg-blue-900 hover:border-2 border-stone-600 transition-all 
                    duration-100 ease-in-out text-white text-base" onClick={() => setIsMenu(false)}>New Item <MdAdd />
                  </p>
                  </Link>
                )}
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer
               hover:bg-black hover:border-2 border-white transition-all duration-100 ease-in-out
               text-white text-base" onClick={logout}>Logout <MdLogout />
              </p>
            </motion.div>
              )}
          </div>
      </div>

    {/* mobile */}
    <div className="flex md:hidden w-full h-full">
      <Link to={"/"} className="flex items-center gap-2">
        <motion.img whileTap={{ scale: 0.8 }} src={Logo} className="absolute w-7 object-cover left-4 top-5" alt="logo" />
        <p className="absolute text-headingColor text-base font-bold left-10 top-7">Rental Parrot</p>
      </Link>
    </div>

    <div className="md:hidden absolute flex items-center right-32 top-5 justify-around ml-4">
            <MdOutlineShoppingBag className="md:hidden text-4xl text-zinc-800 hover:text-white duration-100 transition-all ease-in-out cursor-pointer drop-shadow-2xl"/>
            <div className="absolute w-4 h-4 top-3 rounded-full bg-zinc-800  hover:bg-white duration-100 transition-all ease-in-out cursor-pointer flex items-center justify-center">
              <p className="text-xs text-white hover:text-zinc-800 font-semibold">2</p>
            </div>
    </div>

    <div className="relative flex md:hidden items-center justify-end">
            <motion.img 
              whileTap={{ scale: 0.7 }}
              src={ user ? user.photoURL : Avatar }
              className="w-8 min-w-[20px] h-8 min-h-[20px] ml-6 drop-shadow-xl cursor-pointer rounded-full"
              alt="userProfile"
              onClick={login}
            />
            {isMenu && (
                <motion.div
                  initial={{ opacity : 0, scale : 0.6 }}
                  animate={{ opacity : 3, scale : 1 }}
                  exit={{ opacity : 0, scale : 0.6 }}
                  className="bg-slate-600 shadow-xl rounded-lg flex flex-col absolute top-9">
              {
                user && user.email === "subhosingha732@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-3 py-2 flex items-center gap-2 cursor-pointer
                  hover:bg-blue-900 hover:border-2 border-stone-600 transition-all 
                    duration-100 ease-in-out text-white text-xs" onClick={() => setIsMenu(false)}>New Item <MdAdd />
                  </p>
                  </Link>
                )}

              <ul
                className="flex items-center gap-1 m-auto">
                <li className="px-2 py-1 flex items-center gap-2 cursor-pointer
                  hover:bg-blue-900 hover:border-2 border-stone-600 transition-all 
                    duration-100 ease-in-out text-white text-xs"
                    onClick={() => setIsMenu(false)}>Home</li>
                <Link to={"/menuContainer"}>
                <li className="px-2 py-1 flex items-center gap-2 cursor-pointer
                  hover:bg-blue-900 hover:border-2 border-stone-600 transition-all 
                    duration-100 ease-in-out text-white text-xs"
                    onClick={() => setIsMenu(false)}></li></Link>
                <Link to={"/contactMe"}>
                <li className="px-2 py-1 flex items-center gap-2 cursor-pointer
                  hover:bg-blue-900 hover:border-2 border-stone-600 transition-all 
                    duration-100 ease-in-out text-white text-xs"
                    onClick={() => setIsMenu(false)}>Contact Me</li></Link>
                <li className="px-2 py-1 flex items-center gap-2 cursor-pointer
                  hover:bg-blue-900 hover:border-2 border-stone-600 transition-all 
                    duration-100 ease-in-out text-white text-xs"
                    onClick={() => setIsMenu(false)}>Services</li>
              

              <p className="px-2 py-1 flex items-center gap-2 cursor-pointer
               hover:bg-black hover:border-2 border-white 
               transition-all duration-100 ease-in-out text-white text-xs"
               onClick={logout}>Logout <MdLogout />
              </p>
              </ul>
            </motion.div>
              )}
    </div>
    </header>
  );
};

export default Header;
