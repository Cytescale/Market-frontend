import React, { useState } from "react";
import { MFillButton } from "../UI";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SideBarButton = (props) => {
  return (
    <div
      className={`sidebar-button-cont ${
        props.selected === true ? "sidebar-button-selec-cont" : ""
      }`}
    >
      {/* <button className="sidebar-button"> */}
      <Link className="sidebar-button-lnk" to={props.toLink}>
        {props.icon}
        <span className="sidebar-button-lab">{props.label}</span>
      </Link>
      {/* </button> */}
    </div>
  );
};

const DarkSideBarButton = (props) => {
  return (
    <div
      className={`sidebar-button-cont ${
        props.selected === true ? "sidebar-button-selec-cont" : ""
      }`}
    >
      <button className="sidebar-dark-button">
        {props.icon}
        <span className="sidebar-button-lab">{props.label}</span>
      </button>
    </div>
  );
};

const SideBarLabel = (props) => {
  return (
    <>
      <div className="sidebar-lab-cont">{props.label}</div>
    </>
  );
};

const CompanyLogo = (props) => {
  return (
    <>
      <div className="sidebar-comp-logo-cont">
        <span className="sidebar-logo-lable">MARKET</span>
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
    </>
  );
};

const SideBar = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="app-sidebar-cont">
        <CompanyLogo />
        <div className="app-sidebar-top-cont">
          <div className={`sidebar-add-button-cont`}>
            <MFillButton
              icon={<i class="ri-add-line"></i>}
              hfill
              onClick={(e) => {
                navigate("/products/add");
              }}
            >
              Add Product
            </MFillButton>
          </div>
              
          <SideBarButton
            selected={false}
            toLink="/"
            icon={
              <svg
                className="sidebar-button-ico"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9137 25.3333H25.9137V13.304L16.5803 6.04533L7.24699 13.304V25.3333H15.247V17.3333H17.9137V25.3333ZM28.5803 26.6667C28.5803 27.0203 28.4398 27.3594 28.1898 27.6095C27.9398 27.8595 27.6006 28 27.247 28H5.91366C5.56003 28 5.2209 27.8595 4.97085 27.6095C4.7208 27.3594 4.58032 27.0203 4.58032 26.6667V12.6533C4.58018 12.4501 4.62648 12.2496 4.71568 12.0671C4.80488 11.8845 4.93462 11.7247 5.09499 11.6L15.7617 3.304C15.9957 3.12192 16.2838 3.02307 16.5803 3.02307C16.8769 3.02307 17.1649 3.12192 17.399 3.304L28.0657 11.6C28.226 11.7247 28.3558 11.8845 28.445 12.0671C28.5342 12.2496 28.5805 12.4501 28.5803 12.6533V26.6667Z"
                  fill="currentColor"
                />
              </svg>
            }
            label={`Home`}
          />
          <SideBarButton
            selected={false}
            toLink="/"
            icon={
              <svg
                className="sidebar-button-ico"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.24707 17.3333H11.2471V28H3.24707V17.3333ZM21.9137 10.6667H29.9137V28H21.9137V10.6667ZM12.5804 4H20.5804V28H12.5804V4ZM5.91374 20V25.3333H8.5804V20H5.91374ZM15.2471 6.66667V25.3333H17.9137V6.66667H15.2471ZM24.5804 13.3333V25.3333H27.2471V13.3333H24.5804Z"
                  fill="currentColor"
                />
              </svg>
            }
            label={`Analytics`}
          />
          <SideBarButton
            selected={false}
            toLink="/"
            icon={
              <svg
                className="sidebar-button-ico"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_16_56)">
                  <path
                    d="M2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.284 14.703C19.6893 15.3359 20.882 16.3612 21.7186 17.6557C22.5552 18.9502 23.0002 20.4587 23 22H21C21.0002 20.844 20.6666 19.7125 20.0391 18.7416C19.4116 17.7707 18.5171 17.0017 17.463 16.527L18.283 14.703H18.284ZM17.596 3.413C18.6035 3.8283 19.465 4.53354 20.071 5.43923C20.6771 6.34492 21.0004 7.41024 21 8.5C21.0004 9.87233 20.4877 11.1952 19.5625 12.2088C18.6374 13.2224 17.3667 13.8535 16 13.978V11.965C16.7409 11.8589 17.4283 11.518 17.9613 10.9925C18.4943 10.4669 18.8447 9.78432 18.9612 9.04493C19.0776 8.30555 18.954 7.5483 18.6084 6.88435C18.2628 6.22041 17.7134 5.68475 17.041 5.356L17.596 3.413Z"
                    fill="#09121F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_56">
                    <rect width="24" height="24" fill="currentColor" />
                  </clipPath>
                </defs>
              </svg>
            }
            label={`Customers`}
          />
          <SideBarButton
            selected={true}
            toLink="/products"
            icon={
              <svg
                className="sidebar-button-ico"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3575 20.2667L28.9602 21.228C29.0591 21.2872 29.1409 21.371 29.1978 21.4713C29.2546 21.5715 29.2844 21.6848 29.2844 21.8C29.2844 21.9152 29.2546 22.0285 29.1978 22.1288C29.1409 22.229 29.0591 22.3128 28.9602 22.372L17.2669 29.388C17.0595 29.5126 16.8221 29.5784 16.5802 29.5784C16.3383 29.5784 16.1009 29.5126 15.8935 29.388L4.20021 22.372C4.10134 22.3128 4.0195 22.229 3.96267 22.1288C3.90585 22.0285 3.87598 21.9152 3.87598 21.8C3.87598 21.6848 3.90585 21.5715 3.96267 21.4713C4.0195 21.371 4.10134 21.2872 4.20021 21.228L5.80288 20.2667L16.5802 26.7333L27.3575 20.2667ZM27.3575 14L28.9602 14.9613C29.0591 15.0205 29.1409 15.1043 29.1978 15.2046C29.2546 15.3048 29.2844 15.4181 29.2844 15.5333C29.2844 15.6486 29.2546 15.7618 29.1978 15.8621C29.1409 15.9623 29.0591 16.0462 28.9602 16.1053L16.5802 23.5333L4.20021 16.1053C4.10134 16.0462 4.0195 15.9623 3.96267 15.8621C3.90585 15.7618 3.87598 15.6486 3.87598 15.5333C3.87598 15.4181 3.90585 15.3048 3.96267 15.2046C4.0195 15.1043 4.10134 15.0205 4.20021 14.9613L5.80288 14L16.5802 20.4667L27.3575 14ZM17.2655 1.74534L28.9602 8.76134C29.0591 8.82053 29.1409 8.90434 29.1978 9.00459C29.2546 9.10484 29.2844 9.21811 29.2844 9.33334C29.2844 9.44858 29.2546 9.56185 29.1978 9.6621C29.1409 9.76235 29.0591 9.84615 28.9602 9.90534L16.5802 17.3333L4.20021 9.90534C4.10134 9.84615 4.0195 9.76235 3.96267 9.6621C3.90585 9.56185 3.87598 9.44858 3.87598 9.33334C3.87598 9.21811 3.90585 9.10484 3.96267 9.00459C4.0195 8.90434 4.10134 8.82053 4.20021 8.76134L15.8935 1.74534C16.1009 1.62075 16.3383 1.55493 16.5802 1.55493C16.8221 1.55493 17.0595 1.62075 17.2669 1.74534H17.2655ZM16.5802 4.44268L8.42954 9.33334L16.5802 14.224L24.7309 9.33334L16.5802 4.44268Z"
                  fill="currentColor"
                />
              </svg>
            }
            label={`Products`}
          />
          <SideBarButton
            selected={false}
            toLink="/"
            icon={
              <svg
                className="sidebar-button-ico"
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.247 2.66663C21.687 2.66546 24.0536 3.50085 25.9522 5.03346C27.8507 6.56607 29.1664 8.70326 29.6799 11.0886C30.1934 13.4739 29.8736 15.9632 28.7738 18.1412C27.674 20.3193 25.8607 22.0544 23.6364 23.0573C22.9254 24.6292 21.8437 26.0051 20.4842 27.0672C19.1246 28.1292 17.5278 28.8457 15.8305 29.1551C14.1333 29.4645 12.3864 29.3576 10.7395 28.8435C9.09266 28.3295 7.59507 27.4237 6.37517 26.2038C5.15527 24.9839 4.24947 23.4863 3.73544 21.8395C3.22142 20.1926 3.11452 18.4457 3.4239 16.7484C3.73329 15.0512 4.44973 13.4544 5.51178 12.0948C6.57384 10.7353 7.94981 9.65362 9.52169 8.94263C10.3672 7.07181 11.7345 5.48463 13.4595 4.37144C15.1845 3.25824 17.194 2.66631 19.247 2.66663ZM13.9137 10.6666C12.8631 10.6666 11.8228 10.8736 10.8522 11.2756C9.88162 11.6776 8.9997 12.2669 8.25683 13.0098C7.51397 13.7526 6.92469 14.6346 6.52265 15.6052C6.12062 16.5758 5.91369 17.6161 5.91369 18.6666C5.91369 19.7172 6.12062 20.7575 6.52265 21.7281C6.92469 22.6987 7.51397 23.5806 8.25683 24.3235C8.9997 25.0663 9.88162 25.6556 10.8522 26.0577C11.8228 26.4597 12.8631 26.6666 13.9137 26.6666C16.0354 26.6666 18.0703 25.8238 19.5705 24.3235C21.0708 22.8232 21.9137 20.7884 21.9137 18.6666C21.9137 16.5449 21.0708 14.5101 19.5705 13.0098C18.0703 11.5095 16.0354 10.6666 13.9137 10.6666ZM15.247 12V13.3333H17.9137V16H12.5804C12.4138 15.9997 12.2531 16.0617 12.13 16.174C12.0069 16.2862 11.9302 16.4405 11.9152 16.6064C11.9001 16.7723 11.9477 16.9378 12.0486 17.0704C12.1496 17.203 12.2964 17.2929 12.4604 17.3226L12.5804 17.3333H15.247C16.1311 17.3333 16.9789 17.6845 17.604 18.3096C18.2292 18.9347 18.5804 19.7826 18.5804 20.6666C18.5804 21.5507 18.2292 22.3985 17.604 23.0236C16.9789 23.6488 16.1311 24 15.247 24V25.3333H12.5804V24H9.91369V21.3333H15.247C15.4136 21.3336 15.5743 21.2715 15.6974 21.1593C15.8205 21.047 15.8971 20.8928 15.9122 20.7269C15.9272 20.561 15.8796 20.3954 15.7787 20.2628C15.6778 20.1303 15.531 20.0403 15.367 20.0106L15.247 20H12.5804C11.6963 20 10.8485 19.6488 10.2233 19.0236C9.59821 18.3985 9.24702 17.5507 9.24702 16.6666C9.24702 15.7826 9.59821 14.9347 10.2233 14.3096C10.8485 13.6845 11.6963 13.3333 12.5804 13.3333V12H15.247ZM19.247 5.33329C18.1173 5.33197 17.0001 5.57055 15.9695 6.03324C14.9388 6.49593 14.0181 7.1722 13.2684 8.01729C14.7754 7.92581 16.2846 8.15529 17.6964 8.69056C19.1081 9.22582 20.3901 10.0547 21.4576 11.1223C22.5251 12.19 23.3538 13.4721 23.889 14.8839C24.4241 16.2957 24.6534 17.805 24.5617 19.312C25.774 18.2341 26.63 16.8132 27.0161 15.2377C27.4023 13.6622 27.3003 12.0065 26.7239 10.4903C26.1474 8.974 25.1236 7.66881 23.7883 6.7478C22.4529 5.82679 20.8692 5.33348 19.247 5.33329Z"
                  fill="currentColor"
                />
              </svg>
            }
            label={`Earnings`}
          />
          <div className="sidebar-div-cont" />
        </div>
        <div className="app-sidebar-bottom-cont">
          <SideBarButton
            selected={false}
            toLink="/"
            icon={
              <svg
                className="sidebar-button-ico"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6666 29.3334H23.9999V26.6667C23.9999 25.6058 23.5785 24.5884 22.8283 23.8383C22.0782 23.0881 21.0608 22.6667 19.9999 22.6667H11.9999C10.9391 22.6667 9.92164 23.0881 9.17149 23.8383C8.42135 24.5884 7.99992 25.6058 7.99992 26.6667V29.3334H5.33325V26.6667C5.33325 24.8986 6.03563 23.2029 7.28587 21.9527C8.53612 20.7024 10.2318 20 11.9999 20H19.9999C21.768 20 23.4637 20.7024 24.714 21.9527C25.9642 23.2029 26.6666 24.8986 26.6666 26.6667V29.3334ZM15.9999 17.3334C14.9493 17.3334 13.9091 17.1264 12.9385 16.7244C11.9678 16.3224 11.0859 15.7331 10.3431 14.9902C9.6002 14.2474 9.01092 13.3654 8.60888 12.3948C8.20684 11.4242 7.99992 10.3839 7.99992 9.33337C7.99992 8.2828 8.20684 7.24251 8.60888 6.27191C9.01092 5.3013 9.6002 4.41939 10.3431 3.67652C11.0859 2.93365 11.9678 2.34438 12.9385 1.94234C13.9091 1.5403 14.9493 1.33337 15.9999 1.33337C18.1217 1.33337 20.1565 2.17623 21.6568 3.67652C23.1571 5.17681 23.9999 7.21164 23.9999 9.33337C23.9999 11.4551 23.1571 13.4899 21.6568 14.9902C20.1565 16.4905 18.1217 17.3334 15.9999 17.3334ZM15.9999 14.6667C17.4144 14.6667 18.771 14.1048 19.7712 13.1046C20.7713 12.1044 21.3333 10.7479 21.3333 9.33337C21.3333 7.91889 20.7713 6.56233 19.7712 5.56214C18.771 4.56194 17.4144 4.00004 15.9999 4.00004C14.5854 4.00004 13.2289 4.56194 12.2287 5.56214C11.2285 6.56233 10.6666 7.91889 10.6666 9.33337C10.6666 10.7479 11.2285 12.1044 12.2287 13.1046C13.2289 14.1048 14.5854 14.6667 15.9999 14.6667Z"
                  fill="currentColor"
                />
              </svg>
            }
            label={`Profile`}
          />
          <DarkSideBarButton
            selected={false}
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
                    fill="black"
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
