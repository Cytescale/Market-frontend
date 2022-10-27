import React, { useState } from "react";
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
import { VictoryChart,VictoryZoomContainer,VictoryLine,VictoryArea,VictoryPie,VictoryLabel } from "victory";


const EarningChart = (props)=>{
  const [zoomDomain,setzoomDomain] = useState({ x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] });
  
  const handleZoom = (domain)=>{
  }

  return(
    <div>
        <VictoryChart   scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomContainer
            
            zoomDimension="x"
              zoomDomain={zoomDomain}
              onZoomDomainChange={handleZoom}
            />
          }
        >
            <VictoryArea
              // interpolation="natural"
              style={{
                data: {
                  fill: "#E5F8EB",
                   fillOpacity: 0.7,
                   stroke: "#00BA34", 
                   strokeWidth: 3
                },

              }}
              data={[
                { a: new Date(1982, 1, 1), b: 125 },
                { a: new Date(1987, 1, 1), b: 257 },
                { a: new Date(1993, 1, 1), b: 345 },
                { a: new Date(1997, 1, 1), b: 515 },
                { a: new Date(2001, 1, 1), b: 132 },
                { a: new Date(2005, 1, 1), b: 305 },
                { a: new Date(2011, 1, 1), b: 270 },
                { a: new Date(2015, 1, 1), b: 470 }
              ]}
              x="a"
              y="b"
            />
        </VictoryChart>
    </div>
  )
}

const EarningContri = (props) =>{
const[percent,setpercent] = useState(25);

  return(
    <div>
         <VictoryPie
            cornerRadius={({ datum }) => datum.y * 5}
            colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}

            data={[
              { x: "Product1", y: 35 },
              { x: "Product2", y: 40 },
              { x: "Product3", y: 55 },
              { x: "Product3", y: 55 },
              { x: "Product3", y: 55 },
              { x: "Product3", y: 55 },
            ]}
          />
    </div>
  )
}

const EarningCardCont = (props) => {
  return (
    <div className="app-earn-card-cont">
      <div className="app-earn-card-lab-cont">
        Total Revenue
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
              <div className="app-earn-seg-lab-cont">Earnings Chart</div>
                <div className="app-earn-seg-body">
                  <div className="app-earn-chart-cont">
                      <EarningChart/>
                  </div>
                </div>
              </div>
        </div>
        <div className="app-earn-bottom-cont">
            <div className="app-earn-bottom-left-cont">
              <div className="app-earn-seg-lab-cont">Earnings by products</div>
              <div className="app-earn-seg-body">
                  <div className="app-earn-tabl-main-cont">
                    <EarningTable />
                  </div>
              </div>
            </div>
            <div className="app-earn-bottom-right-cont">
                <div className="app-earn-seg-lab-cont seg-lab-ver-2">Product Contribution</div>
                <div className="app-earn-seg-body">
                    <EarningContri/>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default EarningBase;
