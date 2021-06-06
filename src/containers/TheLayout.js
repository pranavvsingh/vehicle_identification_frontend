import React from "react";
import { TheContent, TheSidebar, TheFooter, TheHeader } from "./index";
// import BackgroundImage from "../reusable/backgroundImage.js";
import backgroundImage from "../assets/images/Web_Photo_Editor.jpg";
import BackgroundImage from "react-background-image";

const TheLayout = () => {
  return (
    <div>
      <div className="c-app c-default-layout">
        <div
          class="bg_image"
          style={{
            backgroundImage: "url(" + backgroundImage + ")",
            backgroundSize: "cover",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="c-body">
            <div className="c-wrapper">
              <TheHeader />
              <TheContent />
            </div>
            <TheFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheLayout;
