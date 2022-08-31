import React, { useState, ReactText } from "react";
import { MButton, MFillButton, MTextInput, MCard } from "../../UI";
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
//

const PageHeader = (props) => {
  return (
    <>
      <div className="app-page-head-cont">
        <div className="app-page-head-lab-cont">
          <div className="app-page-head-cont-ico-cont">
            <i
              className="app-page-head-cont-ico"
              class="ri-shopping-bag-line"
            ></i>
          </div>
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
          <MCard>
            <ProdTableOpt />
            <ProductTable />
          </MCard>
        </div>
      </div>
    </>
  );
};

export default ProdListing;
