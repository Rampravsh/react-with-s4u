import React from "react";
import Layout from "./Layout";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  openDeletePopup,
  openEditPopup,
} from "../store/features/popup/popup.slice";

const List = () => {
  return (
    <Layout>
      <div className="min-h-screen mt-10">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Most played songs this week
          </li>
          <SingleList />
          <SingleList />
          <SingleList />
          <SingleList />
        </ul>
      </div>
    </Layout>
  );
};

const SingleList = () => {
  const dispatch = useDispatch();
  return (
    <li className="list-row">
      <div>
        <img
          className="size-10 rounded-box"
          src="https://img.daisyui.com/images/profile/demo/1@94.webp"
        />
      </div>
      <div>
        <div>Dio Lupa</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          Remaining Reason
        </div>
      </div>
      <p className="list-col-wrap text-xs">
        "Remaining Reason" became an instant hit, praised for its haunting sound
        and emotional depth. A viral performance brought it widespread
        recognition, making it one of Dio Lupa’s most iconic tracks.
      </p>
      <button
        onClick={() => dispatch(openDeletePopup())}
        className="btn btn-square btn-ghost"
      >
        <MdDeleteOutline size={"1.2rem"} />
      </button>
      <button
        onClick={() => dispatch(openEditPopup())}
        className="btn btn-square btn-ghost"
      >
        <FaEdit size={"1.2rem"} />
      </button>
      <button className="btn btn-square btn-ghost">
        <FaRegHeart size={"1.2rem"} />
      </button>
    </li>
  );
};

export default List;
