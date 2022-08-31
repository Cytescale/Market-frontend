import React, { useState, ReactText } from "react";
import { MButton } from "../../UI";
import ProductTable from "./productTable";
const ProdTableOpt = (props) => {
  return (
    <>
      <div className="prod-list-opt-con">
        <div className="prod-list-srch-cont">
          <svg
            className="prod-list-srch-ico"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1  6_834)">
              <path
                d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_834">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            className="prod-list-srch-txt"
            placeholder="Search for products"
          />
        </div>
        <MButton icon={<i class="ri-sort-asc"></i>}>Sort</MButton>
        <button className="prod-list-sort-butt">
          <svg
            className="prod-list-sort-butt-ico"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_16_681)">
              <path
                d="M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_681">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Sort
        </button>

        <button className="prod-list-sort-butt">
          <svg
            className="prod-list-sort-butt-ico"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_16_146)">
              <path
                d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_146">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Filter
        </button>
        <div className="prod-list-opt-list-right-cont">
          <button className="prod-list-sort-butt">Export</button>
          <button className="prod-list-sort-butt">Import</button>
          <button className="prod-list-opt-add-butt">ADD ITEM</button>
        </div>
      </div>
    </>
  );
};

const PageHeader = (props) => {
  return (
    <>
      <div className="app-page-head-cont">
        <div className="app-page-head-lab-cont">
          <svg
            className="app-page-head-cont-ico"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_31_471)">
              <path
                d="M12 15.25V11.75C12 9.42936 12.9219 7.20376 14.5628 5.56282C16.2038 3.92187 18.4294 3 20.75 3C23.0706 3 25.2962 3.92187 26.9372 5.56282C28.5781 7.20376 29.5 9.42936 29.5 11.75V15.25H34.75C35.2141 15.25 35.6592 15.4344 35.9874 15.7626C36.3156 16.0908 36.5 16.5359 36.5 17V38C36.5 38.4641 36.3156 38.9092 35.9874 39.2374C35.6592 39.5656 35.2141 39.75 34.75 39.75H6.75C6.28587 39.75 5.84075 39.5656 5.51256 39.2374C5.18437 38.9092 5 38.4641 5 38V17C5 16.5359 5.18437 16.0908 5.51256 15.7626C5.84075 15.4344 6.28587 15.25 6.75 15.25H12ZM12 18.75H8.5V36.25H33V18.75H29.5V22.25H26V18.75H15.5V22.25H12V18.75ZM15.5 15.25H26V11.75C26 10.3576 25.4469 9.02226 24.4623 8.03769C23.4777 7.05312 22.1424 6.5 20.75 6.5C19.3576 6.5 18.0223 7.05312 17.0377 8.03769C16.0531 9.02226 15.5 10.3576 15.5 11.75V15.25Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_31_471">
                <rect width="42" height="42" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Products
        </div>
        <div className="app-page-head-right-cont">
          <a href="#">Learn more</a>
        </div>
      </div>
    </>
  );
};

const PageTabCont = (props) => {
  return (
    <>
      <div className="app-page-tab-cont">
        <div className="app-tab-main-cont">
          <button className="app-tab-butt app-tab-selec">All</button>
          <button className="app-tab-butt">Active</button>
          <button className="app-tab-butt">Draft</button>
        </div>
      </div>
    </>
  );
};

const ProdListing = (props) => {
  return (
    <>
      <div className="app-page-cont">
        <PageHeader />
        <PageTabCont />
        <div className="app-prod-list-bottom-cont">
          <div className="prodtable-card-cont">
            <ProdTableOpt />
            <ProductTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdListing;
