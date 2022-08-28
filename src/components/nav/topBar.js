import React, { useState } from "react";
import { Grommet, Box, Heading, Paragraph, Text } from "grommet";

const TopBar = (props) => {
  return (
    <>
      <div className="app-topbar-main-cont">
        <div className="topbar-page-lab-cont">
          <Heading level={5} margin={0}>
            Page label
          </Heading>
        </div>
      </div>
    </>
  );
};

export default TopBar;
