import React, { useState } from "react";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import styled from "styled-components";

const MTopBarS = styled.div`
  width: 100%;
  height: 52px;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
  display: inline-flex;
  z-index: 30;
  color: #fff;
`;

const MTopBarRightS = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 22px;
`;

const MBreadCurr = styled.div`
  font-size: 14px;
  color: #0057ff;
`;

const TopBar = (props) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Products
    </Link>,
    <MBreadCurr key="2" color="#0057FF">
      Add Product
    </MBreadCurr>,
  ];
  return (
    <>
      <MTopBarS>
        <MTopBarRightS>
          <Breadcrumbs separator={<i class="ri-arrow-right-s-line" />}>
            {breadcrumbs}
          </Breadcrumbs>
        </MTopBarRightS>
      </MTopBarS>
    </>
  );
};

export default TopBar;
