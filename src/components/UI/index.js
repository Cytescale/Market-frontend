import { useState, useEffect } from "react";
import styled from "styled-components";

const MTextInputContS = styled.div`
  width: 100%;
  height: 32px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-radius: 8px;
`;

const MTextInputS = styled.input`
  height: 32px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  padding-left: 12px;
  outline: none;
  color: inherit;
`;

export const MTextInput = (props) => {
  return (
    <>
      <MTextInputContS>
        {props.icon ? <MIconCont>{props.icon}</MIconCont> : null}
        <MTextInputS {...props} />
      </MTextInputContS>
    </>
  );
};

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

const MFillButtonS = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #fff;
  background-color: #0057ff;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: 1px solid #dbdbdb;
  font-weight: 700;
`;

const MIconCont = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  color: inherit;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
`;

export const MButton = (props) => {
  return (
    <MButtonS {...props}>
      {props.icon ? <MIconCont>{props.icon}</MIconCont> : null}
      {props.children}
    </MButtonS>
  );
};

export const MFillButton = (props) => {
  return (
    <MFillButtonS {...props}>
      {props.icon ? <MIconCont>{props.icon}</MIconCont> : null}
      {props.children}
    </MFillButtonS>
  );
};

const MCardS = styled.div`
  background-color: #fff;
  width: 100%;
  z-index: 100;
  border-radius: 5px;
  margin-bottom: 54px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
`;

export const MCard = (props) => {
  return <MCardS>{props.children}</MCardS>;
};
