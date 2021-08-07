import React, { useEffect, useState } from "react";
import { TheContent, TheFooter, TheHeader } from "./index";
import backgroundImage from "../assets/images/Web_Photo_Editor.jpg";
import { securedApiData } from "src/Api/Api";
import { useDispatch } from "react-redux";
import { getData, removeData } from "src/utils/localStorageUtil";
import { useHistory } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const TheLayout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  /* eslint-disable react-hooks/exhaustive-deps */
  const getUserProfile = async () => {
    setLoading(true);
    try {
      //TODO: need to change API here!
      const response = await securedApiData("getUser?id=6");
      setLoading(false);
      if (response instanceof Error) throw Error;
      const userData = response.data.data[0];
      dispatch({ type: "login", payload: { userData } });
    } catch (err) {
      dispatch({ type: "logout" });
      removeData("token");
      toast.error("Your Session Expired!. Please login again.");
      history.push("/dashboard");
    }
  };

  useEffect(() => {
    const token = getData("token");
    if (token) getUserProfile();
  }, []);

  useEffect(() => {
    window.addEventListener("storage", (event) => {
      const { key, storageArea: storage } = event;
      if (key === "token" || !storage?.length) {
        getUserProfile();
      }
    });
    return () => {
      window.removeEventListener("storage", () => {
        console.log("Storage listener removed...");
      });
    };
  }, []);

  return isLoading ? (
    <div className="container mh-100 d-flex flex-column justify-content-center align-items-center min-vh-100">
      <Spinner
        animation="border"
        role="status"
        variant="primary"
        className="custom-loader"
      />
      <h2>Loading...</h2>
    </div>
  ) : (
    <div>
      <div className="c-app c-default-layout">
        <div
          className="bg_image"
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
