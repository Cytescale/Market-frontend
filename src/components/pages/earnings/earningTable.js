import React, { useState } from "react";
import DATA from "./fakeEarnData";
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
    color: "#0077E6",

    paddingTop: "12px",
    paddingBottom: "12px",
    fontSize: 13,
    fontWeight: "600",
    borderBottom: "1px solid #e0e0e0",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#555555",
  },
}));

const MTableIndCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#555555",
    fontWeight: "600",
    borderRight: "1px dashed #e0e0e0",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "td, th": {
    border: 0,
    cursor: "pointer",
    borderBottom: "2px dashed #f1f1f1",
    padding: "9px",
    paddingTop: "17px",
    paddingBottom: "17px",
  },
  "tr:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#f9f9f9",
  },
  "&:last-child td, &:last-child th": {
    borderBottom: 0,
  },
}));

const ProductTableRender = (props) => {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <MTableIndCell align="center"></MTableIndCell>
            <MTableCell align="center">Product</MTableCell>
            <MTableCell align="center">Gross</MTableCell>
            <MTableCell align="center">Fees</MTableCell>
            <MTableCell align="center">Taxes</MTableCell>
            <MTableCell align="center">Discount</MTableCell>
            <MTableCell align="center">Net</MTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="data-tab-body-cont">
          {DATA.map((row, i) => (
            <StyledTableRow key={row.name} className="data-tab-row-cont">
              <MTableIndCell align="center" className="data-earn-tab-ind-cont">
                {i + 1}
              </MTableIndCell>
              <MTableCell align="center">{row.product}</MTableCell>
              <MTableCell align="center">{row.gross}</MTableCell>
              <MTableCell align="center">{row.fees}</MTableCell>
              <MTableCell align="center">{row.taxes}</MTableCell>
              <MTableCell align="center">{row.discount}</MTableCell>
              <MTableCell align="center">{row.net}</MTableCell>
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

const EarningTable = (props) => {
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

export default EarningTable;
