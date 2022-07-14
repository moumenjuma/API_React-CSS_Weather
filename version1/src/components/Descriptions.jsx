import React from "react";
import "./descriptions.css";

import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Descriptions = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
      style: "shadow-md duration-500 hover:shadow-black"
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
      style: "shadow-md duration-500 hover:shadow-black"
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
      style: "shadow-md duration-500 hover:shadow-black"
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
      style: "shadow-md duration-500 hover:shadow-black"
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
      style: "shadow-md duration-500 hover:shadow-black"
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
      style: "shadow-md duration-500 hover:shadow-black"
    },
  ];
  return (
    <div className="section section__descriptions ">
      {cards.map(({ id, icon, title, data, unit, style}) => (
        <div key={id} className={`card ${style}`}>
          <div className="description__card-icon" >
            {icon}
            <large>{title}</large>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Descriptions;
