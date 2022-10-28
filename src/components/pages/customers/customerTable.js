import React, { useState } from "react";
import DATA from "./fakeCustData";
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
    backgroundColor: "#f5f5f5",
    color: "#858585",
    padding: "5px",
    fontSize: 11,
    paddingTop:12,
    paddingBottom:12,
    fontWeight: "600",
    borderBottom: "1px solid #f5f5f5",
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    paddingTop:14,
    paddingBottom:14,
    color: "#555555",

  },
}));

const StyledTableRow = styled(TableRow)((theme) => {

  return(
  {
  "td, th": {
    border: 0,
    cursor: "pointer",
    borderBottom: "1px solid #f1f1f1",
    padding: "9px",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  "&:nth-of-type(even)": {
    // backgroundColor: "#f9f9f9",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
})});

const CustomerTableRender = (props) => {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <MTableCell align="center">Email</MTableCell>
            <MTableCell align="center">Product</MTableCell>
            <MTableCell align="center">Purchase Date</MTableCell>
            <MTableCell align="center">At Price</MTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="data-tab-body-cont">
          {DATA.map((row) => (
            <StyledTableRow key={row.email} >
              <MTableCell  align="center">{row.email}</MTableCell>
              <MTableCell align="center">{row.product}</MTableCell>
              <MTableCell align="center">{row.date}</MTableCell>
              <MTableCell align="center"><div>{row.price}</div></MTableCell>
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

const CustomerTable = (props) => {
  const [delModalVis, setDelModalVis] = React.useState(false);
  const handleDelVisOpen = () => setDelModalVis(true);
  const handleDelVisClose = () => setDelModalVis(false);

  return (
    <>
      <div className="data-tab-main-cont">
        <MModal open={delModalVis} handleClose={handleDelVisClose}>
          <ProductDelModalCont handleDelVisClose={handleDelVisClose} />
        </MModal>
        <CustomerTableRender handleDelVisOpen={handleDelVisOpen} />
      </div>
    </>
  );
};

export default CustomerTable;
