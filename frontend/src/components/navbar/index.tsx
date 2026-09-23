import React, { useState } from "react";
import { AppstoreOutlined, HomeOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import "./style.css";

type MenuItem = Required<MenuProps>["items"][number];
export type NavigationSection = "home" | "about" | "projects" | "contact";
export const PORTFOLIO_NAVIGATION_EVENT = "portfolio:navigate";

const items: MenuItem[] = [
  // {
  //   label: <a href="#home">Home</a>,
  //   key: "home",
  //   icon: <HomeOutlined />,
  // },
  // {
  //   label: <a href="#about">About</a>,
  //   key: "about",
  //   icon: <UserOutlined />,
  // },
  // {
  //   label: <a href="#projects">Projects</a>,
  //   key: "projects",
  //   icon: <AppstoreOutlined />,
  // },
  // {
  //   label: <a href="#contact">Contact</a>,
  //   key: "contact",
  //   icon: <MailOutlined />,
  // },
];

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (event) => {
    const section = event.key as NavigationSection;

    event.domEvent.preventDefault();
    setCurrent(section);
    window.dispatchEvent(
      new CustomEvent<NavigationSection>(PORTFOLIO_NAVIGATION_EVENT, {
        detail: section,
      }),
    );
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a
        className="navbar__brand"
        href="#home"
        onClick={(event) => {
          event.preventDefault();
          setCurrent("home");
          window.dispatchEvent(
            new CustomEvent<NavigationSection>(PORTFOLIO_NAVIGATION_EVENT, {
              detail: "home",
            }),
          );
        }}
      >
        Ali yousefi
      </a>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </nav>
  );
};

export { Navbar };
