import Container from "../components/Container";
import Section from "../components/Section";
import ProductCardss from "../components/ProductCardss";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router";
// import { ExploreOurProductsData } from "../data";
import { useEffect, useState } from "react";

// const menus = [
// 	{
// 		id: uuidv4(),
// 		title: "Woman’s Fashion",
// 		link: "/",
// 		submenu: [
// 			{
// 				id: 1,
// 				title: "Dresses",
// 				link: "/",
// 			},
// 			{
// 				id: 2,
// 				title: "Tops",
// 				link: "/",
// 			},
// 			{
// 				id: 3,
// 				title: "Sweaters",
// 				link: "/",
// 			},
// 			{
// 				id: 4,
// 				title: "Jeans",
// 				link: "/",
// 			},
// 			{
// 				id: 5,
// 				title: "Shoes",
// 				link: "/",
// 			},
// 		],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Men’s Fashion",
// 		link: "/",
// 		submenu: [
// 			{
// 				id: uuidv4(),
// 				title: "Shirts",
// 				link: "/",
// 			},
// 			{
// 				id: uuidv4(),
// 				title: "Jeans",
// 				link: "/",
// 			},
// 			{
// 				id: uuidv4(),
// 				title: "Shoes",
// 				link: "/",
// 			},
// 		],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Electronics",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Home & Lifestyle",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Medicine",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Sports & Outdoor",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Baby’s & Toys",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Groceries &",
// 		link: "/",
// 		submenu: [],
// 	},
// 	{
// 		id: uuidv4(),
// 		title: "Health & Beauty",
// 		link: "/",
// 		submenu: [],
// 	},
// ];

const ProductPage = () => {
  const [menu, setMenu] = useState([]);
  const [products, setProducts] = useState([]);
  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(6);
  const [url, setUrl] = useState("https://dummyjson.com/products");

  const handleCount = (value) => {
    console.log(value);
    setEndCount(value);
  };

  const handleFilter = (category) => {
	setUrl(category);
  }


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [url]);
  return (
    <Section className={"pb-40"}>
      <Container>
        <div className="flex items-center gap-3 pt-20 pb-12.5 text-black/50">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Shop</span>
        </div>
        <div className="grid grid-cols-[280px_1fr]">
          <div>
            <div className="pr-4 pt-10">
              <p className="text-xl pb-4">Shop by Category</p>
              <ul className="space-y-4">
                {menu.map((menu) => (
                  <li
                    key={menu.id}
					onClick={()=>handleFilter(menu.url)}
                    // title={menu.id}
                    className="text-black flex justify-between gap-2 items-center cursor-pointer"
                  >
                    {/* <Link to={menu.url}>{menu.name}</Link> */}
					<span>{menu.name}</span>
                    {/* {menu.submenu.length > 0 && (
                                        <ul>
                                            {menu.submenu.map((submenu) => (
                                                <li key={submenu.id}>
                                                    <Link to={submenu.link}>{submenu.title}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )} */}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pr-4 pt-10">
              <p className="text-xl pb-4">Shop by Color</p>
              <ul className="grid grid-cols-1 gap-3">
                <li className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-black"></div>
                  <p className="leading-[30px] text-[#767676]">Color 1</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-[#FF0000]"></div>
                  <p className="leading-[30px] text-[#767676]">Color 2</p>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-3 rounded-full bg-[#00FF38]"></div>
                  <p className="leading-[30px] text-[#767676]">Color 3</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-7.5">
            <div className="flex justify-end">
              <p>
                <span>Show :</span>{" "}
                <input
                  className="w-[97px] border border-border text-center"
                  type="text"
                  onChange={(e) => handleCount(e.target.value)}
                  value={endCount}
                />
              </p>
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
              {products?.slice(startCount, endCount).map((item) => (
                <ProductCardss key={item.id} product={item} />
              ))}
            </div>
            {/* Pagination */}
            <div className="flex pt-10 gap-2">
              <div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
                1
              </div>
              <div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
                2
              </div>
              <div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
                3
              </div>
              <div className="w-[57px] h-[27px] bg-black text-white flex items-center justify-center cursor-pointer">
                4
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductPage;
