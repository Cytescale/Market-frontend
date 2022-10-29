import { Link } from "react-router-dom";
import { MButton, MFillButton, MHorLabelCont, MTextInput } from "../../UI";


const CustomerRecpt = (props)=>{
    return(
            <div className="app-rcpt-main-cont">
                <div className="app-rcpt-prod-lab-cont">
                    <Link className="app-rcpt-prod-lab-lnk">Product Name<i class="ri-external-link-line"></i></Link>
                    </div>
                <div  className="app-rcpt-prod-slab-cont">
                    <div className="app-rcpt-prod-sub-lab-cont">Customer details <i class="ri-arrow-down-line"></i></div>
                    <div className="app-rcpt-data-main-cont">
                        <MTextInput label="Email Address" placeholder="Enter product title" height="36px"/>
                    </div>
                    <div className="app-rcpt-data-main-cont">
                        <MTextInput label="Name of Customer" placeholder="Enter product title"  height="36px"/>
                    </div>
                    <MFillButton icon={<i class="ri-edit-box-line"></i>}>Edit</MFillButton>
                    {/* <div className="app-rcpt-hr"/> */}
                </div>

                <div  className="app-rcpt-prod-slab-cont">
                    <div className="app-rcpt-prod-sub-lab-cont">License details <i class="ri-arrow-down-line"></i></div>
                    <div className="app-rcpt-data-main-cont">
                        <MTextInput label="Key" placeholder="Enter product title"  height="36px"/>
                    </div>
                    <div className="app-rcpt-data-main-cont">
                        <MButton>Disable the key</MButton>
                    </div>
                    {/* <div className="app-rcpt-hr"/> */}
                </div>
                <div  className="app-rcpt-prod-slab-cont">
                        <div className="app-rcpt-prod-sub-lab-cont">Order details <i class="ri-arrow-down-line"></i></div>
                        <div className="app-rcpt-data-main-cont">
                            <MTextInput label="Quantity" placeholder="Enter product title"  height="36px"/>
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
                        {/* <div className="app-rcpt-hr"/> */}
                </div>
                <div  className="app-rcpt-prod-slab-cont">
                        <div className="app-rcpt-prod-sub-lab-cont">Eamils Recieved <i class="ri-arrow-down-line"></i></div>
                        <div className="app-rcpt-data-main-cont">
                        <MHorLabelCont
                            leftLabel={"Recieipt"}
                            leftSecLabel="Email of purchase receipt"
                            >
                            <MFillButton>Resend Reciept</MFillButton>
                        </MHorLabelCont>
                        </div>
                        {/* <div className="app-rcpt-hr"/> */}
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