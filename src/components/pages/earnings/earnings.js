import React from "react";
import EarningTable from "./earningTable";
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
  MPageLabel,
  MDropButton,
} from "../../UI";

const EarningCardCont = (props) => {
  return (
    <div className="app-earn-card-cont">
      <div className="app-earn-card-lab-cont">
        Total Revenue
          {/* <div className="app-earn-card-lab-right-cont">
            <MButton
              borderless
              style={{ color: "#bdbdbd" }}
              icon={<i class="ri-information-line"></i>}
            ></MButton>
          </div> */}
      </div>
      <div className="app-earn-card-data-cont">$10,0000</div>
      
      <div className="app-earn-card-bott-data-cont raise-met">
      <i class="ri-arrow-right-up-line"></i>
        100%
        </div>
    </div>
  );
};

const EarningBase = (props) => {
  return (
    <>
      <div className="app-page-cont ">
        <MPageHeader help icon={<i class="ri-coin-line"></i>}>
          Earnings
        </MPageHeader>
        <div className="app-earn-lab-cont">
              <MPageLabel
                priLabel="Earnings by Products"
                secLabel="Earning as per all the listed products , also download reports of earning"
                rightContent={
                  <>
                  <MDropButton buttonlabel="Previous two weeks" />
                  <MFillButton icon={<i class="ri-download-line"></i>}>
                    Download CSV
                  </MFillButton>
                  </>
                }
              />
              <div className="app-earn-lab-right-cont">
              
              </div>
          </div>
        <div className="app-earn-mid-slab-cont">
              <div className="app-earn-card-main-cont">
                <div className="app-earn-card-row-cont">
                  <EarningCardCont />
                  <EarningCardCont />  
                </div>
                <div className="app-earn-card-row-cont">
                  <EarningCardCont />
                  <EarningCardCont />  
                </div>
              </div>
              <div className="app-earn-chart-main-cont">  
                <div className="app-earn-chart-cont">

                </div>
              </div>
        </div>
        <div className="app-earn-bottom-cont">
            <div className="app-earn-bottom-left-cont">
              <div className="app-earn-tabl-main-cont">
                <EarningTable />
              </div>
            </div>
            <div className="app-earn-bottom-right-cont">

            </div>
        </div>
      </div>
    </>
  );
};

export default EarningBase;
