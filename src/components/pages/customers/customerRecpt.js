import { MButton, MFillButton, MHorLabelCont, MTextInput } from "../../UI";


const CustomerRecpt = (props)=>{
    return(
            <div className="app-rcpt-main-cont">
                <div className="app-rcpt-prod-lab-cont">Product Name</div>
                <div  className="app-rcpt-prod-slab-cont">
                    <div className="app-rcpt-prod-sub-lab-cont">Customer details</div>
                    <div className="app-rcpt-data-main-cont">
                        
                        <MTextInput label="Email Address" placeholder="Enter product title" />
                    </div>
                    <div className="app-rcpt-data-main-cont">
                        <MTextInput label="Name of Customer" placeholder="Enter product title" />
                    </div>
                    <div className="app-rcpt-hr"/>
                </div>

                <div  className="app-rcpt-prod-slab-cont">
                    <div className="app-rcpt-prod-sub-lab-cont">License details</div>
                    <div className="app-rcpt-data-main-cont">
                        <MTextInput label="Key" placeholder="Enter product title" />
                    </div>
                    <div className="app-rcpt-data-main-cont">
                        <MButton>Disable the key</MButton>
                    </div>
                    <div className="app-rcpt-hr"/>
                </div>
                <div  className="app-rcpt-prod-slab-cont">
                        <div className="app-rcpt-prod-sub-lab-cont">Order details</div>
                        <div className="app-rcpt-data-main-cont">
                            <MTextInput label="Quantity" placeholder="Enter product title" />
                        </div>
                        <div className="app-rcpt-data-main-cont">
                        <MHorLabelCont
                            leftLabel={"Purchased On"}
                            >
                            <div>8 Feb 2001, 10:00pm</div>
                        </MHorLabelCont>
                        </div>
                        <div className="app-rcpt-data-main-cont">
                        <MHorLabelCont
                            leftLabel={"Purchase Price"}
                            >
                            <div>10:00$</div>
                        </MHorLabelCont>
                        </div>
                        <div className="app-rcpt-hr"/>
                </div>
                <div  className="app-rcpt-prod-slab-cont">
                        <div className="app-rcpt-prod-sub-lab-cont">Eamils Recieved</div>
                        <div className="app-rcpt-data-main-cont">
                        <MHorLabelCont
                            leftLabel={"Recieipt"}
                            leftSecLabel="Email of purchase receipt"
                            >
                            <MFillButton>Resend Reciept</MFillButton>
                        </MHorLabelCont>
                        </div>
                        <div className="app-rcpt-hr"/>
                </div>
                {/* <div  className="app-rcpt-prod-slab-cont">
                        <div className="app-rcpt-data-main-cont">
                        <MHorLabelCont
                            leftLabel={"Order ID"}
                            leftSecLabel="1233-1234-12534-12323"
                            >
                            <MButton>Copy</MButton>
                        </MHorLabelCont>
                        </div>
                        <div className="app-rcpt-data-main-cont">
                        <MHorLabelCont
                            leftLabel={"Customer ID"}
                            leftSecLabel="1233-1234-12534-12323"
                            >
                            <MButton>Copy</MButton>
                        </MHorLabelCont>
                        </div>
                </div> */}
            </div>
        
    )
}

export default CustomerRecpt;