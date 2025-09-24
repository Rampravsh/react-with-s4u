import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaRegHeart,
  FaRegComment,
  FaShare  
} from "react-icons/fa";

const Card = (props) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-[10px] p-7 bg-gray-50 shadow-lg border-6 border-white w-[410px]">
      <div className="flex items-center justify-between font-bold text-xl w-full">
        <FaArrowLeft />
        <CiMenuKebab />
      </div>
      <div className="flex justify-center">
        <img
          className="w-44 rounded-full shadow-xl"
          src="./img.png"
          alt="pic"
        />
      </div>
      <div className="text-2xl text-center m-5">{props.name||"Rampravesh Kumar"}</div>
      <div className="text-center text-xl font-light">{props.job||"Designer & developer"}</div>
      <div className="m-5 flex items-center justify-around">
        <div className="shadow-xl  w-12 h-12 rounded-full hover:bg-gray-100 text-xl flex items-center justify-center text-blue-800">
          <FaFacebookF />
        </div>
        <div className="shadow-xl w-12 h-12 rounded-full hover:bg-gray-100 text-xl flex items-center justify-center text-blue-400">
          <FaTwitter />
        </div>
        <div className="shadow-xl w-12 h-12 rounded-full hover:bg-gray-100 text-xl flex items-center justify-center text-pink-500">
          <FaInstagram />
        </div>
        <div className="shadow-xl w-12 h-12 rounded-full hover:bg-gray-100 text-xl flex items-center justify-center text-red-500">
          <FaYoutube />
        </div>
      </div>
      <div className="m-3 flex items-center gap-2">
        <div className="w-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center p-2.5 text-xl">
          Message
        </div>
        <div className="w-32 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center p-2.5 text-xl">
          Subscribe
        </div>
      </div>
      <div className="m-3 flex items-center gap-2">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center p-2.5 text-xl flex items-center gap-2">
          <FaRegHeart />
          {props.totalLike+"K"||"20.4K"}
        </div>
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center p-2.5 text-xl flex items-center gap-2">
          <FaRegComment  />
          {props.totalComment+"K"||"20.4K"}
        </div>
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-center p-2.5 text-xl flex items-center gap-2">
          <FaShare  />
          {props.totalShare+"K"||"20.4K"}
        </div>
      </div>
    </div>
  );
};

export default Card;
