import React from "react";
import Section from "../Section";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import Arrows from "../Arrows";
import { Mobile, Monitor } from "../icons";

const categories = [
	{
		id: 1,
		title: "Phones",
		icon: <Mobile />,
	},
	{
		id: 2,
		title: "Computers",
		icon: <Monitor />,
	},
	{
		id: 3,
		title: "SmartWatch",
		icon: <Monitor />,
	},
	{
		id: 4,
		title: "Camera",
		icon: <Monitor />,
	},
	{
		id: 5,
		title: "HeadPhones",
		icon: <Monitor />,
	},
	{
		id: 6,
		title: "Gaming",
		icon: <Monitor />,
	},
];

const CategoryCard = ({ category }) => {
	return (
		<div className="flex flex-col gap-1 items-center justify-center h-[145px] w-[170px] border border-border rounded hover:bg-secondary group">
			<div className="mb-2 text-white group-hover:stroke-white stroke-black">{category.icon}</div>
			<span className="group-hover:text-white">{category.title}</span>
		</div>
	);
};

const Categories = () => {
	return (
		<Section className={"pb-20"}>
			<Container>
				<div className={"border-t border-t-border pt-20 "}>
					<div className="grid grid-cols-[auto_1fr] gap-6 justify-between">
						<SectionHeader title="Browse By Category" subtitle="Categories" />
						<Arrows />
					</div>
				</div>

				<div className="pt-15 flex items-center gap-6">
					{categories.map((category) => (
						<CategoryCard key={category.id} category={category} />
					))}
				</div>
			</Container>
		</Section>
	);
};

export default Categories;
