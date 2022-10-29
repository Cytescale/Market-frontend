import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import Avatar from "@mui/joy/Avatar";
import { MButton, MCard, MCardFooter, MCardHeader, MDropButton, MErrorCard, MFillButton, MModal, MNotiCard, MPopover, MTextInput } from "../UI";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';


const ProductTypeData = [
  {
    id:1,
    prod_name:"Physical",
    desc:"This is some desciption of the product"
  },
  {
    id:2,
    prod_name:"Digital",
    desc:"This is some desciption of the product"
  },
  {
    id:3,
    prod_name:"Template",
    desc:"This is some desciption of the product"
  },
  {
    id:4,
    prod_name:"Art",
    desc:"This is some desciption of the product"
  },
  {
    id:5,
    prod_name:"Something",
    desc:"This is some desciption of the product"
  }
];

function onWheel(apiObj, ev){
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;
  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}


const ProdTypeCard = (props)=>{
  const visibility = React.useContext(VisibilityContext);
  
  return(<div 
    onClick={() => props.onClick()}
    
    style={{
      border:`${props.selected?'1px solid #AEC9FF':'1px solid #d9d9d9'}`,
      backgroundColor:`${props.selected?'#EDF3FF':'#fff'}`,   
    }}
    className="app-prod-type-card-cont"
  >
    <div className="app-prod-type-card-pic-cont"><div className="app-prod-type-card-pic"><i class="ri-file-3-line"></i></div></div>
    <div className="app-prod-type-card-name-cont">{props.data.prod_name}</div>
    <div className="app-prod-type-card-desc-cont">{props.data.desc}</div>
    
  </div>)
}
//now

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
const AddProductModal = (props) => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const handleItemClick =(itemId)=>()=>{
      setSelected(itemId)
    };

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
              <MTextInput
                label="Product Price"
                icon={<i class="ri-money-dollar-circle-line"></i>}
                placeholder="Enter product price"
              />
            </div>
            <div className="app-prod-add-form-data-cont">
               <div  className="app-prod-add-form-tit-cont">Product Type</div>
               <div className="app-prod-add-form-type-cont">
               <ScrollMenu 
               onWheel={onWheel}
               >
                {ProductTypeData.map((el,id)=>(
                    <ProdTypeCard 
                    itemId={id} 
                    key={id} 
                    data={el}
                    onClick={handleItemClick(id)}
                    selected={id === selected}
                    />
                ))}
                </ScrollMenu>
               </div>
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
              {/* <MButton icon={<i class="ri-draft-line"></i>}>Draft</MButton> */}
              <div className="app-prod-add-form-footer-right-cont"></div>
              <MFillButton
                onClick={(e) => {
                  props.handleClose();
                  navigate("/products/productname/edit");
                }}
              >
                Continue
              </MFillButton>
            </div>
          </MCardFooter>
        </MCard>
      </>
    );
  };
  
  

const SideBarS = styled.div`
width:230px;
height: 100vh;
position:relative;
overflow:hidden;
padding: 22px;     
 background-color:#111111;     
//background-color:#FAF4E8;     
z-index: 40;
`;


const SideBarSearchContS = styled.div`
background-color: #252525;
width: 100%;
height: 32px;
border-radius: 7px;
border: 1px solid rgba(0, 0, 0, 0.1);
display: inline-flex;
justify-content: center;
align-items: center;
padding-left: 12px;
font-size: 14px;
color: #858585;
`;

const SideBarSearchFildS = styled.input`
  border:none;
  outline:none;
  padding-left:6px;
  font-size:12px;
  background-color: transparent;

`;



const SideBarSearch = (props)=>{
    return(<>
    <SideBarSearchContS>
    <i class="ri-search-line"></i>
        <SideBarSearchFildS type={"text"} placeholder="Search Here"></SideBarSearchFildS>
    </SideBarSearchContS>
    </>);
}

const SideBarLinkButtonS = styled.div`
    width: 100%;
    border-radius: 7px;
    height: 32px;    
    color: #929292;
    font-size: 15px;
    overflow:hidden;
    &:hover{
        background:#252525;
        color:#fff;
    }
    
`;

const SideBarMenuLab = styled.div`
    font-size:10px;
    letter-spacing:3px;
    padding-left:0px;
    font-weight:600;
    color:#858585;
    font-family:inter;
    padding-left:3px;
    margin-top:22px;
    margin-bottom:5px;
`;


const SideBarLinkButton = (props) => {
    const location = useLocation();
    const isActive = location.pathname.includes(props.toLink);
    return (
        <>
        <SideBarLinkButtonS>
            <Link
            className={`
            app-side-link-butt-lnk
            ${isActive?'app-side-link-butt-lnk-selec':null}
            `}
            to={props.toLink}
            >   
            {props.icon}
            <span className="app-side-link-butt-lab">{props.label}</span>
            </Link>
        </SideBarLinkButtonS>
        </>
    );
  };

const SideBarLogoS = styled.div`
    color:#fff;
    margin-bottom: 22px;
`

const SideBarOptHolderS = styled.div`

`

const  SideBarHrCont= styled.div`
  width:100%;
  height:1px;
  border-radius:100px;
  background-color:#353535;
`;

const SideBarActButtonS = styled.button`
width: 100%;
 height: 32px;    
 display: flex;
 flex-direction: row;
 justify-content: center;
 align-items: center;
 gap: 4px;
 font-size: 13px;
 color: #fff;
 outline: none;
 border: none;
 border-radius: 7px;
 background-color: #0057FD;
 cursor: pointer;
 font-family: inter;
`;

const SideBarActButt = (props)=>{
    return(<>
        <SideBarActButtonS {...props}>
            {props.icon?props.icon:null}
            {props.children?props.children:null}
        </SideBarActButtonS>
    </>)
}

const SideBarProfileBarCont =  styled.div`
        display: inline-flex;
        flex-direction: row;
        width: 100%;
        height: 52px;
        flex: 1;
        gap:10px;     
        cursor:pointer;
        padding-left:12px;
        padding-right:12px;
        border-radius:7px;
        &:hover{
            background:#353535;
        }
`;

const SideBarBottButt  = styled.button`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    height: 32px;
    font-size: 13px;
    padding-left: 12px;
    border-radius: 7px;
    gap: 7px;
    background-color: transparent ;
    border-style: none;
    outline: none;
    color: #858585;
    cursor: pointer;
    &:hover{
        background-color: #353535;
        color: #fff;
    }
`

const SideBarProfilBar = (props)=>{
    return(
        <>
                <SideBarProfileBarCont {...props}> 
                    <div className="app-side-pro-bar-pic-cont">
                            <div className="app-side-pro-bar-pic"/>
                    </div>
                    <div className="app-side-pro-bar-name-cont">
                        <div className="app-side-pro-bar-name">{props.name}</div>
                        <div className="app-side-pro-bar-emal">{props.email}</div>
                    </div>
                    
                    <div className="app-side-pro-bar-pic-cont">
                            <i class="ri-more-2-fill"></i>
                    </div>
                </SideBarProfileBarCont>
        </>
    );
}

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
    return(<>
        <SideBarS>
          <div className="side-bar-deco-1-cont"/>
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
        <div className="app-side-logo-cont">
            <SideBarLogoS>
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
                        stroke="#fff"
                        stroke-width="3"
                        stroke-linecap="round"
                    />
                    </svg>
            </SideBarLogoS>
             
        </div>            
            <SideBarOptHolderS> <SideBarSearch/></SideBarOptHolderS>
            <div className="app-side-butt-opt-main-cont">
                <SideBarMenuLab>WORKSPACE</SideBarMenuLab>
                <SideBarOptHolderS > 
                    <SideBarLinkButton 
                    icon={<i class="ri-home-6-line"></i>} 
                    label={"Home"}
                    toLink="/home"
                    />
                </SideBarOptHolderS>
                <SideBarOptHolderS > 
                    <SideBarLinkButton 
                    icon={<i class="ri-line-chart-line"></i>} 
                    label={"Analytics"}
                    toLink="/analyitcs"
                    />
                </SideBarOptHolderS>    
                <SideBarOptHolderS > 
                    <SideBarLinkButton 
                    icon={<i class="ri-group-line"></i>} 
                    label={"Customers"}
                    toLink="/customers"
                    />
                </SideBarOptHolderS>
                <SideBarOptHolderS > 
                    <SideBarLinkButton 
                    icon={<i class="ri-shopping-bag-3-line"></i>} 
                    label={"Products"}
                    toLink="/products"
                    />
                </SideBarOptHolderS>
                <SideBarOptHolderS > 
                    <SideBarLinkButton 
                    icon={<i class="ri-coin-line"></i>} 
                    label={"Earnings"}
                    toLink="/earnings"
                    />
                </SideBarOptHolderS>
                <SideBarHrCont/>
            </div>
        
            <div className="app-side-butt-prod-main-cont">
            {/* <SideBarMenuLab>PRDODUCT</SideBarMenuLab> */}
            <SideBarOptHolderS>
            <SideBarActButt
            icon={<i class="ri-add-line"></i>}
            onClick={(e) => {
                handleOpen();
              }}
            >New Product</SideBarActButt>
            </SideBarOptHolderS>    
            </div>

            <div className="app-side-butt-bott-main-cont" >

                    <SideBarBottButt className="app-side-bott-but">
                            <i class="ri-question-line"></i>
                            Support
                    </SideBarBottButt>
                    <SideBarBottButt className="app-side-bott-but">
                            <i class="ri-flag-line"></i>
                            Report Problem
                    </SideBarBottButt>
                    <SideBarProfilBar name="Nikhil" email="nikhilww...com" onClick={(e) => {
              setProfPopVisi(e.currentTarget);
            }}/>
            </div>   


        </SideBarS>
    </>);
}

export default SideBar;