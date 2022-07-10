import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="flex w-full z-10  fixed h-20 bg-gray-200 text-center items-center justify-around ">
      {" "}
      <p>
        <Link href="/">
          <h2 className="italic cursor-pointer text-3xl font-bold">
           FShop
          </h2>
        </Link>
      </p>
      <Link href="/cart">
        <button type="button" className="relative text-4xl  cursor-pointer">
          <AiOutlineShopping />
          <span className="absolute top-5 right-[-2px] bg-red-600 h-5 w-5 justify-center items-center flex text-white  rounded-full text-lg ">
            {totalQuantities}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
