import React, { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
import "./style.css";

const uniqueList = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];
// console.log(uniqueList);

const Restaurant = () => {
  const [menuData, updateMenuData] = useState(Menu);
  const [navList, updateNavList] = useState(uniqueList);
  // console.log(menuData);

  const filterItem = (category) => {
    if (category === "All") {
      updateMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });

    updateMenuData(updatedList);
  };

  return (
    <>
      <Navbar filter={filterItem} nav={navList} />
      <MenuCard data={menuData} />
    </>
  );
};

export default Restaurant;
