import React, { useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { RiShoppingBag3Fill } from "react-icons/ri";
import logo from "../images/logo.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { LuMapPin } from "react-icons/lu";
const Order = ({ setSelectedGoods, selectedGoods, deleteGood, incrementQuantity, decrementQuantity, openOrder, location, destinationIndex, selectLocation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    if (name === "" || phone === "" || phone.length !== 12) {
      toast.error("Заполните поля", {
        autoClose: 2000,
        position: "top-center",
        type: "error",
        theme: "colored",
      });
      return;
    } else {
      emailjs
        .sendForm("service_2g4n8up", "template_k36rf0i", form.current, {
          publicKey: "NLZxbw58ls6QNHM3z",
        })
        .then(
          () => {
            console.log("success");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  const updateInput = (e) => {
    setName(e.target.value);
  };

  let sum = 0;
  selectedGoods.forEach((good) => {
    sum += good.price * good.quant;
  });
  let text = `${location[destinationIndex].title} \n` + ``;
  selectedGoods.map((good) => {
    return (text += `${good.name} - ${good.quant} шт. - ${good.price} тг. \n`);
  });
  const buttonReset = (e) => {
    e.preventDefault();
    if (name === "" || phone === "" || phone.length !== 12) {
      toast.error("Заполните поля", {
        autoClose: 2000,
        position: "top-center",
        type: "error",
        theme: "colored",
      });
      return;
    } else {
      toast.info(" Заявка принята ! ", {
        autoClose: 2000,
        position: "top-center",
        type: "success",
        theme: "colored",
      });
      let newGoods = [...selectedGoods];
      newGoods.splice(0, newGoods.length);
      setSelectedGoods(newGoods);
      setName("");
      setPhone("");
      sendEmail();
    }
    console.log(phone.length);
  };

  return (
    <>
      <div className="fixed overflow-auto max-h-screen max-md:min-h-screen max-md:stiky z-10 bg-white w-full justify-center">
        <div className="flex text-5xl xl:h-150 items-center justify-around mx-10  md:min-h-20 ">
          <img src={logo} className="w-150 h-150 max-md:w-100 max-md:h-100" alt="" />
          <h1 className="text-center max-md:text-xl">COSMO FOOD</h1>
          <Link to="/">
            {" "}
            <IoClose onClick={openOrder} className="cursor-pointer" />
          </Link>
        </div>
        <div className="pb-12 xl:flex  xl:w-3/4 rounded-2xl m-auto gap-5 min-h-60 lg:w-2/4 tel:grid tel:grid-cols-1  ">
          <div className="flex flex-col p-20 h-80 xl:w-2/4 shadow-boxCard  shadow-gray-300/50 border-2 rounded-2xl tel:w-full tel:grid max-md:mb-5 max-md:grid-cols-1">
            <h2 className="text-3xl text-center">Итоговая цена: </h2>
            <span className="text-3xl text-center text-green-600 mt-5">{sum} тг.</span>
            <div className="flex mt-3 justify-center gap-2 items-center">
              <h2 className="text-center capitalize">филиал: </h2>
              <span className="text-center"> {location[destinationIndex].title}</span>
              <Link to="/deliver">
                <button className="bg-red-500 text-white rounded-full px-5 capitalize mx-2 border-2 flex justify-center items-center gap-2 py-2 ">
                  {" "}
                  <LuMapPin /> назад
                </button>
              </Link>
            </div>
            <div className="my-5 w-full">
              <form onSubmit={sendEmail} ref={form} action="" className="flex flex-col ">
                <label className=" capitalize  " htmlFor="">
                  номер
                </label>
                <PhoneInput defaultCountry="uzb" internationalization required maxLength={15} minLength={14} pattern="[0-9]+{3}-[0-9]+{3}-[0-9]+[0-9]+{2}-[0-9]+{2}" placeholder="+7 (778) 248-00-47" value={phone} onChange={setPhone} name="from_email" className="border-2 border-red-500/100 shadow-lg h-11 w-full rounded-lg px-4 py-1" />
                <label className=" capitalize mt-5 " htmlFor="">
                  имя
                </label>
                <input required value={name} onChange={updateInput} type="text" name="from_name" minLength={1} id="" placeholder="имя" className=" border-2 border-red-500/100 shadow-lg w-full h-11 rounded-lg px-4 py-1" />
                <textarea className="hidden" name="message" value={text}></textarea>
                <button type="reset" onClick={buttonReset} className="flex  justify-center items-center mt-10 m-auto gap-2 bg-red-600 p-2 text-white w-full rounded-full text-center">
                  <RiShoppingBag3Fill className="text-2xl" />
                  Заказать
                </button>
              </form>
            </div>
          </div>

          <div className="xl:w-3/5 bg-gray text-center h-80 overflow-auto max-md:overflow-hidden max-md:min-h-60 shadow-boxCard  shadow-gray-300/50 rounded-2xl px-10">
            <h4 className="m-5 text-xl">Ваш заказ:</h4>
            <div className="grid grid-cols-1 overflow-auto min-h-[15vh] max-h-[60vh]  mt-10 max-md:w-full">
              {selectedGoods.map((good, index) => (
                <div className=" flex flex-col relative p-3 rounded-md  border-2 border-red-600 justify-around my-3 items-center max-md:w-full max-md:gap-1 max-md:h-3/4">
                  <h1>{good.name}</h1>
                  <div className="flex w-4/5 h-[15px] justify-between gap-5 my-10 items-center max-md:w-full max-md:gap-1">
                    <img src={good.img} alt="" className="w-[75px] h-[75px] rounded-2xl" />
                    <p>{good.price * good.quant} тг.</p>
                    <button className="bg-red-500 rounded-full text-white">
                      <FaMinus onClick={(it) => decrementQuantity(good)} />
                    </button>
                    <p>{good.quant}</p>
                    <button className="bg-red-500 rounded-full text-white">
                      <FaPlus onClick={() => incrementQuantity(good)} />
                    </button>
                    <button className=" text-2xl text-red-500" onClick={(index) => deleteGood(index)}>
                      <IoTrashOutline />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
