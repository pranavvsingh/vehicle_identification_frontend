import React, { useState,useEffect } from "react";
import { CCol, CButton } from "@coreui/react";
import { useHistory, useLocation } from 'react-router-dom';
import { apiDataPost } from "../Api/Api";


const Redirect = () => {
  const [paymentStatus, setPaymentStatus] = useState("");
  const history = useHistory();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");

  const checkPaymentStatus = async()=>{
    const data = {
        token:token,
    }
    const response = await apiDataPost("redirect",data);
    if(response){
    if(response.data === "success"){
        setPaymentStatus("Payment success")
    }else{
        setPaymentStatus("Payment Failed")
    }
}
  }

  useEffect(() => {
    checkPaymentStatus()
  });

  

  const redirect = async() =>{
      if(paymentStatus === "Payment success"){
        const email = (localStorage.getItem("email"))?localStorage.getItem("email"):null
        const phone = (localStorage.getItem("phone"))?localStorage.getItem("phone"):null
        const carafax = (localStorage.getItem("carafax"))?localStorage.getItem("carafax"):0
        const autocheck = (localStorage.getItem("autocheck"))?localStorage.getItem("autocheck"):0
        const image = (localStorage.getItem("image"))?localStorage.getItem("image"):0
        const data = {
            "email":email,
            "phone":phone,
            "payment":1,
            "carafax":carafax,
            "autocheck":autocheck,
            "image":image,
        }
        const saveUserPaymentDetails = await apiDataPost("set_payment",data);
        if(saveUserPaymentDetails){
        if(saveUserPaymentDetails.data.status === 200){
            history.push({
                pathname: '/autocheck',
                state: { detail: "success" }
              });
        }else{
            alert("Something went wrong!")
        }
      }else{
        alert("Server Error!")
      }
      }else{
        alert("payment failed")
        history.push({
            pathname: '/dashboard',
            state: { detail: "failed" }
          })
      }
  }

  return (
    <>
    <CCol>
        <div class="d-flex justify-content-center">
        <h3 style = {{color:"#fff",}}>{paymentStatus}</h3>
        </div>
        <br/>
        <div class="d-flex justify-content-center">
        <CButton type="button" color="primary" onClick={redirect}>Done</CButton>
        </div>
    </CCol>
     </>
  );
};

export default Redirect;
