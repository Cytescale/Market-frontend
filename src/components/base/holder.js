import React, { useState } from "react";

export const BaseCont = (props) => {
  return (
    <>
      <div className="app-base-cont">{props.children}</div>
    </>
  );
};

export const InnerCont = (props) => {
  return (
    <>
      <div className="app-inner-base-cont">{props.children}</div>
    </>
  );
};

export const PageCont = (props) => {
  return (
    <>
      <div className="app-page-base-cont">{props.children}</div>
    </>
  );
};
