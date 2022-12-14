/** @format */

import react from "react";
import template_page_code from "./templatePage";
import { Editor, EditorState, convertFromHTML, ContentState } from "draft-js";
import { BlockRenderer, extendedBlockRenderMap } from "./block";
import { ReturnHandler, KeyCommandHandler, KeyBinderHandle } from "./handlers";
import { selectionCorrection } from "./handlers/utils";
import { EditorMode, EditorLockState, EditorMenuState } from "./constants";
import { lockScroll } from "./handlers/utils";


export default class SiennaEditor extends react.Component {
  CURRENT_LOCK_STATE = EditorLockState.LOCKED;

  constructor(props) {
    super(props);
    const blocksFromHTML = convertFromHTML(template_page_code);

    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );

    this.state = {
      editorState: EditorState.createWithContent(state),
      CURRENT_EDITOR_MODE: EditorMode.BLURRED,
      textEditorVisi: false,
    };
    this.setDomEditorRef = (ref) => (this.domEditor = ref);
    this.setCurrentLockState = async (State) => {
      this.CURRENT_LOCK_STATE = State;
    };
    this.setEditorMode = async (mode) => {
      this.setState({ CURRENT_EDITOR_MODE: mode });
    };

    this.editorStateChage = this.editorStateChage.bind(this);
    this.setTextEditorVisi = this.setTextEditorVisi.bind(this);
    this.setElementAdderVisi = this.setElementAdderVisi.bind(this);
    this.EditorblurHandle = this.EditorblurHandle.bind(this);
    this.EditorfocusHandle = this.EditorfocusHandle.bind(this);
    this.rootFocusHandle = this.rootFocusHandle.bind(this);
    this.BlockAdderStateChange = this.BlockAdderStateChange.bind(this);
    this.setBlockAdderState = this.setBlockAdderState.bind(this);
    this.EditorTextMenuVisiDetermine =
      this.EditorTextMenuVisiDetermine.bind(this);
  }

  setBlockAdderState(blockadderstate) {
    this.setState({ BlockAdderState: blockadderstate });
  }

  async setElementAdderVisi(visi) {
    lockScroll(visi ? true : false);
    let prevBlockAdderState = this.state.BlockAdderState.getState();
    prevBlockAdderState.setPrevSelecState(
      this.state.editorState.getSelection()
    );
    prevBlockAdderState.setMenuVisi(visi);
    this.setBlockAdderState(prevBlockAdderState);
  }

  setTextEditorVisi(visi) {
    this.setState({ textEditorVisi: visi });
  }

  closeAllMenus() {

  }

  async rootFocusHandle(e) {
    if (this.domEditor) {
      this.domEditor.focus();
    }
  }

  async EditorfocusHandle(e) {
    await this.setEditorMode(EditorMode.FOCUSED);
  }
  async EditorblurHandle(e) {
    this.closeAllMenus();
    await this.setEditorMode(EditorMode.BLURRED);
  }

  componentDidMount() {
    this.domEditor.focus();
    this.setEditorMode(EditorMode.FOCUSED);
    this.setCurrentLockState(EditorLockState.UNLOCKED);
  }
  componentWillUnmount() {}

  async EditorTextMenuVisiDetermine(edtState) {
    const selc = edtState.getSelection();
    if (selc.getAnchorKey() !== undefined && selc.getFocusKey() !== undefined) {
      if (
        selc.getFocusOffset() !== selc.getAnchorOffset() &&
        !selc.isCollapsed()
      ) {
        if (this.CURRENT_EDITOR_MENU_STATE !== EditorMenuState.NONE) {
          await this.setElementAdderVisi(false);
        }
        if (this.CURRENT_EDITOR_MENU_STATE === EditorMenuState.NONE) {
          this.setTextEditorVisi(true);
        }
      } else {
        this.setTextEditorVisi(false);
      }
    } else {
      this.setTextEditorVisi(false);
    }
  }

  BlockAdderStateChange(blockadderstate) {
    this.setState({ BlockAdderState: blockadderstate });
  }

  editorStateChage(edtState) {
    edtState = selectionCorrection(edtState);
    this.EditorTextMenuVisiDetermine(edtState);
    this.setState({ editorState: edtState });
  }

  render() {

    return (
      <>
      <EditorMenuCont/>
      <div className="sienna-editor-main-cont" onFocus={this.rootFocusHandle}>
        <Editor
          ref={this.setDomEditorRef}
          placeholder="Type anything here"
          className="sienna-editor-root"
          editorState={this.state.editorState}
          onChange={this.editorStateChage}
          onFocus={this.EditorfocusHandle}
          onBlur={this.EditorblurHandle}
        />
      </div>
      </>
    );
  }
  
}

const EditorMenuButt = (props)=>{
  return(
    <button className="app-edit-menu-butt">
      {props.icon}
    </button>
  )
}


const EditorMenuCont = (props)=>{
  


  return(
    <div className="app-edit-menu-main-cont">
        <EditorMenuButt icon={<i class="ri-heading"></i>}/>
        <EditorMenuButt icon={<i class="ri-bold"></i>}/>
        <EditorMenuButt icon={<i class="ri-italic"></i>}/>
        <EditorMenuButt icon={<i class="ri-underline"></i>}/>
        <EditorMenuButt icon={<i class="ri-strikethrough-2"></i>}/>
        <EditorMenuButt icon={<i class="ri-list-ordered"></i>}/>
        <EditorMenuButt icon={<i class="ri-list-unordered"></i>}/>
        <div className="app-edit-menu-hr-cont"/>
        <EditorMenuButt icon={<i class="ri-link"></i>}/>
        <EditorMenuButt icon={<i class="ri-separator"></i>}/>
        <EditorMenuButt icon={<i class="ri-double-quotes-l"></i>}/>
        <EditorMenuButt icon={<i class="ri-image-2-line"></i>}/>
        <EditorMenuButt icon={<i class="ri-video-line"></i>}/>

    </div>
  )
}
