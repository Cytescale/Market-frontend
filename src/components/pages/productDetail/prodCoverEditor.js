import { useState } from "react";
import { useFileUpload } from "use-file-upload";
import { MFilePicker } from "../../UI";





const CoverEditorPane = (props)=>{
    
  const [files, selectFile] = useFileUpload()
  const [selectedFile,setSelectedFile] = useState(null);

    return(
        <>
        {files ? (
            <div className="app-prod-cov-prev-cont">
              <div className="app-prod-cov-prev-clos-cont">
                <button className="app-prod-cov-prev-clos-butt"><i class="ri-delete-bin-line"></i></button>
              </div>
               <img src={selectedFile?selectedFile.source:files?files[0].source:null} alt='preview' className="app-prod-cov-img"/> 
              <div className="app-prod-cov-hori-prev">
                {           
                    files.map((file,id) =>{
                      return(<div key={id} className={`
                      app-prod-hor-prv-img-cont
                      
                      `}
                      onClick={()=>{
                        setSelectedFile(file);
                      }}
                      >
                      <div className={`app-prod-hor-prv-img-overlay-cont`}/>
                      <img src={file.source} alt='preview' className="app-prod-hor-prv-img"/>
                    </div>)
                  })
              }
              </div>
            </div>
          ) : (
            <div className="app-prod-add-form-data-cont">
          <MFilePicker label="Cover" onClickEvent={()=>{
                selectFile({ multiple: true });
                setSelectedFile(files[0].source);
          }}/>
        </div>
          )}
        </>
    )
}

export default CoverEditorPane;