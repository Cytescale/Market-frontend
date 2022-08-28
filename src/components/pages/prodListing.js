import React, { useState } from "react";

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
          <button className="prod-list-opt-expt-butt">Export</button>
          <button className="prod-list-opt-expt-butt">Import</button>
          <button className="prod-list-opt-add-butt">ADD ITEM</button>
        </div>
      </div>
    </>
  );
};

const ProdTable = (props) => {
  return (
    <>
      <div></div>
    </>
  );
};

const PageHeader = (props) => {
  return (
    <>
      <div className="app-page-head-cont">Products</div>
    </>
  );
};

const ProdListing = (props) => {
  return (
    <>
      <div className="app-page-cont">
        <PageHeader/>
        <div className="app-prod-list-bottom-cont">
          <div className="prodtable-card-cont">
            <ProdTableOpt />
            <ProdTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdListing;
