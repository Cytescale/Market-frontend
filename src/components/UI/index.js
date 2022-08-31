import { useState, useEffect } from "react";
import styled from "styled-components";

const MButtonS = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #0057ff;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: 1px solid #dbdbdb;
`;

export const MButton = (props) => {
  return (
    <MButtonS {...props}>
      {props.icon ? <div className="mbutton-icon-cont">{props.icon}</div> : null}
      {props.children}
    </MButtonS>
  );
};
