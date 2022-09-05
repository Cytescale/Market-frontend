import React, { useState, ReactText, useEffect } from "react";
import {
  MPageHeader2,
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
  MSwitch,
} from "../../UI";

const ProfileCont = (props) => {
  return (
    <>
      <div className="app-prod-det-left-card-cont">
        <div className="app-prod-det-left-card-cont">
          <div className="app-prof-card-main-cont">
            <MCard>
              <div className="app-prod-det-card-inner">
                <div className="app-prod-add-form-data-cont">
                  <MHorLabelCont
                    leftLabel={"Account Status"}
                    leftSecLabel={
                      "Set the active status of your current account, if the account is publicly visible or not."
                    }
                  >
                    <MSwitch />
                  </MHorLabelCont>
                </div>
              </div>
            </MCard>
          </div>

          <div className="app-prof-card-main-cont">
            <div className="app-prof-card-lab-cont">Profile Information</div>
            <MCard>
              {/* <MCardHeader pad={17}>Profile</MCardHeader> */}
              <div className="app-prod-det-card-inner">
                <div className="app-prof-prof-data-main-cont">
                  <div className="app-prod-add-form-data-cont">
                    <div className="app-prof-pic-cont"></div>
                  </div>
                  <div className="app-prof-name-data-main-cont">
                    <div className="app-prod-add-form-data-cont">
                      <MTextInput
                        label="Name"
                        placeholder="Enter product title"
                      />
                    </div>
                    <div className="app-prod-add-form-data-cont">
                      <MTextArea label="Bio" placeholder="Enter Your Bio" />
                    </div>
                  </div>
                </div>
              </div>
            </MCard>
          </div>
          <div className="app-prof-card-main-cont">
            <div className="app-prof-card-lab-cont">Product Listing</div>
            <MCard>
              {/* <MCardHeader pad={17}>Profile</MCardHeader> */}
              <div className="app-prod-det-card-inner">
                <div className="app-prod-card-desc">
                  Select which products you sell are publicly Available and in
                  which order.
                </div>
              </div>
            </MCard>
          </div>

          <div className="app-prof-card-main-cont">
            <div className="app-prof-card-lab-cont">Danger Zone</div>
            <MCard>
              {/* <MCardHeader pad={17}>Profile</MCardHeader> */}
              <div className="app-prod-det-card-inner">
                <div className="app-prod-add-form-data-cont">
                  <MHorLabelCont
                    leftLabel={"Change password"}
                    leftSecLabel={"Change password for this account"}
                  >
                    <MButton icon={<i class="ri-key-2-line"></i>}>
                      Change Password
                    </MButton>
                  </MHorLabelCont>
                </div>
                <div className="app-prod-add-form-data-cont">
                  <MHorLabelCont
                    leftLabel={"Delete this account"}
                    leftSecLabel={
                      "Permanently delete this account , it cannot be restored again."
                    }
                  >
                    <MFillButton
                      style={{ backgroundColor: "#FF6839", color: "#fff" }}
                      icon={<i class="ri-delete-bin-4-line"></i>}
                    >
                      Delete Account
                    </MFillButton>
                  </MHorLabelCont>
                </div>
              </div>
            </MCard>
          </div>
        </div>
      </div>
    </>
  );
};

const TabIndexArr = ["Profile", "Settings", "Payout"];

const PageTabCont = (props) => {
  useEffect(() => {}, [props.slideInd]);
  return (
    <>
      <div className="app-profile-tab-cont">
        <div className="app-profile-tab-main-cont">
          {TabIndexArr.map((e, i) => {
            return (
              <button
                key={i}
                className={`app-tab-butt ${
                  props.slideInd == i ? "app-profile-tab-selec" : null
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
      return <ProfileCont />;
    case 1:
      return <ProfileCont />;
    case 2:
      return <ProfileCont />;
    default:
      return "foo";
  }
};

const ProductDetail = (props) => {
  const [slideInd, setSlideInd] = useState(0);
  return (
    <>
      <div className="app-page-cont flex flex-col noscroll">
        <MPageHeader2
          help
          rightContent={
            <>
              <MButton icon={<i class="ri-save-line"></i>}>Save</MButton>
              <MFillButton icon={<i class="ri-send-plane-line"></i>}>
                Preview
              </MFillButton>
              <MButton icon={<i class="ri-link"></i>}></MButton>
            </>
          }
        >
          My Account
        </MPageHeader2>
        <PageTabCont slideInd={slideInd} setSlideInd={setSlideInd} />
        <div className="app-prod-det-bottom-cont">
          <div className="app-prof-out-main-cont">
            <div className="app-prof-main-cont">
              <div className="app-prof-inner-cont">
                <ProductTabSwitch slideInd={slideInd} />
                <div className="app-prof-marker-cont">Made with 💖 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
