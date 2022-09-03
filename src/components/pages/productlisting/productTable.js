import React from "react";
import DATA from "./fakeProdData";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import Checkbox from "@mui/material/Checkbox";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { MCheckbox } from "../../UI";
import { useNavigate } from "react-router-dom";

const MTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: "#f9f9f9",
    color: "#666666",
    padding: "4px",
    fontSize: 13,
    borderBottom: "4px solid #f5f5f5",
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
    padding: "8px",
  },
  "tr:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const ProductTableRender = (props) => {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <MTableCell align="center" padding="checkbox">
              <MCheckbox color="primary" checked={false} onChange={null} />
            </MTableCell>
            <MTableCell
              align="center"
              className="data-tab-selec-img-cont"
            ></MTableCell>
            <MTableCell align="left">Product</MTableCell>
            <MTableCell align="center">Status</MTableCell>
            <MTableCell align="center">Sales</MTableCell>
            <MTableCell align="center">Inventory</MTableCell>
            <MTableCell align="center">Revenue</MTableCell>
          </TableRow>
        </TableHead>
        <TableBody className="data-tab-body-cont">
          {DATA.map((row) => (
            <StyledTableRow
              key={row.name}
              className="data-tab-row-cont"
              onClick={(e) => {
                navigate("/productname/edit");
              }}
            >
              <MTableCell align="center" padding="checkbox">
                <MCheckbox color="primary" checked={false} onChange={null} />
              </MTableCell>
              <MTableCell align="left" className="data-tab-selec-img-cont">
                <div className="data-tab-data-img-data">{row.image}</div>
              </MTableCell>
              <MTableCell className="data-tab-data-name-cont">
                <div className="data-tab-data-name-data">{row.product}</div>
              </MTableCell>
              <MTableCell align="center">
                <div className="data-tab-data-stat-data-cont">
                  <div className="data-tab-data-stat-data">{row.status}</div>
                </div>
              </MTableCell>
              <MTableCell align="center">{row.sales}</MTableCell>
              <MTableCell align="center">{row.inventory}</MTableCell>
              <MTableCell align="center">{row.revenue}</MTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const ProductTable = (props) => {
  return (
    <>
      <div className="data-tab-main-cont">
        <ProductTableRender />
      </div>
    </>
  );
};

export default ProductTable;
