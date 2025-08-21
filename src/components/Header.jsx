import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { TbClockHour3 } from "react-icons/tb";
import { motion } from "framer-motion";
import { MdOutlineShoppingBag } from "react-icons/md";
import img from "../images/bg-img.jpeg";
import { Link } from "react-router-dom";

const Header = ({ selectedGoods, openOrder }) => {
  return (
    <div
      className="max-xl:flex  text-white justify-center items-center max-md:grid max-md:grid-cols-1 max-md:p-5 max-lg:p-5 lg:flex max-md:bg-top max-lg:bg-top "
      style={{
        width: "100%",
        height: "80vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)),url(${img})`,
      }}
    >
      <div className="xl:text-5xl xl:w-2/4 max-md:w-full max-md:text-4xl max-lg:text-4xl max-xl:text-4xl ">
        <h2>Доставка донер и самса из</h2>
        <h1 className="text-[#FFEDD8] font-bold mt-10">COSMO FOOD</h1>
      </div>
      <div className="flex flex-col justify-start items-start">
        <div className="flex justify-center items-center my-10">
          <MdDeliveryDining className="max-2xl:text-6xl mx-5 max-md:text-5xl max-lg:text-4xl " />
          <span className="xl:text-2xl text-white max-md:text-xl max-lg:text-2xl ">
            Бесплатная доставка <br /> От 14999 тг
          </span>
        </div>
        <div className="flex items-center justify-center my-10">
          <LuShoppingBag className="max-2xl:text-6xl mx-5 max-md:text-5xl max-lg:text-4xl " />
          <span className="xl:text-2xl max-md:text-xl max-lg:text-2xl ">
            Минимальная сумма заказа:
            <br /> 1000 тг
          </span>
        </div>
        <div className="flex items-center justify-center my-10">
          <TbClockHour3 className="max-2xl:text-6xl mx-5 max-md:text-5xl max-lg:text-4xl " />
          <span className="xl:text-2xl :text-xl max-lg:text-2xl ">
            Время работы:
            <br /> 08:00 – 23:00
          </span>
        </div>
      </div>
      {!selectedGoods.length ? (
        ""
      ) : (
        <Link to="/deliver">
          <motion.div
            onClick={openOrder}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" shadow-boxCard shadow-gray-300/50 fixed right-1 top-10  bg-slate-400 rounded-full p-2"
          >
            <MdOutlineShoppingBag className="cursor-pointer text-7xl font-sans max-md:text-5xl " />
            <span className=" cursor-pointer absolute top-14 right-5 font-bold w-7 h7   bg-red-500  text-center text-xl rounded-full max-md:top-7 max-md:text-sm max-md:w-5 max-md:h-5 ">
              {!selectedGoods.length ? "" : selectedGoods.length}
            </span>
          </motion.div>
        </Link>
      )}
    </div>
  );
};

export default Header;
