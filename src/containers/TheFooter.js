import React from "react";
import { CFooter, CCol } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <CCol xs="12">
        <div className="d-flex justify-content-center">
          <p>
            &copy; 2021,{" "}
            <a
              href="https://CheckVin.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              CheckVin.org.
            </a>
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p>
            Please contact us with any questions or comments you may have :
            info@CheckVin.org, +964 (0 750 183 6009)
          </p>
        </div>
      </CCol>
    </CFooter>
  );
};

export default React.memo(TheFooter);
