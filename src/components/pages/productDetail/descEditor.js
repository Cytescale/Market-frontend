import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import { useState } from "react";
import { MTextArea } from "../../UI";


const InlineButton = (props)=>{

    return(<div>B</div>)
}

const EditorPane = (props)=>{
    const[editorState,setEditorState] = useState(EditorState.createEmpty());

    const onEditorStateChange = (editorState)=>{
        setEditorState(editorState);
    }

    return(<>
        <div className="desc-edit-main-cont">
        <Editor
        
            editorState={editorState}
            toolbarClassName="app-desc-toolbar-cont"
            wrapperClassName="app-desc-wrap-cont"
            editorClassName="app-desc-edit-cont"
            onEditorStateChange={onEditorStateChange}
            toolbar ={ToolBarConfig}
            placeholder="Tell us about your product"
            />
        </div>
    </>);
}

const ToolBarConfig = {
    options: ['inline', 'blockType', 'fontSize',  'link', 'embedded',  'image'],
    inline: {
      inDropdown: false,
      className: 'app-desc-toolbar-cont-inline',
      options: ['bold', 'italic', 'underline', 'strikethrough'],
      bold: {  className: "app-desc-toolbar-cont-inline-ico" },
      italic: { className: "app-desc-toolbar-cont-inline-ico"},
      underline: { className: "app-desc-toolbar-cont-inline-ico" },
      strikethrough: { className: "app-desc-toolbar-cont-inline-ico"},
    },
    blockType: {
      inDropdown: true,
      options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote', 'Code'],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },
    fontSize: {
      
      options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
    },
    link: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      popupClassName: undefined,
      dropdownClassName: undefined,
      showOpenOptionOnHover: true,
      defaultTargetOption: '_self',
      options: ['link', 'unlink'],
      link: { className: "app-desc-toolbar-cont-inline-ico" },
      unlink: { className: "app-desc-toolbar-cont-inline-ico" },
      linkCallback: undefined
    },
    embedded: {
      className: "app-desc-toolbar-cont-inline-ico",    
      popupClassName: undefined,
      embedCallback: undefined,

    },
    image: {
     className: "app-desc-toolbar-cont-inline-ico",
      urlEnabled: true,
      uploadEnabled: true,
      alignmentEnabled: true,
      uploadCallback: undefined,
      previewImage: false,
      inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
      alt: { present: false, mandatory: false },
      defaultSize: {
        height: 'auto',
        width: 'auto',
      },
    },
    
  }

export default EditorPane;
