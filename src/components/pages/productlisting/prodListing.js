import React, { useState, ReactText } from "react";
import { BaseCont, InnerCont, PageCont } from "../../base/holder";


import {
  MButton,
  MFillButton,
  MTextInput,
  MCard,
  MPageLabel,
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
            height={"36px"}
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
        <MButton className="prod-list-opt-list-butt-cont" icon={<i class="ri-filter-3-line"></i>}>Filter</MButton>
        <MButton className="prod-list-opt-list-butt-cont" icon={<i class="ri-refresh-line"></i>}>Refresh</MButton>
        
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
        <MPageHeader help icon={<i class="ri-shopping-bag-line"></i>}>Products</MPageHeader>
        <div className="app-prod-list-bottom-cont">
          <div className="app-prod-tab-cont">
            <div className="app-prod-lab-cont">
              <MPageLabel
                priLabel="All Products"
                secLabel="Earning as per all the listed products"
                rightContent={
                  <>
                  <MButton
                    icon={<i class="ri-download-line"></i>}
                    onClick={() => {handleExpVisOpen();}}>
                    Export
                  </MButton>
                  <MFillButton
                    icon={<i class="ri-add-line"></i>}
                    onClick={(e) => {
                      // navigate("/products/add");
                    }}
                  >
                    ADD ITEM
                  </MFillButton></>
                }
              />
            </div>
            <MCard>
              {/* <PageTabCont /> */}
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
