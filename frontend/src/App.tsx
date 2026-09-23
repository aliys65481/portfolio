import React from "react";
import "./App.css";
import { HomePage } from "./pages";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ConfigProvider, type ThemeConfig } from "antd";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { App as AntdApp } from "antd";
gsap.registerPlugin(useGSAP, ScrollTrigger);

// .contact-form label {
//   display: grid;
//   gap: 8px;
//   color: rgba(255, 255, 255, 0.84);
//   font-family: var(--font-heading);
//   font-size: 14px;
//   font-weight: 700;
// }

// .contact-form input,
// .contact-form textarea {
//   width: 100%;
//   min-height: 46px;
//   padding: 12px 14px;
//   border: 1px solid rgba(255, 255, 255, 0.16);
//   outline: none;
//   color: #ffffff;
//   background: rgba(8, 10, 15, 0.58);
//   font-family: var(--font-heading);
//   font-size: 15px;
// }

const theme: ThemeConfig = {
  token: {
    colorPrimary: "var(--primary)",
    fontFamily: "var(--font-body)",
    colorTextPlaceholder: "rgba(255, 255, 255, 0.48)",
  },
  components: {
    Form: {
      labelColor: "#ffffffff",
    },
    Input: {
      colorBgContainer: "rgba(8, 10, 15, 0.58)",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.48)",
      colorText: "#ffffff",
      activeBg: "rgba(8, 10, 15, 0.58)",
      hoverBg: "rgba(8, 10, 15, 0.58)",
      colorBorder: "rgba(255, 255, 255, 0.16)",
      hoverBorderColor: "rgba(255, 255, 255, 0.16)",
      colorErrorBorder: "red",
      colorErrorBorderHover: "red",
      activeBorderColor: "rgba(255, 255, 255, 0.16)",
      activeShadow: "none",
      paddingBlock: 12,
      paddingInline: 14,
    },

    Menu: {
      itemBg: "transparent",
      itemColor: "#ffffff",
      itemHoverBg: "transparent",
      itemHoverColor: "#c084fc",
      itemActiveBg: "transparent",
      itemSelectedBg: "transparent",
      itemSelectedColor: "#a855f7",
      horizontalItemHoverBg: "transparent",
      horizontalItemSelectedBg: "transparent",
      horizontalItemSelectedColor: "#a855f7",
      subMenuItemBg: "transparent",
      popupBg: "var(--primary)",
    },
    Notification: {
      colorBgElevated: "#080a0f",
      colorText: "#ffffff",
      colorTextHeading: "#ffffff",
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <AntdApp>
        <HomePage />
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
