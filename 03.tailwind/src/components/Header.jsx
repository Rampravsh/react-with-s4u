import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { BsMenuButtonWideFill } from "react-icons/bs";

const Header = () => {
  const goToSlide = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className="flex items-center max-w-5xl mx-auto justify-between p-3">
      <h1 className="flex items-center gap-2 ">
        <img src="/vite.svg" alt="logo" />
        <span className="text-2xl font-bold mask-linear-from-neutral-600">
          ChitChat
        </span>
      </h1>
      <div className="border-2 border-red-50 rounded-2xl text-amber-400 p-1.5 mr-5 px-5 cursor-pointer md:hidden">
        <BsMenuButtonWideFill />
      </div>
      <div className="md:flex hidden items-center justify-between text-blue-800 underline gap-5 ">
        <a
          href={"#"}
          onClick={() => goToSlide("about")}
          className="hover:text-red-700"
        >
          about
        </a>
        <a
          href={"#"}
          onClick={() => goToSlide("blog")}
          className="hover:text-red-700"
        >
          blog
        </a>
        <a
          href={"#"}
          onClick={() => goToSlide("services")}
          className="hover:text-red-700"
        >
          services
        </a>
        <a
          href={"#"}
          onClick={() => goToSlide("contact")}
          className="hover:text-red-700"
        >
          contact
        </a>
      </div>
      <button className="rounded-xl bg-red-200 p-1.5">Join waitlist</button>
    </header>
  );
};

export default Header;
