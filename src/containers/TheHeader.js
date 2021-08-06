import { useSelector } from "react-redux";
import {
  CHeader,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
} from "@coreui/react";
import ReactCountryFlag from "react-country-flag";

const TheHeader = () => {
  /* const sidebarShow = useSelector((state) => state.changeState.sidebarShow);
  const toggleSidebar = () => {
    const val = [true, "responsive"].includes(sidebarShow)
      ? false
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };
    const toggleSidebarMobile = () => {
    const val = [false, "responsive"].includes(sidebarShow)
      ? true
      : "responsive";
    dispatch({ type: "set", sidebarShow: val });
  };*/

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <CHeader withSubheader>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink>
            <h2>
              <strong>CheckVIN</strong>
            </h2>
          </CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/dashboard">
            <strong>Dashboard</strong>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/tutorials">
            <strong>Tutorials</strong>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/carfax">
            <strong>Carfax</strong>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/autocheck">
            <strong>Autocheck</strong>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/auction">
            <strong>Auction History Images</strong>
          </CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/packages">
            <strong>Packages</strong>
          </CHeaderNavLink>
        </CHeaderNavItem>
        {isLoggedIn ? (
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/profile">
              <strong>Profile</strong>
            </CHeaderNavLink>
          </CHeaderNavItem>
        ) : (
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/auth">
              <strong>Login</strong>
            </CHeaderNavLink>
          </CHeaderNavItem>
        )}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <p style={{ margin: 10 }}>Language</p>
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: "2em",
            height: "2em",
            color: "fff",
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#fff",
          }}
          title="GB"
        />
        <ReactCountryFlag
          countryCode="TJ"
          svg
          style={{
            width: "2em",
            height: "2em",
            color: "fff",
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#fff",
          }}
          title="TJ"
        />
        <ReactCountryFlag
          countryCode="SA"
          svg
          style={{
            width: "2em",
            height: "2em",
            color: "fff",
            margin: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#fff",
          }}
          title="SA"
        />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
