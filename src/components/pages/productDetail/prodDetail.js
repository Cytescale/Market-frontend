import React, { useState, ReactText, useEffect } from "react";
import { BaseCont, InnerCont, PageCont } from "../../base/holder";
import SideBar from "../../nav/sideBar";
import EditorPane from "./descEditor";
import SiennaEdior from "../../editor";


import {
  MPageHeader,
  MCard,
  MTextInput,
  MButton,
  MFillButton,
  MCardFooter,
  MCardHeader,
  MDropButton,
  MTextArea,
  MFilePicker,
  MHorLabelCont,
  MCheckbox,
  MNotiCard,
  MErrorCard,
  MSwitch,
  MPageHeaderBread,
} from "../../UI";

const DiscountCardCont = (props) => {
  return (
    <>
      <MCard>
        <div className="app-prod-det-card-inner">
          <div className="app-prod-add-form-data-cont">
            <MTextInput
              label="Discount Code"
              placeholder="enter code for discount"
            />
          </div>
          <div className="app-prod-add-form-data-cont">
            <MHorLabelCont leftLabel={"Amount Off"}>
              <MTextInput leftLabel="Rs" value="100" />
            </MHorLabelCont>
          </div>
          <div className="app-prod-add-form-data-cont">
            <MHorLabelCont leftLabel={"Quantity"}>
              <MTextInput value="100" />
            </MHorLabelCont>
          </div>
          <div className="app-prod-add-form-data-cont">
            <MHorLabelCont leftLabel={"Times used"}>100</MHorLabelCont>
          </div>
          <div className="app-prod-add-form-data-cont">
            <MHorLabelCont leftLabel={"Delete Code?"}>
              <MButton
                style={{
                  color: "red",
                }}
                icon={<i class="ri-delete-bin-7-line"></i>}
              >
                Delete
              </MButton>
            </MHorLabelCont>
          </div>
        </div>
      </MCard>
    </>
  );
};

const ProductCheckoutCont = (props) => {
  return (
    <>
      <div className="app-prod-det-left-card-cont">
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={17}>Payment from</MCardHeader>
            <div className="app-prod-det-card-inner">
              <div className="app-prod-add-form-data-cont">
                <MDropButton
                  label="Required shipping information"
                  buttonlabel="Not Required"
                  hfill
                ></MDropButton>
              </div>
            </div>
          </MCard>
        </div>
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={17}>Reciept</MCardHeader>
            <div className="app-prod-card-desc">
              When a customer makes a purchase, they'll see a receipt and
              receive an email with a thank you note and a button to access your
              content.
            </div>
            <div className="app-prod-det-card-inner">
              <div className="app-prod-add-form-data-cont">
                <MTextInput label="Button" value="Thank you" />
              </div>
              <div className="app-prod-add-form-data-cont">
                <MTextArea label="Thank You note"></MTextArea>
              </div>
            </div>
          </MCard>
        </div>
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={17}>Discount Codes</MCardHeader>
            <div className="app-prod-det-card-inner">
              
              <div className="app-prod-add-form-data-cont">
                <DiscountCardCont />
              </div>
              <div className="app-prod-add-form-data-cont">
                <MButton hfill>Add Discount Code</MButton>
              </div>
            </div>
          </MCard>
        </div>
      </div>
    </>
  );
};

const ProductDetailCont = (props) => {
  return (
    <>
      <div className="app-prod-det-left-card-cont">
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={22}>Product Details</MCardHeader>
            <div className="app-prod-card-desc">
              When a customer makes a purchase, they'll see a receipt and receive an email with a thank you note and a button to access your content.
            </div>
            <div className="app-prod-det-card-inner">
              <div className="app-prod-add-form-data-cont">
                <MTextInput label="Title" placeholder="Enter product title" />
              </div>
              {/* <div className="app-prod-add-form-data-cont">
                <MTextArea
                  label="Description"
                  placeholder="Enter product description"
                />
              </div> */}
              <div className="app-prod-add-form-data-cont">
                <SiennaEdior/>
              </div>
            </div>
          </MCard>
        </div>
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <div className="app-prod-det-card-inner">
            <MNotiCard dismiss style={{marginBottom:22,}} >
              This is a test notifiaction card
              This is a test notifiaction card
              This is a test notifiaction card
              
            </MNotiCard>
            
              <div className="app-prod-add-form-data-cont">
                <MTextInput
                  label="URL"
                  leftLabel="https://market.com/"
                  rightContent={
                    <MButton
                      borderless
                      icon={<i class="ri-file-copy-line"></i>}
                    />
                  }
                  placeholder="MXSAD"
                />
              </div>
              {/* <div className="app-prod-add-form-data-cont">
                <MTextInput label="Tags" placeholder="Enter tags" />
              </div> */}
            </div>
          </MCard>
        </div>
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={17}>Media</MCardHeader>
            <div className="app-prod-det-card-inner">
              <div className="app-prod-add-form-data-cont">
                <MFilePicker label="Cover" />
              </div>
            </div>
          </MCard>
        </div>
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={17}>Pricing</MCardHeader>
            <div className="app-prod-det-card-inner">
              <div className="app-prod-add-form-data-cont">
                <MTextInput
                  label="Product Price"
                  leftLabel={"₹"}
                  placeholder="Enter product price"
                />
              </div>
            </div>
          </MCard>
        </div>
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={17}>Inventory</MCardHeader>
            <div className="app-prod-det-card-inner">
              <div className="app-prod-add-form-data-cont">
                <MHorLabelCont leftLabel={"Limit sell?"}>
                  <MCheckbox />
                </MHorLabelCont>
              </div>
              <div className="app-prod-add-form-data-cont">
                <MHorLabelCont leftLabel={"Available after out of stock?"}>
                  <MCheckbox defaultChecked />
                </MHorLabelCont>
              </div>
              <div className="app-prod-add-form-data-cont">
                <MHorLabelCont leftLabel={"Available stock"}>
                  <MTextInput value="100" />
                </MHorLabelCont>
              </div>
            </div>
          </MCard>
        </div>
        <div className="app-prod-det-left-card-cont">
          <MCard>
            <MCardHeader pad={17}>Settings</MCardHeader>
            <div className="app-prod-det-card-inner">
              <div className="app-prod-add-form-data-cont">
                <MHorLabelCont leftLabel={"Let users choose quantity"}>
                  <MSwitch />
                </MHorLabelCont>
              </div>
              <div className="app-prod-add-form-data-cont">
                <MHorLabelCont leftLabel={"Show sales to users"}>
                  <MSwitch />
                </MHorLabelCont>
              </div>
              <div className="app-prod-add-form-data-cont">
                <MHorLabelCont leftLabel={"Item is giftable"}>
                  <MSwitch />
                </MHorLabelCont>
              </div>
            </div>
          </MCard>
        </div>
      </div>
    </>
  );
};

const TabIndexArr = ["Product", "Content", "Checkout"];

const PageTabCont = (props) => {
  useEffect(() => {}, [props.slideInd]);
  return (
    <>
      <div className="app-page-tab-cont">
        <div className="app-tab-main-cont">
          {TabIndexArr.map((e, i) => {
            return (
              <button
                key={i}
                className={`app-tab-butt ${
                  props.slideInd == i ? "app-tab-selec" : null
                }`}
                onClick={() => props.setSlideInd(i)}
              >
                {e}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

const ProductTabSwitch = (props) => {
  switch (props.slideInd) {
    case 0:
      return <ProductDetailCont />;
    case 1:
      return <ProductDetailCont />;
    case 2:
      return <ProductCheckoutCont />;
    default:
      return "foo";
  }
};

const ProductDetail = (props) => {
  const [slideInd, setSlideInd] = useState(0);
  return (
    <>
      <div className="app-page-cont flex flex-col noscroll">
        <div className="app-prod-det-bottom-cont">
          <div className="app-prod-det-main-cont">
            <div className="app-prod-det-left-main-cont">

              <div className="app-prof-det-left-top-main-cont">
              <MPageHeader back bottomBorderless>
                <MPageHeaderBread>Products</MPageHeaderBread>
                <MPageHeaderBread><i class="ri-arrow-right-s-line"></i></MPageHeaderBread>
                <MPageHeaderBread isLast>Product name</MPageHeaderBread>
                
                </MPageHeader>
              <PageTabCont slideInd={slideInd} setSlideInd={setSlideInd} />
              </div>

              <div className="app-prod-det-left-inner-cont">
                  <ProductTabSwitch slideInd={slideInd} />
              </div>
            </div>
          </div>
          <div className="app-prod-det-right-main-cont">
          <MPageHeader
          rightContent={
            <>
              <MButton icon={<i class="ri-save-line"></i>}>
                Save Changes
              </MButton>
              <MFillButton icon={<i class="ri-send-plane-line"></i>}>
                Publish
              </MFillButton>
              <MButton icon={<i class="ri-link"></i>}></MButton>
            </>
          }
        />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
