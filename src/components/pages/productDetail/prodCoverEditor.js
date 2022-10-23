import { useState } from "react";
import { useFileUpload } from "use-file-upload";
import { MButton, MFilePicker } from "../../UI";




const CoverBigPrev = (props) =>{
    
    return(
        <div className="app-prod-det-cover-big-prev-cont">
            
            <img 
                src={props.selectedFile?props.selectedFile.source:null} 
                alt='preview' 
                className="app-prod-cov-img"
            /> 
            <div className="app-prod-bub-prv-cont">
            {props.files ?(props.files.map((e,id)=>{
                return(
                id==props.selectedFileId? 
                <div className="app-prod-bub-slec" key={id}/>
                :
                <div className="app-prod-bub-unslec" key={id} onClick={()=>{
                    props.setSelectedFile(props.files[id]);
                    props.setSelectedFileId(id)}
                }/>
                    )
            })):<></>}
            </div>
        </div>
    )
}


const FileUploadPane = (props)=>{
    return(
        <div className="app-prod-add-form-data-cont">
        <MFilePicker label="Cover" onClickEvent={props.SelectFileEvent}/>
      </div>
    )
}

const CoverEditorPane = (props)=>{
    
  const [files, selectFile] = useFileUpload()
  const [Addfiles, AddselectFile] = useFileUpload();
  const [selectedFile,setSelectedFile] = useState(null);
  const [selectedFileId,setSelectedFileId] = useState(0);

  const SelectFileEvent = ()=>{
                selectFile({ multiple: true }, (file) => {
                        setSelectedFile(file[selectedFileId]);
                });
  }

  const AddFileEvent = ()=>{
        AddselectFile({ multiple: true }, (newFiles) => {
            for(let i = 0 ; i < newFiles.length ;i++){
                files.push(newFiles[i]);    
            }   
        });
  }

  const FileDeleteEvent = ()=>{
            files.splice(selectedFileId,1);
            if(files.length>0){
                let newInd = ((selectedFileId-1)+1)%files.length;
                setSelectedFileId(newInd);
                setSelectedFile(files[newInd]);
            }
            else{
                files.pop();
                setSelectedFileId(0);
                setSelectedFile(null);
            }                    
  }

    return(
        <>
        {files ?files.length>0? (
            <div className="app-prod-cov-prev-cont">
                <div className="app-prod-cov-prev-clos-cont">
                <button className="app-prod-cov-prev-clos-butt"                
                ><i class="ri-check-line"></i></button>
                <button className="app-prod-cov-prev-clos-butt"
                onClick={FileDeleteEvent}  
                ><i class="ri-delete-bin-line"></i></button>
              </div>
              <div className="app-prod-cov-hori-prev">
                {           
                    files.map((file,id) =>{
                      return(<div key={id} className={`
                      app-prod-hor-prv-img-cont
                      ${id==selectedFileId?'app-prod-cov-hori-prev-selec':null}
                      `}
                      onClick={()=>{
                        setSelectedFile(file);
                        setSelectedFileId(id);
                      }}


                      >
                      <div className={`app-prod-hor-prv-img-overlay-cont`}/>
                      {id==selectedFileId?<div className={`app-prod-hor-prv-img-overlay-check-cont`}><i class="ri-check-line"></i></div>:null}
                      <img src={file.source} alt='preview' className="app-prod-hor-prv-img"/>
                      
                    </div>)
                  })
              }
              <div className="app-prod-img-adder-butt-cont">
                    {files.length<5?
                        <button className="app-prod-img-adder-butt" onClick={AddFileEvent}><i class="ri-image-add-line"></i>
                        </button>:null
                    }
                </div>
              </div>
              <CoverBigPrev FileDeleteEvent={FileDeleteEvent} files={files} setSelectedFile={setSelectedFile} setSelectedFileId={setSelectedFileId} selectedFile={selectedFile} selectedFileId={selectedFileId}/>
            </div>
          ) : 
            <FileUploadPane SelectFileEvent={SelectFileEvent}/>: 
            <FileUploadPane SelectFileEvent={SelectFileEvent}/>
          }
        </>
    )
}

export default CoverEditorPane;