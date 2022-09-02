import React, { useState, ReactText } from "react";
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
} from "../../UI";

const PageTabCont = (props) => {
  return (
    <>
      <div className="app-page-tab-cont">
        <div className="app-tab-main-cont">
          <button className="app-tab-butt app-tab-selec">Product</button>
          <button className="app-tab-butt">Content</button>
          <button className="app-tab-butt">Checkout</button>
        </div>
      </div>
    </>
  );
};

const ProductDetail = (props) => {
  return (
    <>
      <div className="app-page-cont flex flex-col noscroll">
        <MPageHeader back>Product name</MPageHeader>
        <div className="app-prod-det-bottom-cont">
          <div className="app-prod-det-main-cont">
            <div className="app-prod-det-left-main-cont">
              <div className="app-prod-det-left-tab-cont">
                <PageTabCont />
              </div>
              <div className="app-prod-det-left-inner-cont">
                <div className="app-prod-det-left-card-cont">
                  <MCard>
                    <MCardHeader pad={22}>Product Details</MCardHeader>
                    <div className="app-prod-det-card-inner">
                      <div className="app-prod-add-form-data-cont">
                        <MTextInput
                          label="Title"
                          placeholder="Enter product title"
                        />
                      </div>
                      <div className="app-prod-add-form-data-cont">
                        <MTextArea
                          label="Description"
                          placeholder="Enter product description"
                        />
                      </div>
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
                      <div className="app-prod-add-form-data-cont">
                        <MTextInput label="Tags" placeholder="Enter tags" />
                      </div>
                    </div>
                  </MCard>
                </div>
                <div className="app-prod-det-left-card-cont">
                  <MCard>
                    <MCardHeader pad={22}>Media</MCardHeader>
                    <div className="app-prod-det-card-inner">
                      <div className="app-prod-add-form-data-cont">
                        <MFilePicker label="Cover" />
                      </div>
                    </div>
                  </MCard>
                </div>
                <div className="app-prod-det-left-card-cont">
                  <MCard>
                    <MCardHeader pad={22}>Pricing</MCardHeader>
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
                    <MCardHeader pad={22}>Inventory</MCardHeader>
                    <div className="app-prod-det-card-inner">
                      <div className="app-prod-add-form-data-cont">
                        <MHorLabelCont
                          leftLabel={"Available after out of stock?"}
                        >
                          <MCheckbox />
                        </MHorLabelCont>
                      </div>
                    </div>
                  </MCard>
                </div>
              </div>
            </div>
          </div>
          <div className="app-prod-det-right-main-cont"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
