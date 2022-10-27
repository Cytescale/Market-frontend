import { useEffect,useState } from "react";
import { MCard, MCardHeader, MDropButton, MHorLabelCont, MSwitch } from "../../UI";


const ContentDisplay = (props)=>{
    
    return(
        <div className="app-ctnt-outer-cont">
        <div className="app-ctnt-dis-drag-cont">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 304h288M112 208h288"/></svg>
                </div>
        <div className="app-ctnt-dis-cont">
                
                <div className="app-ctnt-dis-ico-cont"><div className="app-ctnt-dis-ico"><i class="ri-file-line"></i></div></div>
                <div className="app-ctnt-dis-name-cont">
                        <div className="app-ctnt-dis-name">Corespondant Content</div>
                        <div className="app-ctnt-dis-typ">PDG - 23 KB</div>
                </div>
                <div className="app-ctnt-dis-rigt-cont">
                            <button className="app-ctnt-dis-mor-butt"><i class="ri-edit-line"></i></button>
                            <button className="app-ctnt-dis-mor-butt"><i class="ri-delete-bin-line"></i></button>
                </div>
        </div>
        </div>
    )
}

const ContentViewPane = (props) =>{
    return(
        <div className="app-prod-det-ctnt-view">
                <ContentDisplay/>
                <ContentDisplay/>
                <ContentDisplay/>
        </div>
    )
}


const ContentEditorPane =  (props)=>{
    return(
        <>
           <div className="app-prod-det-left-card-cont">
            <MCard>
                <MCardHeader pad={32}>Content Delivery</MCardHeader>
                <div className="app-prod-card-desc">
                When a customer makes a purchase, they'll see a receipt and
                receive an email with a thank you note and a button to access your
                content.
                </div>
                <div className="app-prod-det-card-inner">
                    <div className="app-prod-add-form-data-cont">
                        <MHorLabelCont
                            leftLabel={"Redirect to link"}
                            leftSecLabel={
                                "Redirect "
                            }
                            >
                                <MSwitch />
                        </MHorLabelCont>
                    </div>
                    <div  className="app-prod-add-form-data-hr"/>
                    
                    {/* <div className="app-prod-add-form-data-cont"> */}
                        <ContentViewPane/>
                    {/* </div> */}
                </div>
                <div className="app-prod-cont-butt-cont">
                                <button className="app-prod-cont-upl-butt"><i class="ri-upload-2-line"></i>Add Files</button>
                                <button className="app-prod-cont-fil-butt"><i class="ri-folder-add-line"></i>Add Folder</button>
                </div>
            </MCard>
        </div>
        </>
    )
}

export default ContentEditorPane;