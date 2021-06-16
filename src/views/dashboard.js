import React, { useReducer } from "react";
import { CCol, CInputGroup, CInputGroupAppend, CButton } from "@coreui/react";
import VinReport from "./VinReport";
import LastCheck from "../reusable/lastCheck.js";
import SearchBar from "material-ui-search-bar";
import {dashboardReducer} from "../reducers/component-reducer"
import { useDispatch } from 'react-redux'

const initialState = {
  vin:"",
  vinData:"",
  visible:false,
  visibleLastCheck:true,
};

const Dashboard = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);
  const {vin,  vinData,  visible,  visibleLastCheck} = state;
  const reduxDispatch = useDispatch();

  const callVin = () =>{
    var payment = "success";
    if(payment === "success"){
      reduxDispatch({type:"success",data:"success"})
      dispatch({type:"call_vin"})
    }else{
      reduxDispatch({type:"failure",data:"failure"})
    }
  }

  return (
    <>
      <h2 class="text-center"></h2>
      <h2 class="text-center">
        <i style={{ color: "#fff" }}>
          <strong>Best Website for Vehicle's Auction History Images</strong>
        </i>
      </h2>
      <br />
      <h3 class="text-center" style={{ color: "#fff" }}>
        <i style={{ color: "#fff" }}>
          <strong>Vehicle History Report by VIN</strong>
        </i>
      </h3>
      <br />
      <h4 class="text-center" style={{ color: "#fff" }}>
        <i>
          <strong>Never Trust Anyone When You Buy A Car.</strong>
        </i>
      </h4>
      <br />
      <div class="d-flex justify-content-center">
        <CCol md="4">
          <CInputGroup className="mb-12">
            <SearchBar value={vin} placeholder="Enter VIN....." onChange={e => dispatch({type:"field",field:"vin",value:e})} onCancelSearch={()=>dispatch({type:"clear_vin_data"})} />
            <CInputGroupAppend>
              <CButton type="button" color="primary" onClick={callVin}>
                Check
              </CButton>
            </CInputGroupAppend>
          </CInputGroup>
        </CCol>
      </div>

      {visible && <VinReport vin={vin} />}

      {visibleLastCheck && <LastCheck />}
    </>
  );
};

export default Dashboard;
