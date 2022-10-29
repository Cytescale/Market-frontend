import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MButton, MCard, MCardHeader, MFillButton, MModal, MPageHeader, MPageLabel, MPopover, MTextInput } from "../../UI";
import CustomerTable from "./customerTable";
import CustomerRecpt from "./customerRecpt";
import { VictoryChart,VictoryZoomContainer,VictoryArea,VictoryLine } from "victory";

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
          <MButton className="prod-list-opt-list-butt-cont" icon={<i class="ri-filter-3-line"></i>}>Filter</MButton>
          
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

const CustomerDataRibbon =(props)=>{
    return(
        <div className="app-cust-data-rib-main-cont">
                <div className="app-cust-data-rib-pill-cont">Total Customers 100</div>
                <div className="app-cust-data-rib-pill-cont">
                    <div className="app-cust-data-rib-pill-ind1-cont"/>
                    Returning Cusomter
                </div>
                <div className="app-cust-data-rib-pill-cont">
                    <div className="app-cust-data-rib-pill-ind2-cont"/>
                    New Cusomter
                </div>
        </div>
    )
}


const CustomerGraph = (props)=>{
    const [zoomDomain,setzoomDomain] = useState({ x: [new Date(1990, 1, 1), new Date(2009, 1, 1)] });
  
  const handleZoom = (domain)=>{
  }
    return<div className="app-cust-grwth-grph-cont">
            <VictoryChart  width={1000} height={350} scale={{ x: "time" }}
                        containerComponent={
                        <VictoryZoomContainer
                        zoomDimension="x"
                        zoomDomain={zoomDomain}
                        onZoomDomainChange={handleZoom}
                        />
                    }
                    >
                        <VictoryLine
                        // interpolation="natural"
                        style={{
                            data: {
                            // fill: "#0085FF",
                            fillOpacity: 0.7,
                            stroke: "#0085FF", 
                            strokeWidth: 3
                            },

                        }}
                        data={[
                            { a: new Date(1982, 1, 1), b: 125 },
                            { a: new Date(1987, 1, 1), b: 257 },
                            { a: new Date(1993, 1, 1), b: 345 },
                            { a: new Date(1997, 1, 1), b: 425 },
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
}

const CustomersBase = (props)=>{
    const [expModalVis, setExpModalVis] = useState(false);
  const handleExpVisOpen = () => setExpModalVis(true);
  const handleExpVisClose = () => setExpModalVis(false);
  const [sortPopVisi, setSortPopVisi] = useState(null);
  const handleSortPopClose = () => {
    setSortPopVisi(null);
  };


    return(
        <>
      <div className="app-page-cont flex flex-col noscroll">
        <MModal open={expModalVis} handleClose={handleExpVisClose}>
          <ProductDelModalCont handleDelVisClose={handleExpVisClose} />
        </MModal>
     
        <MPageHeader help icon={<i class="ri-group-line"></i>}>Customers</MPageHeader>
        
        <div className="app-cust-bdy-main-cont">
            <div className="app-cust-left-main-cont">
                <div className="app-prod-tab-cont">
                    <div className="app-prod-lab-cont">
                    <MPageLabel
                        priLabel="Customers"
                        secLabel="All the cusomters till date who bought your products"
                        rightContent={
                        <>
                        <MButton
                            icon={<i class="ri-download-line"></i>}
                            onClick={() => {handleExpVisOpen();}}>
                            Export
                        </MButton>
                        <MButton className="prod-list-opt-list-butt-cont" icon={<i class="ri-refresh-line"></i>}>Refresh</MButton>
                
                        </>
                        }
                    />
                    </div>
                     <CustomerGraph/>
                     <CustomerDataRibbon/>
                    <MCard>
                    
                            
                            <ProdTableOpt
                                handleSortPopOpen={setSortPopVisi}
                                handleExpVisOpen={handleExpVisOpen}
                                handleExpVisClose={handleExpVisClose}
                            />
                            
                            <CustomerTable/>
                    </MCard>
                </div>
            </div>
            <div className="app-cust-right-main-cont">
                <CustomerRecpt/>
                </div>
          </div>
        </div>
      
    </>
    )
}


export default CustomersBase;