import React, { useState } from "react";
import { Grommet, Box, Heading, Paragraph, Text } from "grommet";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

const TopBar = (props) => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      MUI
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/">
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];
  return (
    <>
      <div className="app-topbar-main-cont">
        <div className="topbar-page-lab-cont">
          <Breadcrumbs
            separator={<i class="ri-arrow-right-s-line"></i>}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
      </div>
    </>
  );
};

export default TopBar;
