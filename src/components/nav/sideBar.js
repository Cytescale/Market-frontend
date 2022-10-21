import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";
import {
  MModal,
  MCard,
  MCardFooter,
  MButton,
  MTextInput,
  MCardHeader,
  MDropButton,
  MFillButton,
  MPopover,
  MErrorCard,
  MNotiCard
} from "../UI";
import { padding } from "@mui/system";



const AccLogModalCont = (props) => {
  return (
    <MCard>
      <MCardHeader pad={22}>Account Logout</MCardHeader>
      <div className="prod-tab-del-mod-cont">
      <MErrorCard dismiss style={{marginBottom:22,}}>
            This is a test notifiaction card
              This is a test notifiaction card
              This is a test notifiaction card              
            </MErrorCard>
        <div className="prod-tab-del-mod-butt-cont">
        <MButton hfill style={{ marginBottom: "12px" }}>
          Cancel
        </MButton>
        <MFillButton hfill style={{ backgroundColor: "#FF6839" }}>
          Confirm Logout
        </MFillButton>
        </div>
      </div>
    </MCard>
  );
};


export const SideBarActionButton = (props) => {
  const location = useLocation();
  const isActive = location.pathname.includes(props.toLink);

  return (
    <div
      className={`sidebar-button-cont ${
        isActive ? "sidebar-button-selec-cont" : ""
      }`}
      
    >
      <button className="sidebar-act-button" {...props}
       style={{
        width:props.expanded?"100%":'42px',
        height:props.expanded?"36px":'42px',
        padding:!props.expanded??"0px",
        paddingLeft:props.expanded?"12px":"null",
        justifyContent:props.expanded?"start":"center",
        fontSize:props.expanded??"16px",
      }}  
      >
        {props.icon}
        <span className="sidebar-button-lab">{props.label}</span>
      </button>
    </div>
  );
};

export const SideBarLinkButton = (props) => {
  const location = useLocation();
  const isActive = location.pathname.includes(props.toLink);

  return (
    <div
      className={`sidebar-button-cont ${
        isActive ? "sidebar-button-selec-cont" : ""
      }`}
      style={{
        width:props.expanded?"100%":'42px',
        height:props.expanded?"36px":'42px',
        padding:!props.expanded??"0px",
        fontSize:props.expanded??"16px",
      }}
    >
      <Link
      className={`sidebar-button-lnk ${
        isActive ? "sidebar-button-lnk-selec-cont" : ""
      }`}

      to={props.toLink}
     style={{
      width:props.expanded?"100%":'42px',
      height:props.expanded?"36px":'42px',
      padding:!props.expanded??"0px",
      paddingLeft:props.expanded?"12px":"null",
      justifyContent:props.expanded?"start":"center",
      fontSize:props.expanded??"16px",
    }}
      >
        {props.icon}
        {props.expanded?<span className="sidebar-button-lab">{props.label}</span>:null}
      </Link>
    </div>
  );
};

export const DarkSideBarButton = (props) => {
  return (
    <div
      className={`sidebar-button-cont`}
    >
      <button className="sidebar-dark-button" {...props}
        style={{
          width:props.expanded?"100%":'42px',
          height:props.expanded?"36px":'42px',
          padding:!props.expanded??"0px",
          fontSize:props.expanded??"16px",
        }}
      >
        {props.icon}
        {props.expanded?<span className="sidebar-dark-butt-lab">{props.label}</span>:null}
      </button>
    </div>
  );
};

export const BorderSideBarButton = (props) => {
  return (
    <div
      className={`sidebar-button-cont`}
    >
      <button className="sidebar-border-button" {...props}
        style={{
          width:props.expanded?"100%":'42px',
          height:props.expanded?"36px":'42px',
          padding:!props.expanded??"0px",
          fontSize:props.expanded??"16px",
        }}
      >
        {props.icon}
        {props.expanded?<span className="sidebar-dark-butt-lab">{props.label}</span>:null}
      </button>
    </div>
  );
};


const SideBarLabel = (props) => {
  return (
    <>
       {props.expanded?<div className="sidebar-lab-cont">{props.label}</div>:null}
    </>
  );
};

const CompanyLogo = (props) => {
  return (
    <>
      <div className="sidebar-comp-logo-cont">
        <div className="sidebar-comp-logo-outr-cont"
        style={{
          width:props.expanded?"52px":"32px",
          height:props.expanded?"52px":"32px",
        }}
        >
        <svg
          className="sidebar-logo-ico"
          width="59"
          height="20"
          viewBox="0 0 59 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.56763 9.18893C3.79306 14.6669 10.3422 22.336 18.7353 9.18893C27.1283 -3.95817 36.5387 3.21297 39.0821 8.69093C41.7314 16.3269 49.5632 23.3078 56.5676 11.1809"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        </div>
        {/* <span className="sidebar-logo-lable">MARKET</span> */}
      </div>
    </>
  );
};

const AddProductModal = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <MCard>
        <MCardHeader pad={22}>Add Product</MCardHeader>
        <div className="app-prod-add-form-inner">

          <div className="app-prod-add-form-data-cont">
            <MTextInput
              label="Product title"
              placeholder="Enter product title"
            />
          </div>
          <div className="app-prod-add-form-data-cont">
            <MDropButton
              label="Product type"
              buttonlabel="Not selected"
              hfill
            ></MDropButton>
          </div>
          <div className="app-prod-add-form-data-cont">
            <MTextInput
              label="Product Price"
              icon={<i class="ri-money-dollar-circle-line"></i>}
              placeholder="Enter product price"
            />
          </div>
        </div>
        <MCardFooter>
          <div className="app-prod-add-footer-inner">
            <MButton
              icon={<i class="ri-close-line"></i>}
              style={{ marginRight: "12px" }}
            >
              Cancel
            </MButton>
            <MButton icon={<i class="ri-draft-line"></i>}>Draft</MButton>
            <div className="app-prod-add-form-footer-right-cont"></div>
            <MFillButton
              onClick={(e) => {
                props.handleClose();
                navigate("/productname/edit");
              }}
            >
              Next
            </MFillButton>
          </div>
        </MCardFooter>
      </MCard>
    </>
  );
};

const SideBar = (props) => {
  const navigate = useNavigate();

 const [expanded,setExpanded] = useState(true);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [accLogModVis, setAccLogModVis] = React.useState(false);
  const handleAccLogOpen = () => setAccLogModVis(true);
  const handleAccLogClose = () => setAccLogModVis(false);

  const [profPopVisi, setProfPopVisi] = useState(null);
  const handleProfPopClose = () => {
    setProfPopVisi(null);
  };
  const profPopVisiBool = Boolean(profPopVisi);

  return (
    <>
      <div className="app-sidebar-cont"
      style={{
        width:expanded?"210px":"fit-content",
        padding:12,
      }}
      
      >
        <CompanyLogo expanded={expanded}/>
        <MModal open={open} handleClose={handleClose}>
          <AddProductModal navigate={navigate} handleClose={handleClose} />
        </MModal>
        <MModal open={accLogModVis} handleClose={handleAccLogClose}>
          <AccLogModalCont
            navigate={navigate}
            handleClose={handleAccLogClose}
          />
        </MModal>
        <MPopover
          open={profPopVisiBool}
          handleClose={handleProfPopClose}
          childRef={profPopVisi}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <div className="app-side-bar-popover-cont">
            <MButton
              
              borderless
              icon={<i class="ri-user-3-line"></i>}
              onClick={() => {
                handleProfPopClose();
                navigate("/profile");
              }}
            >
              Profile
            </MButton>
            <MButton
              style={{ color: "#FF6839" }}
              borderless
              icon={<i class="ri-logout-box-r-line"></i>}
              onClick={() => {
                handleProfPopClose();
                handleAccLogOpen();
              }}
            >
              Logout
            </MButton>
          </div>
        </MPopover>
        <div className="app-sidebar-top-cont">
          {/* <SideBarLabel label="PRODUCT" /> */}
          <DarkSideBarButton
            icon={<i class="ri-add-line"></i>}
            label={`ADD PRODUCT`}
            expanded={expanded}
            onClick={(e) => {
              handleOpen();
            }}
          />

          <SideBarLabel label="MENU" expanded={expanded}/>
          <SideBarLinkButton
          expanded={expanded}
            toLink="/home"
            icon={<i class="ri-home-line"></i>}
            label={`Home`}
          />
          <SideBarLinkButton
          expanded={expanded}
            toLink="/analytics"
            icon={<i class="ri-bar-chart-line"></i>}
            label={`Analytics`}
          />
          <SideBarLinkButton
            toLink="/customers"
            expanded={expanded}
            icon={<i class="ri-group-line"></i>}
            label={`Customers`}
          />
          <SideBarLinkButton
            selected={true}
            toLink="/products"
            expanded={expanded}
            icon={<i class="ri-handbag-line"></i>}
            label={`Products`}
          />
          <SideBarLinkButton
            selected={false}
            toLink="/earnings"
            expanded={expanded}
            icon={<i class="ri-coin-line"></i>}
            label={`Earnings`}
          />
          
          <div className="sidebar-div-cont" />
        </div>
        <div className="app-sidebar-bottom-cont"
        style={{
          padding:12,
        }}        
        >
          <SideBarActionButton
            toLink="/profile"
            expanded={expanded}
            onClick={(e) => {
              setProfPopVisi(e.currentTarget);
            }}
            icon={
              <Avatar
                size="sm"
                sx={{
                  background: "#05936D",
                }}
              >
                EM
              </Avatar>
            }
            label={`${expanded?'Profile':''}`}
          />
          <BorderSideBarButton
            selected={false}
            expanded={expanded}
            icon={
              <svg
                className="sidebar-button-ico"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_15_66)">
                  <path
                    d="M16 29.8333C8.63596 29.8333 2.66663 23.864 2.66663 16.5C2.66663 9.136 8.63596 3.16667 16 3.16667C23.364 3.16667 29.3333 9.136 29.3333 16.5C29.3333 23.864 23.364 29.8333 16 29.8333ZM16 27.1667C18.8289 27.1667 21.542 26.0429 23.5424 24.0425C25.5428 22.0421 26.6666 19.329 26.6666 16.5C26.6666 13.671 25.5428 10.9579 23.5424 8.95753C21.542 6.95714 18.8289 5.83334 16 5.83334C13.171 5.83334 10.4579 6.95714 8.45749 8.95753C6.4571 10.9579 5.33329 13.671 5.33329 16.5C5.33329 19.329 6.4571 22.0421 8.45749 24.0425C10.4579 26.0429 13.171 27.1667 16 27.1667ZM14.6666 20.5H17.3333V23.1667H14.6666V20.5ZM17.3333 18.3067V19.1667H14.6666V17.1667C14.6666 16.813 14.8071 16.4739 15.0571 16.2239C15.3072 15.9738 15.6463 15.8333 16 15.8333C16.3787 15.8333 16.7497 15.7257 17.0697 15.5231C17.3897 15.3205 17.6456 15.0312 17.8077 14.6888C17.9697 14.3464 18.0311 13.9651 17.9849 13.5891C17.9386 13.2132 17.7866 12.8581 17.5464 12.5652C17.3062 12.2723 16.9878 12.0536 16.6283 11.9346C16.2687 11.8156 15.8827 11.8012 15.5152 11.8929C15.1477 11.9847 14.8138 12.179 14.5524 12.4531C14.291 12.7272 14.1129 13.0699 14.0386 13.4413L11.4226 12.9173C11.5848 12.1068 11.9593 11.3538 12.5079 10.7355C13.0564 10.1171 13.7593 9.65545 14.5447 9.39776C15.3302 9.14008 16.1699 9.09559 16.9782 9.26882C17.7865 9.44206 18.5342 9.82682 19.1451 10.3838C19.7559 10.9407 20.2079 11.6499 20.4548 12.4388C20.7017 13.2276 20.7347 14.0679 20.5504 14.8737C20.3662 15.6796 19.9712 16.422 19.406 17.0252C18.8407 17.6283 18.1255 18.0706 17.3333 18.3067Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_15_66">
                    <rect
                      width="32"
                      height="32"
                      fill="currentColor"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            label={`Support`}
          />
          
        </div>
      </div>
    </>
  );
};

export default SideBar;
