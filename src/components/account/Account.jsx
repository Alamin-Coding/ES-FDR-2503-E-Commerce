import React from "react";
import Section from "../Section";
import Container from "../Container";
import { Link } from "react-router";
import EditProfile from "./EditProfile";

const Account = () => {
  const menuItem = [
    {
      text: "Manage My Account",
      item: ["My Profile", "Address Book", "My Payment Options"],
    },
    {
      text: "My Orders",
      item: [" My Returns", "My Cancellations "],
    },
    {
      text: "My WishList",
      item: [],
    },
  ];
  return (
    <Section className="py-25">
      <Container>
        <div>
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center gap-3  pb-12.5 text-black/50">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Shop</span>
            </div>
            <div className="flex items-center gap-3  pb-12.5 text-black/50">
              <span className="text-black text-normal text-sm leading-[1.5] ">
                Welcome!
              </span>
              <span className="text-red-500 text-normal text-sm leading-[1.5] ">
                {" "}
                Md Rimel
              </span>
            </div>
          </div>
          <div className="grid grid-cols-[280px_1fr] justify-between gap-15">
            <div>
              {menuItem.map((menu, index) => (
                <div key={index}>
                  <h3 className="text-[#000000] text-[16px] leading-normal font-medium pb-4">
                    {menu.text}
                  </h3>

                  <ul className="flex flex-col items-start gap-2 pl-7.5 pb-6 ">
                    {menu.item.map((i, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href=""
                          className="text-[#000000]/40 text-[16px] leading-normal font-medium hover:text-secondary"
                        >
                          {i}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
                <EditProfile />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Account;
