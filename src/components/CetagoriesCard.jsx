// import all icon component for cetagoriescard
import MobileIcon from "../components/Icons/Mobile";
import MonitorIcon from "../components/Icons/Monitor";
import CameraIcon from "./Icons/CameraIcon";
import WatchIcon from "../components/Icons/WatchIcon";
import HeadphoneIcon from "../components/Icons/HeadphoneIcon";
import GamepadeIcon from "../components/Icons/GamepadeIcon";
import { useEffect, useState } from "react";
import axios from "axios";

const CetagoriesCard = () => {
	const [cardData, setCardData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/categories")
			.then((data) => console.log(data.data));
	}, []);

	return (
		<div className="grid grid-cols-6 gap-7.5">
			{/* use maping from carddata list */}
			{cardData?.map((item) => (
				<div
					key={item.id}
					className="flex flex-col items-center justify-center hover:bg-my_secondary group p-4 w-42.5 h-33.75 border border-border rounded hover:bg-black transition"
				>
					<div className=" group-hover:stroke-F5F5F5 stroke-black transition">
						{item.icon}
					</div>

					<span className="block mt-2 group-hover:text-F5F5F5 transition">
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
};

export default CetagoriesCard;
