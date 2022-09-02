import { style } from "@mui/system";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";

const MTextInputLabelS = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  margin-left: 5px;
`;

const MTextInputContS = styled.div`
  width: auto;
  height: 42px;
  background-color: #f8f9fa;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-radius: 8px;
`;

const MTextInputS = styled.input`
  height: 42px;
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
      <div>
        {props.label ? (
          <MTextInputLabelS>{props.label}</MTextInputLabelS>
        ) : null}
        <MTextInputContS>
          {props.icon ? <MIconCont>{props.icon}</MIconCont> : null}
          {props.leftLabel ? (
            <MInputLabelCont>{props.leftLabel}</MInputLabelCont>
          ) : null}
          <MTextInputS {...props} />
          {props.rightContent ? (
            <MInputRightCont>{props.rightContent}</MInputRightCont>
          ) : null}
        </MTextInputContS>
      </div>
    </>
  );
};

const MInputLabelCont = styled.div`
  width: auto;
  height: 26px;
  font-size: 11px;
  display: flex;
  border-radius: 100px;
  border: 1px solid #bdbdbd;
  padding-left: 12px;
  padding-right: 12px;
  color: inherit;
  justify-content: center;
  align-items: center;
`;

const MInputRightCont = styled.div`
  width: auto;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MButtonS = styled.button`
  height: 36px;
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
  height: 36px;
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
`;

export const MButton = (props) => {
  return (
    <MButtonS
      {...props}
      style={{
        ...props.style,
        background: `${props.borderless ? "transparent" : null}`,
        border: `${props.borderless ? "none" : null}`,
        width: props.hfill ? "100%" : "auto",
      }}
    >
      {props.icon ? (
        <MIconCont
          style={{
            fontSize: "18px",
            marginRight: props.children ? "5px" : "0px",
          }}
        >
          {props.icon}
        </MIconCont>
      ) : null}
      {props.children}
    </MButtonS>
  );
};

export const MFillButton = (props) => {
  return (
    <MFillButtonS
      {...props}
      style={{
        ...props.style,
        width: props.hfill ? "100%" : "auto",
      }}
    >
      {props.icon ? (
        <MIconCont
          style={{
            fontSize: "18px",
            marginRight: props.children ? "5px" : "0px",
          }}
        >
          {props.icon}
        </MIconCont>
      ) : null}
      {props.children}
    </MFillButtonS>
  );
};

const MCardS = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 5px;
  position: relative;
  border: 1px solid #e0e0e0;
  // box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
`;

export const MCard = (props) => {
  return <MCardS {...props}>{props.children}</MCardS>;
};

const MCardFooterS = styled.div`
  position: relative;
  width: 100%;

  border-top: 1px solid #e0e0e0;
  flex-direction: row;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
`;

export const MCardFooter = (props) => {
  return <MCardFooterS {...props}>{props.children}</MCardFooterS>;
};

const MCardHeaderS = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  font-weight: 600;
  color: #555555;

  border-bottom: 1px solid #e0e0e0;
  flex-direction: row;
`;

export const MCardHeader = (props) => {
  return (
    <MCardHeaderS
      {...props}
      style={{
        padding: props.pad ? props.pad : "0px",
      }}
    >
      {props.children}
    </MCardHeaderS>
  );
};

const MPageHeaderContS = styled.div`
  width: auto;
  position: relative;
  height: 92px;
  min-height: 92px;
  max-height: 92px;
  padding: 6%;
  display: flex;
  align-items: center;
  padding-top: 0px;
  padding-bottom: 0px;
  border-bottom: 1px solid #e0e0e0;
`;

const MPageHeaderLabS = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #555555;
  display: flex;
  flex: 1;
  width: auto;
  align-items: center;
`;

const MPageHeaderHelpButtS = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 320px;
  background: #fff;
  border-style: none;
  border: 1px solid #e0e0e0;
  font-size: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MPageHeader = (props) => {
  return (
    <>
      <MPageHeaderContS>
        <MPageHeaderLabS>
          {props.back ? (
            <MButton
              style={{ marginRight: "22px" }}
              icon={<i class="ri-arrow-left-line"></i>}
            >
              Back
            </MButton>
          ) : null}
          {props.icon ? (
            <div className="app-page-head-cont-ico-cont">{props.icon}</div>
          ) : null}
          {props.children}
        </MPageHeaderLabS>
        <div>
          <MPageHeaderHelpButtS>
            <i class="ri-question-mark"></i>
          </MPageHeaderHelpButtS>
        </div>
      </MPageHeaderContS>
    </>
  );
};

const MDropButtonS = styled.button`
  position: relative;
  height: 36px;
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

export const MDropButton = (props) => {
  return (
    <div>
      {props.label ? <MTextInputLabelS>{props.label}</MTextInputLabelS> : null}
      <MDropButtonS
        {...props}
        style={{
          ...props.style,
          width: props.hfill ? "100%" : "auto",
        }}
      >
        {props.buttonlabel}
        <MIconCont
          style={{
            position: "absolute",
            right: "12px",
          }}
        >
          <i class="ri-arrow-down-s-line"></i>
        </MIconCont>
      </MDropButtonS>
    </div>
  );
};

const MTextAreaS = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  border-radius: 4px;
  outline: none;
  border: 1px solid #e0e0e0;
  padding: 8px;
  font-size: 14px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const MTextArea = (props) => {
  return (
    <div>
      {props.label ? <MTextInputLabelS>{props.label}</MTextInputLabelS> : null}
      <MTextAreaS {...props} />
    </div>
  );
};

const MFilePickerContS = styled.div`
  width: 100%;
  height: 100px;
  border: 2px dashed #bdbdbd;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MFilePicker = (props) => {
  return (
    <div>
      {props.label ? <MTextInputLabelS>{props.label}</MTextInputLabelS> : null}
      <MFilePickerContS {...props}>
        <div className="file-picker-inner-cont">
          <div className="file-picker-lab-cont">Add file</div>
          <div className="file-picker-sub-cont">Accepts images or videos</div>
        </div>
      </MFilePickerContS>
    </div>
  );
};

const MHorLabContS = styled.div`
  width: 100%;
  height: 42px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const MHorLabLeftLabelContS = styled.div`
  width: 50%;
  height: 100%;
  font-size: 13px;
  display: flex;
  align-items: center;
`;

const MHorLabInnerContS = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const MHorLabelCont = (props) => {
  return (
    <div>
      <MHorLabContS {...props}>
        <MHorLabLeftLabelContS>{props.leftLabel}</MHorLabLeftLabelContS>
        <MHorLabInnerContS>{props.children}</MHorLabInnerContS>
      </MHorLabContS>
    </div>
  );
};

export const MCheckbox = (props) => {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      {...props}
    />
  );
};
