import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const Main = ({ goods, addOrder, able, selectedGoods }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const items = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="bg-gray-50 flex flex-col wrap items-center justify-center text-center gap-10 mb-10">
      <h1 className=" text-5xl mt-11">Донер</h1>
      <div className="border-b-2 border-gray-600 w-2/4 flex justify-center m-auto"></div>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=" min-h-60 text-gray-400 body-font grid max-2xl:grid-cols-4 max-xl:grid-cols-4 gap-10 max-md:gap-5 w-11/12 m-auto max-lg:grid-cols-3 max-md:grid-cols-2"
      >
        {goods.slice(0, 4).map((item, index) => (
          <motion.div
            variants={items}
            key={index}
            className=" box-border py-5 xl:h-60   justify-center items-center text-center shadow-boxCard shadow-gray-300/50 w-full max-lg:h-40  rounded-lg  border-solid  max-md:h-40 max-sm:h-40 "
          >
            <img
              alt="ecommerce"
              className=" rounded-lg max-lg:h-200 h-3/5 object-cover object-center xl:h-3/5 max-lg:w-11/12  w-10/12 m-auto block max-md:h-2/4"
              src={item.img}
            />

            <div className="  text-black xl:h-180 max-lg:h-100 flex items-center justify-center flex-col max-sm:h-180">
              <h6 className="my-3 h-2 max-md:h-7">{item.name}</h6>
              <p className="my-3 font-bold">{item.price} тг.</p>
              <button
                disabled={selectedGoods.some(
                  (good) => good.id === item.id && good.added
                )}
                onClick={() => addOrder(item)}
                style={{ 
                  backgroundColor: selectedGoods.some(good => good.id === item.id && good.added) 
                    ? 'green' 
                    : 'red' 
                }}
                className=" flex justify-center items-center m-auto gap-2  p-2 capitalize text-white w-4/5  rounded-full text-center  max-md:w-4/5"
              >
                <RiShoppingBag3Fill className="text-2xl" />
                добавить
              </button>
            </div>
          </motion.div>
        ))}
      </motion.section>
      <h1 className="text-5xl max-md:mt-20">Самса</h1>
      <div className="border-b-2 border-gray-600 w-2/4 flex justify-center m-auto"></div>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className=" min-h-60 text-gray-400 body-font grid max-2xl:grid-cols-4 max-xl:grid-cols-4 gap-10 max-md:gap-5 w-11/12 m-auto max-lg:grid-cols-3 max-md:grid-cols-2"
      >
        {goods.slice(4, 11).map((item, index) => (
          <motion.div
            variants={items}
            key={index}
            className="  box-border py-5 xl:h-60 justify-center items-center text-center shadow-boxCard shadow-gray-300/50 w-full max-lg:h-40  rounded-lg  border-solid  max-md:h-40 max-sm:h-40"
          >
            <img
              alt="ecommerce"
              className="rounded-lg max-lg:h-1800 h-3/5 object-cover object-center xl:h-3/5 max-lg:w-11/12  w-10/12 m-auto block max-md:h-2/4"
              src={item.img}
            />

            <div className=" text-black xl:h-180 max-lg:h-100 flex items-center justify-center flex-col max-sm:h-180">
              <h6 className="my-3 h-2 max-md:h-7">{item.name}</h6>
              <p className="my-3 font-bold">{item.price} тг.</p>
              <button
                disabled={able}
                onClick={() => addOrder(item)}
                className=" flex justify-center items-center m-auto gap-2 bg-red-600 p-2 capitalize text-white w-4/5  rounded-full text-center  max-md:w-4/5"
              >
                <RiShoppingBag3Fill className="text-2xl" />
                добавить
              </button>
            </div>
          </motion.div>
        ))}
      </motion.section>
      <h1 className="text-5xl">Напитки</h1>
      <div className="border-b-2 border-gray-600 w-2/4 flex justify-center m-auto"></div>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="  text-gray-400 body-font grid max-2xl:grid-cols-4 max-xl:grid-cols-4 gap-10 w-11/12 m-auto max-lg:grid-cols-3  max-md:grid-cols-2"
      >
        {goods.slice(11).map((item, index) => (
          <motion.div
            variants={items}
            key={index}
            className="  box-border py-5 xl:h-60 justify-center items-center text-center shadow-boxCard shadow-gray-300/50 w-full max-lg:h-40  rounded-lg  border-solid  max-md:h-40 max-sm:h-50"
          >
            <img
              alt="ecommerce"
              className=" rounded-lg  object-cover max-lg:w-1/2 object-center xl:h-[230px]  xl:w-[70%] max-lg:h-[20vh] w-full max-md:h-[25vh] max-sm:h-[28vh] m-auto block max-md:w-3/4 "
              src={item.img}
            />

            <div className="text-black xl:h-180 max-lg:h-100 flex items-center justify-center flex-col max-sm:h-180">
              <h6 className="my-3  h-2 max-md:h-7">{item.name}</h6>
              <p className="my-3 font-bold">{item.price} тг.</p>
              <button
                disabled={able}
                onClick={() => addOrder(item)}
                className=" flex justify-center items-center m-auto gap-2 bg-red-600 p-2 capitalize text-white w-4/5  rounded-full text-center  max-md:w-4/5"
              >
                <RiShoppingBag3Fill className="text-2xl" />
                добавить
              </button>
            </div>
          </motion.div>
        ))}
      </motion.section>

    </div>
  );
};

export default Main;
