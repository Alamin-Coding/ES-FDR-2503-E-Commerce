import React, { useState } from "react";
import banner_1 from "../assets/hero-1.jpg";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const menus = [
  {
    id: uuidv4(),
    title: "Woman’s Fashion",
    link: "/",
    submenu: [
      {
        id: 1,
        title: "Dresses",
        link: "/",
      },
      {
        id: 2,
        title: "Tops",
        link: "/",
      },
      {
        id: 3,
        title: "Sweaters",
        link: "/",
      },
      {
        id: 4,
        title: "Jeans",
        link: "/",
      },
      {
        id: 5,
        title: "Shoes",
        link: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Men’s Fashion",
    link: "/",
    submenu: [
      {
        id: uuidv4(),
        title: "Shirts",
        link: "/",
      },
      {
        id: uuidv4(),
        title: "Jeans",
        link: "/",
      },
      {
        id: uuidv4(),
        title: "Shoes",
        link: "/",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Electronics",
    link: "/",
    submenu: [],
  },
  {
    id: uuidv4(),
    title: "Home & Lifestyle",
    link: "/",
    submenu: [],
  },
  {
    id: uuidv4(),
    title: "Medicine",
    link: "/",
    submenu: [],
  },
  {
    id: uuidv4(),
    title: "Sports & Outdoor",
    link: "/",
    submenu: [],
  },
  {
    id: uuidv4(),
    title: "Baby’s & Toys",
    link: "/",
    submenu: [],
  },
  {
    id: uuidv4(),
    title: "Groceries &",
    link: "/",
    submenu: [],
  },
  {
    id: uuidv4(),
    title: "Health & Beauty",
    link: "/",
    submenu: [],
  },
];

const Banner = () => {
  const [activeMenu, setActiveMenu] = useState(null);
//   ai genarated
// const handlemenu = (menu) => {
//   setActiveMenu(activeMenu === menu.id ? null : menu.id);
// };


// handcoded
const handlemenu = (menu) => {
  if (activeMenu === null) {
    setActiveMenu(menu.id);
  } else {
    setActiveMenu(null);
  }
};
  return (
    <section className="pb-41.25">
      <div className="container">
        <div className="grid grid-cols-[233px_1fr]">
          <div className="pr-4 pt-10">
            <ul className="space-y-4">
              {menus.map((menu) => (
                <li
				// for practice perpous
                //   onMouseEnter={() => setActiveMenu(menu.id)}
                //   onMouseLeave={() => setActiveMenu(null)}
				//   onClick={()=> setActiveMenu(menu.id)}

				// bettar one i found
				onClick={()=> handlemenu(menu)}
                  key={menu.id}
                  title={menu.id}
                  className="group text-black flex justify-between gap-2 items-center relative hover:text-red-500 transform transition-all duration-500"
                >
                  <Link to={menu.link}>{menu.title}</Link>
                  {menu.submenu.length > 0 && (
                    <span>
                      <ChevronRight />
                    </span>
                  )}
                  {menu.submenu.length > 0 && activeMenu === menu.id && (
                    <ul className="absolute top-0 left-50 ml-4 bg-white shadow-lg rounded-md p-4 w-48 space-y-2 z-50 transform transition-all duration-500">
                      {menu.submenu.map((submenu) => (
                        <li
                          key={submenu.id}
                          className="text-black hover:text-red-500"
                        >
                          <Link to={submenu.link}>{submenu.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Image Slider */}
          <div className="pl-11.25 pt-10 border-l border-l-border">
            {/* <div>
							<img className="w-full" src={banner_1} alt="image" />
						</div> */}
            <div className="w-[892px]">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Link to="/shop">
                    <img className="w-full" src={banner_1} alt="image" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/shop">
                    <img className="w-full" src={banner_1} alt="image" />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/shop">
                    <img className="w-full" src={banner_1} alt="image" />
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
