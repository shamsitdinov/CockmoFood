import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <footer className="py-5 max-2xl:h-65 max-2xl:bg-black max-2xl:w-full max-2xl:flex m-auto max-md:full max-md:grid grid-cols-1  max-md:bg-black max-md:w-full max-md:m-auto max-lg:px-5">
      <div className="w-1/4 flex flex-col justify-evenly gap-5 m-auto max-lg:w-4/5 max-lg:m-auto h-65">
        <img src={logo} className="w-2/4" alt="" />
        <h1 className="text-red-500 text-3xl tel:text-2xl">
          +7 (778) 248-00-47
        </h1>
        <h1 className="text-red-500 text-3xl tel:text-2xl">
          +7 (775) 702-26-29
        </h1>

        <h2 className="text-white text-3xl">
          Работаем ежедневно с 08:00 до 23:00
        </h2>

        <p className="text-white">Заказы принимаются до 22.30.</p>

        <p className="text-white">Доставляем в течение 30 минут!</p>
        <div className="flex gap-5">
          <a href="/">
            <FaTelegram className="text-white hover:opacity-70 text-3xl" />
          </a>
          <a href="/">
            <SlSocialVkontakte className=" text-white hover:opacity-70 text-3xl" />
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/cosmo_food_astana/"
          >
            <FaInstagram className=" text-white hover:opacity-70 text-3xl" />
          </a>
        </div>
      </div>
      <div className="xl:w-1/2 text-white flex flex-col justify-center items-center tel:flex">
        <h1 className="text-5xl text-red-500 p-10">Филиалы</h1>
        <ul className="text-2xl py-4 ">
          <li className="py-2 hover:text-red-400 hover:underline">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%B0%D1%83%D1%80%D0%B0%D0%BD+7,+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0+020000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@51.1190427,71.416102,17z/data=!3m1!4b1!4m6!3m5!1s0x42458424fa6ffe95:0xa27d2d6c94a5f00c!8m2!3d51.1190427!4d71.4186769!16s%2Fg%2F11bw4jssb2?entry=ttu"
            >
              Сауран 7 Г{" "}
            </a>
          </li>
          <li className="py-2 hover:text-red-400 hover:underline">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D1%83%D1%81%D1%82%D0%B0%D1%84%D0%B8%D0%BD%D0%B0+13,+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0+010000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@51.1540392,71.5061529,17z/data=!3m1!4b1!4m6!3m5!1s0x4245819ba2a0a935:0xe6e235b1f7f9a030!8m2!3d51.1540392!4d71.5087278!16s%2Fg%2F11c25dnd11?entry=ttu"
            >
              Мустафина 13
            </a>
          </li>
          <li className="py-2 hover:text-red-400 hover:underline">
            <a
              target="_blank"
              href="https://www.google.com/maps/search/%D0%9C%D1%83%D1%81%D1%80%D0%B0%D0%BF%D0%BE%D0%B2%D0%B0+21%2F6/@51.1504906,71.4969571,17z/data=!3m1!4b1?entry=ttu"
            >
              Мусрeпова 21/6
            </a>
          </li>
          <li className="py-2 hover:text-red-400 hover:underline">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%93%D0%B0%D0%B1%D0%B8%D1%82%D0%B0+%D0%9C%D1%83%D1%81%D1%80%D0%B5%D0%BF%D0%BE%D0%B2%D0%B0+6,+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0+010000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@51.1520403,71.4986907,17z/data=!3m1!4b1!4m6!3m5!1s0x424581778ec03959:0x35c1636bc2f98f7e!8m2!3d51.1520403!4d71.5012656!16s%2Fg%2F11h01wl7d1?entry=ttu"
            >
              Мусрeпова 6
            </a>
          </li>
          <li className="py-2 hover:text-red-400 hover:underline">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%90%D0%BC%D0%B0%D0%BD%D0%B3%D0%B5%D0%BB%D1%8C%D0%B4%D1%8B+%D0%98%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0+7,+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0+010000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@51.1639304,71.4302169,17z/data=!3m1!4b1!4m6!3m5!1s0x4245812d3ff4be5b:0x817510c09bb46e9!8m2!3d51.1639304!4d71.4327918!16s%2Fg%2F11vwj5b4rj?entry=ttu"
            >
              Иманова 7
            </a>
          </li>
          <li className="py-2 hover:text-red-400 hover:underline">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A2%D0%B0%D1%85%D0%B0+%D0%A5%D1%83%D1%81%D0%B5%D0%B9%D0%BD%D0%B0+2,+%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0+010000,+%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD/@51.1536767,71.4430595,17z/data=!3m1!4b1!4m6!3m5!1s0x4245814a6432f43b:0x680c7ba81336d69e!8m2!3d51.1536767!4d71.4456344!16s%2Fg%2F11gxmv6fnh?entry=ttu"
            >
              Таxа Хусаина 2
            </a>
          </li>
          <li className="py-2 hover:text-red-400 hover:underline">
            <a target="_blank" href="https://maps.app.goo.gl/3Wknqa6pHATUZELX9">
              Кенесары 80
            </a>
          </li>
          <li className="py-2 hover:text-red-400 hover:underline">
            <a target="_blank" href="https://maps.app.goo.gl/T7LfYqXwWHqjhyin7">
              Бокихан 18
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
