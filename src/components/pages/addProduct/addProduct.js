import React, { useState, ReactText } from "react";
import { PageHeader } from "../../utils";

const AddProduct = (props) => {
  return (
    <>
      {" "}
      <div className="app-page-cont">
        <PageHeader icon={<></>} title={"Add Product"} />
        <div className="app-prod-list-bottom-cont">
          <div className="prodtable-card-cont"></div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
