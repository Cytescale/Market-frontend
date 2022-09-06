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
        <div className="app-earn-card-lab-right-cont">
          <MButton
            borderless
            style={{ color: "#bdbdbd" }}
            icon={<i class="ri-information-line"></i>}
          ></MButton>
        </div>
      </div>
      <div className="app-earn-card-data-cont">$10,0000</div>
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
        <div className="app-prod-list-bottom-cont">
          <div className="app-prod-tab-cont">
            <div className="app-prod-lab-cont">
              <MPageLabel
                priLabel="Current Statistics"
                secLabel="Check your current statistics of this period"
              />
            </div>
            <div className="app-earn-card-main-cont">
              <EarningCardCont />
              <EarningCardCont />
              <EarningCardCont />
              <EarningCardCont />
            </div>
            <div className="app-prod-lab-cont">
              <MPageLabel
                priLabel="Earnings by Products"
                secLabel="Earning as per all the listed products , also download reports of earning"
              />
            </div>
            <div className="app-earn-butt-cont">
              <MDropButton buttonlabel="Previous two weeks" />
              <MFillButton icon={<i class="ri-download-line"></i>}>
                Download CSV
              </MFillButton>
            </div>
            <div className="app-earn-tabl-main-cont">
              <EarningTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarningBase;
