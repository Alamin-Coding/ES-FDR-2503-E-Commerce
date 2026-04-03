import React from "react";
import Section from "../Section";
import Container from "../Container";
import { Link } from "react-router";
import OurStoryImg from "../../assets/ourstory.jpg";
import { ShopIcon, SaleIcon, MoneybagIcon, ShoppingbagIcon } from "../icons";

const OurStory = () => {
  return (
    <Section>
      <Container>
        <div className="flex items-center gap-2 justify-start">
          <Link to="/" className="text-slate-300">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link to="/about" className="text-800">
            About
          </Link>
        </div>
        <div className="pt-10.5 grid grid-cols-1 lg:grid-cols-[525px_705px] gap-8 lg:gap-18.75">
          <div className="order-2 lg:order-1">
            <h1 className="text-[36px] lg:text-[54px] font-semibold text-black pb-4 lg:pb-10">
              Our Story
            </h1>
            <p className="text-base font-normal pb-4 lg:pb-6 text-black leading-6.5">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="text-base font-normal text-black leading-6.5">
                Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>
            <div className="mt-4 lg:mt-0">
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img src={OurStoryImg} alt="Our Story" className="w-full h-auto" />
          </div>
        </div>
       
      </Container>
    </Section>
  );
};

export default OurStory;
