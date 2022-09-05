import React, { useState, ReactText } from "react";
import { BaseCont, InnerCont, PageCont } from "../../base/holder";
import SideBar from "../../nav/sideBar";

import {
  MButton,
  MFillButton,
  MTextInput,
  MCard,
  MPageHeader,
  MModal,
  MCardHeader,
  MPopover,
  MRadioButton,
} from "../../UI";
import ProductTable from "./productTable";
import { useNavigate } from "react-router-dom";

const SorttabelList = [
  "A-z",
  "Z-a",
  "Newest Product",
  "Oldest Product",
  "Most sold product",
  "Least sold product",
  "Newest Updated",
  "Oldest Updated",
];

const ProdTableOpt = (props) => {
  const navigate = useNavigate();

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
          onClick={(e) => {
            props.handleSortPopOpen(e.currentTarget);
          }}
        >
          Sort
        </MButton>
        <MButton icon={<i class="ri-filter-3-line"></i>}>Filter</MButton>
        <div className="prod-list-opt-list-right-cont">
          <MButton
            className="prod-list-opt-list-butt-cont"
            onClick={() => {
              props.handleExpVisOpen();
            }}
          >
            Export
          </MButton>
          {/* <MButton className="prod-list-opt-list-butt-cont">Import</MButton> */}
          <MFillButton
            onClick={(e) => {
              navigate("/products/add");
            }}
          >
            ADD ITEM
          </MFillButton>
        </div>
      </div>
    </>
  );
};

const PageTabCont = (props) => {
  return (
    <>
      <div className="app-product-listing-tab-cont">
        <div className="app-tab-main-cont">
          <button className="app-tab-butt app-tab-selec">All</button>
          <button className="app-tab-butt">Active</button>
          <button className="app-tab-butt">Draft</button>
        </div>
      </div>
    </>
  );
};

const ProductDelModalCont = (props) => {
  return (
    <MCard>
      <MCardHeader pad={22}>Export Data</MCardHeader>
      <div className="prod-tab-del-mod-cont">
        <div className="app-del-mess-desc">
          The exported data will be in the format of CSV. It will contain data
          from previous month till today.
        </div>

        <MFillButton hfill>Download CSV File</MFillButton>
      </div>
    </MCard>
  );
};

const ProdListing = (props) => {
  const [expModalVis, setExpModalVis] = React.useState(false);
  const handleExpVisOpen = () => setExpModalVis(true);
  const handleExpVisClose = () => setExpModalVis(false);

  const [sortPopVisi, setSortPopVisi] = useState(null);
  const handleSortPopClose = () => {
    setSortPopVisi(null);
  };
  const sortPopVisiBool = Boolean(sortPopVisi);

  const [sortSelected, setSortSelected] = useState(SorttabelList[0]);

  return (
    <>
      <div className="app-page-cont ">
        <MModal open={expModalVis} handleClose={handleExpVisClose}>
          <ProductDelModalCont handleDelVisClose={handleExpVisClose} />
        </MModal>
        <MPopover
          open={sortPopVisiBool}
          handleClose={handleSortPopClose}
          childRef={sortPopVisi}
        >
          <div className="app-popover-cont">
            <div className="app-popover-lab-cont">SORT PRODUCT AS</div>
            {SorttabelList.map((e) => {
              return (
                <div className="app-popover-rad-data-cont">
                  <MRadioButton
                    selected={sortSelected}
                    label={e}
                    value={e}
                    handleChange={() => {
                      setSortSelected(e);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </MPopover>
        <MPageHeader help icon={<i class="ri-shopping-bag-line"></i>}>
          Products
        </MPageHeader>
        <div className="app-prod-list-bottom-cont">
          <div className="app-prod-tab-cont">
            <MCard>
              <PageTabCont />
              <ProdTableOpt
                handleSortPopOpen={setSortPopVisi}
                handleExpVisOpen={handleExpVisOpen}
                handleExpVisClose={handleExpVisClose}
              />
              <ProductTable />
            </MCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdListing;
