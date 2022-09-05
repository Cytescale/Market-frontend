import React, { useState } from "react";
import DATA from "./fakeProdData";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import Checkbox from "@mui/material/Checkbox";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import {
  MButton,
  MCheckbox,
  MSwitch,
  MModal,
  MCard,
  MFillButton,
  MCardHeader,
} from "../../UI";
import { useNavigate } from "react-router-dom";

const MTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f9f9f9",
    color: "#858585",
    padding: "5px",
    fontSize: 12,
    fontWeight: "600",
    borderBottom: "1px solid #e0e0e0",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: "#555555",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "td, th": {
    border: 0,
    cursor: "pointer",
    borderBottom: "1px solid #f1f1f1",
    padding: "9px",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  "tr:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&:nth-of-type(even)": {
    // backgroundColor: "#f9f9f9",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ProductTableRender = (props) => {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <MTableCell align="center" className="data-tab-selec-cell-cont">
              <MCheckbox color="primary" checked={false} onChange={null} />
            </MTableCell>
            <MTableCell
              align="center"
              className="data-tab-selec-img-cont"
            ></MTableCell>
            <MTableCell align="left">Product</MTableCell>
            <MTableCell align="center">Link</MTableCell>
            <MTableCell align="center">Status</MTableCell>
            <MTableCell align="center">Sales</MTableCell>
            <MTableCell align="center">Inventory</MTableCell>
            <MTableCell align="center">Revenue</MTableCell>
            <MTableCell
              align="center"
              className="data-tab-act-cont"
            ></MTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="data-tab-body-cont">
          {DATA.map((row) => (
            <StyledTableRow key={row.name} className="data-tab-row-cont">
              <MTableCell align="center" className="data-tab-selec-cell-cont">
                <MCheckbox color="primary" checked={false} onChange={null} />
              </MTableCell>
              <MTableCell align="left" className="data-tab-selec-img-cont">
                <div className="data-tab-data-img-data">{row.image}</div>
              </MTableCell>
              <MTableCell className="data-tab-data-name-cont">
                <div className="data-tab-data-name-data">{row.product}</div>
              </MTableCell>
              <MTableCell className="data-tab-data-name-cont" align="center">
                <div className="data-tab-data-link-data">
                  <Link
                    to="api.market.com/24234/asd"
                    className="data-tab-data-link"
                  >
                    api.market.com/24234/asd
                  </Link>
                  <MButton
                    borderless
                    icon={<i class="ri-clipboard-line"></i>}
                  />
                </div>
              </MTableCell>
              <MTableCell align="center">
                <div className="data-tab-data-stat-data-cont">
                  <div className="data-tab-data-stat-data">{row.status}</div>
                </div>
              </MTableCell>
              <MTableCell align="center">{row.sales}</MTableCell>
              <MTableCell align="center">{row.inventory}</MTableCell>
              <MTableCell align="center">{row.revenue}</MTableCell>
              <MTableCell align="center" className="data-tab-act-cont">
                <div className="data-tab-data-act-cont">
                  <MButton
                    borderless={true}
                    style={{ color: "#bdbdbd" }}
                    onClick={props.handleDelVisOpen}
                    icon={<i class="ri-delete-bin-line"></i>}
                  />
                  <MButton
                    borderless={true}
                    style={{ color: "#bdbdbd" }}
                    icon={<i class="ri-pencil-line"></i>}
                    onClick={(e) => {
                      navigate("/products/productname/edit");
                    }}
                  />
                </div>
              </MTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ProductDelModalCont = (props) => {
  return (
    <MCard>
      <MCardHeader pad={22}>Delete Product</MCardHeader>
      <div className="prod-tab-del-mod-cont">
        <div className="app-del-mess-desc">
          Are you sure you want to delete this product? The product cannot be
          restored again after getting deleted.
        </div>

        <MFillButton hfill style={{ backgroundColor: "#FF6839" }}>
          Confirm delete
        </MFillButton>
      </div>
    </MCard>
  );
};

const ProductTable = (props) => {
  const [delModalVis, setDelModalVis] = React.useState(false);
  const handleDelVisOpen = () => setDelModalVis(true);
  const handleDelVisClose = () => setDelModalVis(false);

  return (
    <>
      <div className="data-tab-main-cont">
        <MModal open={delModalVis} handleClose={handleDelVisClose}>
          <ProductDelModalCont handleDelVisClose={handleDelVisClose} />
        </MModal>
        <ProductTableRender handleDelVisOpen={handleDelVisOpen} />
      </div>
    </>
  );
};

export default ProductTable;
