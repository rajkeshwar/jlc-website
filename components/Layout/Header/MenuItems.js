
import { pageLinks } from "@/utils/constants";
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

  const toHref = (title) => {
    const route = String(title).toLowerCase();
    return route === "home" ? "/" : "/" + route
  };

  useEffect(() => {
    location = window.location;
  }, []);

  return (
    <React.Fragment>
      {pageLinks.map((page, index) => (
        <li className={activeClass(page)} key={index}>
          <Link href={toHref(page)}>{page}</Link>
        </li>
      ))}
    </React.Fragment>
  );
};

export default MenuItems;
