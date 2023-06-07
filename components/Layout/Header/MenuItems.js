import { capitalize } from "@/utils/common";
import Link from "next/link";
import React, { useEffect } from "react";

const MenuItems = (props) => {
  const { parentMenu } = props;

  let location = {};

  const activeClass = (route) => {
    return parentMenu === route
      ? "menu-item-has-children current-menu-item"
      : "menu-item-has-children";
  };

  const pageLinks = ["home", "about", "courses", "blog", "contact"];

  const toHref = (route) => (route === "home" ? "/" : "/" + route);

  useEffect(() => {
    location = window.location;
  }, []);

  return (
    <React.Fragment>
      {pageLinks.map((page, index) => (
        <li className={activeClass(page)} key={index}>
          <Link href={toHref(page)}>{capitalize(page)}</Link>
        </li>
      ))}
    </React.Fragment>
  );
};

export default MenuItems;
