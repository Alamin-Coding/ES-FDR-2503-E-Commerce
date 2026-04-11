// for uniqe id import uuid
import { v4 as uuidv4 } from "uuid";

// import all icon component for cetagoriescard
import MobileIcon from "./icons/Mobile";
import MonitorIcon from "./icons/Monitor";
import CameraIcon from "./Icons/CameraIcon";
import WatchIcon from "../components/Icons/WatchIcon";
import HeadphoneIcon from "../components/Icons/HeadphoneIcon";
import GamepadeIcon from "../components/Icons/GamepadeIcon";
import { Swiper, SwiperSlide } from "swiper/react";

const CetagoriesCard = ({ swiperRef }) => {
  // cetagoriescard data list
  const cardData = [
    {
      id: uuidv4(),
      title: "Phones",
      icon: <MobileIcon />,
    },
    {
      id: uuidv4(),
      title: "Computers",
      icon: <MonitorIcon />,
    },
    {
      id: uuidv4(),
      title: "SmartWatch",
      icon: <WatchIcon />,
    },
    {
      id: uuidv4(),
      title: "Camera",
      icon: <CameraIcon />,
    },
    {
      id: uuidv4(),
      title: "HeadPhones",
      icon: <HeadphoneIcon />,
    },
    {
      id: uuidv4(),
      title: "Gaming",
      icon: <GamepadeIcon />,
    },
    {
      id: uuidv4(),
      title: "Gaming",
      icon: <GamepadeIcon />,
    },
  ];

  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      loop={true}
      slidesPerView={6}
      spaceBetween={30}
      pagination={{
        dynamicBullets: true,
      }}
      className="mySwiper"
    >
      {cardData.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            key={item.id}
            className="flex flex-col items-center justify-center hover:bg-secondary group p-4 w-42.5 h-33.75 border border-border rounded hover:bg-black transition"
          >
            <div className=" group-hover:stroke-F5F5F5 stroke-black transition">
              {item.icon}
            </div>

            <span className="block mt-2 group-hover:text-F5F5F5 transition">
              {item.title}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CetagoriesCard;
