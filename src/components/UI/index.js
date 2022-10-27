import { style } from "@mui/system";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "@mui/joy/Checkbox";
import Switch, { switchClasses } from "@mui/joy/Switch";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import Popover from "@mui/material/Popover";
import Radio from "@mui/material/Radio";


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
          bgcolor: "rgba(243, 239, 236, 0.33)",
          backdropFilter:'blur(2px)', 
        }}
      >
        <MModalContS>
          <div className="card-main-cont">{props.children}</div>
        </MModalContS>
      </Modal>
    </>
  );
};

const MRadioButtonContS = styled.div`
  display: inline-flex;
  align-items: center;
  flex: 1;
  border-radius: 6px;
  width: 100%;
`;
const MRadioLabelS = styled.div`
  width: 100%;
  font-size: 12px;
  cursor: pointer;
`;

export const MRadioButton = (props) => {
  return (
    <MRadioButtonContS
      style={{
        background: `${props.value === props.selected ? "#E6F2FF" : "#fff"}`,
      }}
    >
      <Radio
        checked={props.value === props.selected ? true : false}
        onChange={props.handleChange}
        value={props.value}
        disableRipple
        sx={{
          fontSize: "13px",
          fontFamily: "poppins",
          color: "#E6F2FF",
          "& .MuiSvgIcon-root": {
            fontSize: 17,
          },
          "&:hover": {
            background: "transparent",
          },
          "&.Mui-checked": {
            color: "#0077E6",
          },
        }}
      />
      {props.label ? (
        <MRadioLabelS onClick={props.handleChange}>{props.label}</MRadioLabelS>
      ) : null}
    </MRadioButtonContS>
  );
};

export const MPopover = (props) => {
  return (
    <>
      <Popover
        elevation={0}
        open={props.open}
        anchorEl={props.childRef}
        onClose={props.handleClose}
        anchorOrigin={
          props.anchorOrigin
            ? props.anchorOrigin
            : {
                vertical: "bottom",
                horizontal: "center",
              }
        }
        transformOrigin={
          props.transformOrigin
            ? props.transformOrigin
            : {
                vertical: "top",
                horizontal: "center",
              }
        }
        style={{
          borderRadius:22,
          
        }}
      >
        <div className="popover-main-cont">{props.children}</div>
      </Popover>
    </>
  );
};

export const MTextInputLabelS = styled.div`
  margin-bottom: 7px;
  font-size: 13px;
  
  color: ${(props) => (props.foc ? "#0057FF" : "#353535")};
  margin-left: 5px;
`;

const MTextInputContS = styled.div`
  width: auto;
  height: ${(props) => (props.height ? props.height : "42px")};
  background-color: ${(props) => (props.foc ? "#f5f5f5" : "null")};
  border: ${(props) => (props.foc ? "1px solid #f5f5f5" : "1px solid #d9d9d9")};
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-radius: 8px;
`;

const MTextInputS = styled.input`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  outline: none;
  color: inherit;
  &::placeholder { 
    color: #ababab;
    opacity: 1;
  }
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
        <MTextInputContS {...props}>
          
          {props.icon ? <MIconCont style={{color:foc?"#000":"#bdbdbd"}}>{props.icon}</MIconCont> : null}
          {props.leftLabel ? (
            <MInputLabelCont>{props.leftLabel}</MInputLabelCont>
          ) : null}
          <MTextInputS
            {...props}
            foc={foc}
            style={{
              paddingLeft:`${props.icon || props.leftLabel?'7px':'0px'}`
            }}
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
  font-weight:500;
  color: #000;
  background-color: #fff;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 36px;
  cursor: pointer;
  pointer-events: all;

  outline: none;
  // border: 1px solid #e0e0e0;
  border: 1px solid #BEBEBE;
  &:hover{
    background-color: #f7f7f7;
  }
`;

const MFillButtonS = styled.button`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  font-family:inter;
  background-color: #0077e6;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 36px;
  cursor: pointer;
  outline: none;
  // border: 1px solid #dbdbdb;
  border-style:none;
  
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
            fontSize:props.style?props.style.fontSize? props.style.fontSize:'16px':'16px',
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
            fontSize: "16px",
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
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 100%;
  border-radius: 12px;
  position: relative;
  border: ${(props) => (props.borderless ? null : "1px solid #e0e0e0")};
  // box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.03);
  // box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.05);
`;



export const MCard = (props) => {
  return <MCardS {...props}>{props.children}</MCardS>;
};

const MCardFooterS = styled.div`
  position: relative;
  width: 100%;
  padding:22px;
  padding-top:3px;
  // border-top: 1px solid #e0e0e0;
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
  font-size: 17px;
  font-weight: 600;
  // background-color: #f9f9f9;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: #184A4E;
  // border-bottom: 1px solid #e0e0e0;
  flex-direction: row;
  padding:32px;
  padding-left: 22px;
  padding-bottom:3px;
`;

export const MCardHeader = (props) => {
  return (
    <MCardHeaderS
      {...props}
      style={{
        padding: props.pad ? props.pad : "0px",
        paddingBottom:"3px",
      }}
    >
      {props.children}
    </MCardHeaderS>
  );
};

const MNotiCardS = styled.div`
    display:inline-flex;
    gap:10px;
    width:100%;
    height:100%;
    background-color:#DBEAFE;
    padding:22px;
    border-radius:12px;
    color:#0094FF;
    font-size:13px;
`;

const MNotiCardInnerS = styled.div`
    display:flex;
    flex-direction: column;
    color:#0094FF;
    gap:10px;
    font-size:13px;
`;

const MNotiDisButtonS = styled.button`
width: fit-content;
background-color: transparent;
border: none;
outline: none;
padding: 0px;
color: #0094FF;
font-weight: 600;
`;

export const MNotiCard = (props)=>{
  return (
    <MNotiCardS style={{...props.style}}>
      <div className="noti-card-icon-cont"><i class="ri-information-line"></i></div>
      <MNotiCardInnerS>
          {props.children}
          {props.dismiss?<MNotiDisButtonS className="asv">Dismiss</MNotiDisButtonS>:null}
      </MNotiCardInnerS>
    </MNotiCardS>
  )
}


const MErrorCardS = styled.div`
      display:inline-flex;
      gap:10px;
      width:100%;
      height:100%;
      background-color:#FFC3C4;
      padding:22px;
      border-radius:12px;
      color:#E11317;
      font-size:13px;
`;


const MErrorCardInnerS = styled.div`
    display:flex;
    flex-direction: column;
    color:#E11317;
    gap:10px;
    font-size:13px;
`;

const MErrorDisButtonS = styled.button`
width: fit-content;
background-color: transparent;
border: none;
outline: none;
padding: 0px;
color: #E11317;
font-weight: 600;
`;


export const MErrorCard = (props)=>{
  return (
    <MErrorCardS style={{...props.style}}>
      <div className="noti-card-icon-cont"><i class="ri-ghost-line"></i></div>
      <MErrorCardInnerS>
          {props.children}
          {props.dismiss?<MErrorDisButtonS className="asv">Dismiss</MErrorDisButtonS>:null}
      </MErrorCardInnerS>
    </MErrorCardS>
  )
}

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

`;

const MPageHeaderLabS = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: #555555;
  display: flex;
  flex-direction: row;
  gap:7px;
  flex: 1;
  width: fit-content;
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
  padding-right:22px;
`;

const MPageHeaderBreadS = styled.div`
    display: flex;
     flex-direction: row;
     width: fit-content;
     height: fit-content;
     font-size: 14px;
    color: ${props => props.isLast?"#000":"#bdbdbd"}
`;

export const MPageHeaderBread = (props)=>{
  return<>
  <MPageHeaderBreadS {...props}>{props.children}</MPageHeaderBreadS>
  </>
}

export const MPageHeader = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <MPageHeaderContS
        style={{
           borderBottom:props.bottomBorderless?"none":"1px solid #e0e0e0",
          }}
      >
        <MPageHeaderLabS>
          {props.back ? (
            <MButton
              borderless
              onClick={() => navigate(-1)}
              style={{color: "#656565",fontSize:14 }}
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

const MPageHeaderCont2S = styled.div`
  width: auto;
  position: relative;
  height: 102px;
  min-height: 102px;
  max-height: 102px;
  padding: 3%;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 0px;
  border-bottom: 1px solid #e0e0e0;
`;
const MPageHeaderLab2S = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #555555;

  width: auto;
  align-items: center;
`;

export const MPageHeader2 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <MPageHeaderCont2S>
        <MPageHeaderLab2S>
          {props.icon ? (
            <div className="app-page-head-cont-ico-cont">{props.icon}</div>
          ) : null}
          {props.children}
        </MPageHeaderLab2S>

        <MPageHeaderRightButtonCont
          style={{
            position: "absolute",
            right: "22px",
            top: 0,
            height: "100%",
            alignItems: "center",
            bottom: 0,
          }}
        >
          {props.help ? (
            <MPageHeaderHelpButtS>
              <i class="ri-question-mark"></i>
            </MPageHeaderHelpButtS>
          ) : null}
          {props.rightContent ? props.rightContent : null}
        </MPageHeaderRightButtonCont>
      </MPageHeaderCont2S>
    </>
  );
};

const MDropButtonS = styled.button`
  position: relative;
  height: 36px;
  min-width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #000;
  background-color: #fff;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 36px;
  cursor: pointer;
  outline: none;
  border: 1px solid #BEBEBE;
  &:hover{
    background-color:#f1f1f1;
  }
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
            fontSize:18,
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
  height: 150px;
  resize: none;
  border-radius: 4px;
  outline: none;
  border: 1px solid #d9d9d9;
  padding: 12px;
  font-family:poppins;
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
  height: auto;
  border: 3px dashed #e0e0e0;
  background-color:#FAFAFA;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MFilePicker = (props) => {
  return (
    <div>
      
      <MFilePickerContS {...props}>
        <div className="file-picker-inner-cont">
          {/* <div className="file-picker-head-cont">Upload an Image</div> */}
          <div className="file-picker-lab-cont">
            <button
            className="file-picker-upload-button"
            onClick={props.onClickEvent}
            ><i class="ri-upload-2-line"></i>Upload Files</button>
          </div>
          <div className="file-picker-sub-cont">Images should be horizontal, at least <span className="file-pick-txt-high">1280x720px</span>, and 72 DPI (dots per inch).The size limit is <span className="file-pick-txt-high">5Mb</span></div>
          {/* <div className="file-picker-learn-more">Learn more</div> */}
        </div>
      </MFilePickerContS>
    </div>
  );
};

const MHorLabContS = styled.div`
  width: 100%;
  height: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const MHorLabLeftLabelContS = styled.div`
  width: 50%;
  height: 100%;
`;

const MHorLabInnerContS = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  justify-content: end;
  align-items: center;
`;

const MHorPriLab = styled.div`
  font-size: 14px;
  display: flex;
  font-weight: 600;
  color: #454545;
`;
const MHorSecLab = styled.div`
  font-size: 12px;
  color: #858585;
  margin-top: 1px;
`;

export const MHorLabelCont = (props) => {
  return (
    <div>
      <MHorLabContS {...props}>
        <MHorLabLeftLabelContS>
          <MHorPriLab>{props.leftLabel}</MHorPriLab>
          <MHorSecLab>{props.leftSecLabel}</MHorSecLab>
        </MHorLabLeftLabelContS>
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
          width:14,
          height:14,
          background: "#fff",
          border: "2px solid #e0e0e0",
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
  useEffect(() => {
    setChecked(props.checked);
  }, []);

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

const MPageLabelS = styled.div`
  font-size: 20px;
  color: #555555;
  // color: #0077e6;
  padding-left: 12px;
  padding-top:22px;
  padding-bottom:22px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: start;
`;

const MPagePriLabelS = styled.div`
  font-size: 26px;
  font-weight:400;
  // color: #184A4E;
  color: #353535;
  width: 100%;
  display: flex;
  justify-content: start;
`;

const MPageSecLabelS = styled.div`
  font-size: 13px;
  margin-top: 1px;
  color: #959595;
  // color: #0077e6;
  width: 100%;
  display: flex;
  justify-content: start;
`;

export const MPageLabel = (props) => {
  return (
    <>
      <MPageLabelS>
        <div className="page-header-left-cont">
          <MPagePriLabelS>{props.priLabel}</MPagePriLabelS>
          <MPageSecLabelS>{props.secLabel}</MPageSecLabelS>
        </div>
        <div className="page-header-right-cont">
          {props.rightContent}
          
        </div>
      </MPageLabelS>
    </>
  );
};
