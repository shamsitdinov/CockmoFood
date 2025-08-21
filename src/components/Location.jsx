import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { MdHome } from "react-icons/md";
import logo from "../images/logo.png";
const Location = ({ location, selectLocation, destinationIndex }) => {
  return (
    <>
      <div className="xl:h-[100vh] xl:justify-center grid xl:grid-cols-[1fr,3fr]  max-lg:grid-cols-[1fr,2fr] max-sm:grid-cols-1 ">
        <div className=" text-center bg-stone-700 text-white p-3 min-h-[100vh]">
          <h2 className="text-3xl">Выберите филиал</h2>
          <select className=" outline-none border-none w-full  xl:h-[57vh] my-0.2 max-sm:my-1 overflow-hidden bg-stone-700 max-sm:w-1/2 max-sm:h-[50vh] " size="8">
            {location.map((item, index) => (
              <option className=" border-none my-1 relative text-xl w-full block after:block after:content-[''] after:absolute after:h-[2px] after:bg-coral after:w-[55%] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left max-sm:after:origin-center  cursor-pointer  p-2 hover:text-red-500" onClick={() => selectLocation(index)}>
                {item.title}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap justify-center gap-5 w-full items-center ">
            <Link to="/">
              <button className="  bottom-5  flex justify-center items-center m-auto gap-2 bg-red-600 p-2  mb-3 capitalize text-white w-36 max-lg:w-28 rounded-full text-center  max-sm:w-28">
                {" "}
                <MdHome className="text-xl" /> назад
              </button>
            </Link>
            <Link className="  " to="/next">
              <button className="  bottom-5 flex justify-center items-center m-auto gap-2 bg-red-600 p-2 mb-3 capitalize text-white w-36 max-lg:w-28  rounded-full text-center  max-md:w-28">
                {" "}
                Выбрать <MdDeliveryDining className="text-2xl" />
              </button>
            </Link>
            <div className=" flex justify-center items-center mt-10">
              <img className="w-2/5 text-center" src={logo} alt="" />
            </div>
          </div>
        </div>
        <iframe src={location[destinationIndex].destination} allowfullscreen="" className="xl:h-[100vh] xl:w-full max-lg:w-full max-lg:h-full max-sm:h-screen" title="Title" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Location;
