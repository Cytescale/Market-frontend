import React, { useState, ReactText } from "react";
import { MButton, MFillButton, MTextInput, MCard, MPageHeader } from "../../UI";
import ProductTable from "./productTable";



const ProdTableOpt = (props) => {
  return (
    <>
      <div className="prod-list-opt-con">
        <div className="prod-list-srch-cont">
          <MTextInput
            icon={<i class="ri-search-line"></i>}
            placeholder="Search for products"
          />
        </div>
        <MButton
          className="prod-list-opt-list-butt-cont"
          icon={<i class="ri-sort-asc"></i>}
        >
          Sort
        </MButton>
        <MButton icon={<i class="ri-filter-3-line"></i>}>Filter</MButton>
        <div className="prod-list-opt-list-right-cont">
          <MButton className="prod-list-opt-list-butt-cont">Export</MButton>
          <MButton className="prod-list-opt-list-butt-cont">Import</MButton>
          <MFillButton>ADD ITEM</MFillButton>
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
        <MPageHeader icon={<i class="ri-shopping-bag-line"></i>}>
          Products
        </MPageHeader>
        <div className="app-prod-list-bottom-cont">
          <MCard>
            <PageTabCont />
            <ProdTableOpt />
            <ProductTable />
          </MCard>
        </div>
      </div>
    </>
  );
};

export default ProdListing;
