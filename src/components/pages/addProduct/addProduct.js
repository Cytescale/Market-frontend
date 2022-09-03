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
  MTextBox,
} from "../../UI";

const AddProduct = (props) => {
  return (
    <>
      {" "}
      <div className="app-page-cont">
        <MPageHeader back help>
          What are you creating?
        </MPageHeader>
        <div className="app-prod-list-bottom-cont">
          <div className="app-prod-add-form-cont">
            <MCard>
              <MCardHeader pad={22}>Add Product</MCardHeader>
              <div className="app-prod-add-form-inner">
                <div className="app-prod-add-form-data-cont">
                  <MTextInput
                    label="Product title"
                    placeholder="Enter product title"
                  />
                </div>
                <div className="app-prod-add-form-data-cont">
                  <MDropButton
                    label="Product type"
                    buttonlabel="Not selected"
                    hfill
                  ></MDropButton>
                </div>
                <div className="app-prod-add-form-data-cont">
                  <MTextInput
                    label="Product Price"
                    icon={<i class="ri-money-dollar-circle-line"></i>}
                    placeholder="Enter product price"
                  />
                </div>
              </div>
              <MCardFooter>
                <div className="app-prod-add-footer-inner">
                  <MButton
                    icon={<i class="ri-close-line"></i>}
                    style={{ marginRight: "12px" }}
                  >
                    Cancel
                  </MButton>
                  <MButton icon={<i class="ri-draft-line"></i>}>Draft</MButton>
                  <div className="app-prod-add-form-footer-right-cont"></div>
                  <MFillButton>Next</MFillButton>
                </div>
              </MCardFooter>
            </MCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
