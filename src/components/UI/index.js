import { style } from "@mui/system";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "@mui/joy/Checkbox";
import Switch, { switchClasses } from "@mui/joy/Switch";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

const MModalContS = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
`;

export const MModal = (props) => {
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        sx={{
          bgcolor: "rgba(5, 147, 109, 0.3)",
        }}
      >
        <MModalContS>
          <div className="card-main-cont">{props.children}</div>
        </MModalContS>
      </Modal>
    </>
  );
};

const MTextInputLabelS = styled.div`
  margin-bottom: 10px;
  font-size: 13px;
  color: ${(props) => (props.foc ? "#0057FF" : "#000")};
  margin-left: 5px;
`;

const MTextInputContS = styled.div`
  width: auto;
  height: 42px;
  background-color: ${(props) => (props.foc ? "#E6F2FF" : "null")};
  border: ${(props) => (props.foc ? "1px solid #E6F2FF" : "1px solid #e0e0e0")};
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
  const [foc, setFoc] = useState(false);
  const handleFocus = () => {
    setFoc(true);
  };
  const handleBlur = () => {
    setFoc(false);
  };
  return (
    <>
      <div>
        {props.label ? (
          <MTextInputLabelS foc={foc}>{props.label}</MTextInputLabelS>
        ) : null}
        <MTextInputContS foc={foc}>
          {props.icon ? <MIconCont>{props.icon}</MIconCont> : null}
          {props.leftLabel ? (
            <MInputLabelCont>{props.leftLabel}</MInputLabelCont>
          ) : null}
          <MTextInputS
            {...props}
            foc={foc}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
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
  background-color: #fff;
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
  color: #017d5c;
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
  background-color: #017d5c;
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
  border-radius: 7px;
  position: relative;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.03);
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
  font-size: 14px;
  font-weight: 500;
  // background-color: #f9f9f9;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: #000;
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
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  padding: 3%;
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

const MPageHeaderRightButtonCont = styled.div`
  display: inline-flex;
  gap: 12px;
`;

export const MPageHeader = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <MPageHeaderContS>
        <MPageHeaderLabS>
          {props.back ? (
            <MButton
              onClick={() => navigate(-1)}
              style={{ marginRight: "22px", color: "#757575" }}
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
        <MPageHeaderRightButtonCont>
          {props.help ? (
            <MPageHeaderHelpButtS>
              <i class="ri-question-mark"></i>
            </MPageHeaderHelpButtS>
          ) : null}
          {props.rightContent ? props.rightContent : null}
        </MPageHeaderRightButtonCont>
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
  height: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const MHorLabLeftLabelContS = styled.div`
  width: 50%;
  height: 100%;
  font-size: 14px;
  color: #333333;
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
      {...props}
      variant="solid"
      sx={{
        color: "#bdbdbd",
        "&.Joy-checked": {
          color: "#0057FF ",
          background: "#E6F2FF",
          borderRadius: "5px",
        },
        "&.JoyCheckbox-root ": {
          borderStyle: "none",
          background: "#E6F2FF",
          borderRadius: "5px",
        },
        "&.JoyCheckbox-root:hover": {
          background: "#E6F2FF",
        },
      }}
    />
  );
};

export const MSwitch = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      onChange={(event) => setChecked(event.target.checked)}
      checked={checked}
      sx={(theme) => {
        return {
          "--Switch-track-width": "35px",
          "--Switch-track-height": "22px",
          "--Switch-thumb-size": "12px",
          "--Switch-thumb-background": "#fff",
          "--Switch-track-borderColor": "rgb(96, 94, 92)",
          "--Switch-track-background": "#e0e0e0",
          "&:hover": {
            "--Switch-track-borderColor": "rgb(50, 49, 48)",
            "--Switch-track-background": "#e0e0e0",
          },
          [`&.${switchClasses.checked}`]: {
            "--Switch-track-background": "#E6F2FF",
            "--Switch-thumb-background": "#0057FF",
            "&:hover": {
              "--Switch-track-background": "#E6F2FF",
            },
          },
          [`&.${switchClasses.disabled}`]: {
            "--Switch-thumb-color": "#C8C6C4",
            "--Switch-track-borderColor": "#C8C6C4",
          },
          [`&.${switchClasses.disabled}.${switchClasses.checked}`]: {
            "--Switch-track-background": "#C8C6C4",
            "--Switch-thumb-color": "#F3F2F1",
          },
        };
      }}
    />
  );
};
