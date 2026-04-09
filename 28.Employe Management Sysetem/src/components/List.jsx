import React from "react";
import Layout from "./Layout";
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEditPopup,
} from "../store/features/popup/popup.slice";

const List = () => {
  const { employees, loading, error } = useSelector((state) => state.employee);
  console.log(employees, loading, error);
  return (
    <Layout>
      <div className="min-h-screen mt-10">
        <ul className="list bg-base-100 rounded-box shadow-md">
          <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
            Most played songs this week
          </li>
          {employees.map((item) => (
            <SingleList key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const SingleList = ({ item }) => {
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
        <div>{item.name}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {item.email}
        </div>
      </div>
      <p className="list-col-wrap text-xs">
        {item.bio}
      </p>
      <button
        onClick={() => dispatch(openDeletePopup())}
        className="btn btn-square btn-ghost"
      >
        <MdDeleteOutline size={"1.2rem"} />
      </button>
      <button
        onClick={() => dispatch(openEditPopup())}
        className="btn btn-square btn-ghost bg-amber-600"
      >
        <FaEdit size={"1.2rem"} />
      </button>
      <button className={`${item.highlighted?'bg-amber-50':''}btn btn-square btn-ghost`}>
        <FaRegHeart size={"1.2rem"} />
      </button>
    </li>
  );
};

export default List;
