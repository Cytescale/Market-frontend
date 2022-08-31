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

const MTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f9f9f9",
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
    borderBottom: "1px solid #f1f1f1",
    padding: "8px",
  },
  "tr:hover": {
    backgroundColor: "#f5f5f5",
  },
}));

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#0057FF",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

function MCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
const ActiveSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 32,
  height: 17,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#0057FF",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "3px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
      boxShadow: "null",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 12,
    height: 12,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const ProductTableRender = (props) => {
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
            <StyledTableRow key={row.name} className="data-tab-row-cont">
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
