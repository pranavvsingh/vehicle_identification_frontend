import React, { useState, useEffect } from "react";
import RenderHTML from "react-render-html";
import { apiData, apiDataPost } from "src/Api/Api";

const Autocheck = () => {
  const [autoCheckPage, setAutoCheckPage] = useState("");

  const checkPaymentStatus = async() => {
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const data = {
      email,
      phone,
    }
    const paymentStatus = await apiDataPost("get_payment",data);
    console.log("paymentStatus:",typeof(paymentStatus.data.data[0].payment))
    console.log("paymentStatus:",(paymentStatus.data.data[0].payment))
    if(paymentStatus.data.status === 200 && paymentStatus.data.data[0].payment === 1 && paymentStatus.data.data[0].autocheck === 1){
      getAutoCheckPage();
    }
  };

  const getAutoCheckPage = async()=>{
    const vincode = localStorage.getItem("vin");
    const getAutoCheck = await apiData(`autocheck?vincode=${vincode}`);
    console.log("GET_AUTO_CHECK:", getAutoCheck);
    setAutoCheckPage(getAutoCheck.data.autocheck_data);
  }

  useEffect(() => {
    checkPaymentStatus()
  });

  return <>{RenderHTML(autoCheckPage)}</>;
};

export default Autocheck;
