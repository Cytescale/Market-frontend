import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MButton, MCard, MCardHeader, MFillButton, MModal, MPageHeader, MPageLabel, MPopover, MTextInput } from "../../UI";
import CustomerTable from "./customerTable";
import CustomerRecpt from "./customerRecpt";

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
     
        <MPageHeader help icon={<i class="ri-group-line"></i>}>
          Customers
        </MPageHeader>
        
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
            <div className="app-cust-right-main-cont"><CustomerRecpt/></div>
          </div>
        </div>
      
    </>
    )
}


export default CustomersBase;