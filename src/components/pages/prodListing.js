import React, { useState, ReactText } from "react";
import { DataTable, Text } from "grommet";
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
import Paper from "@mui/material/Paper";
import { StyledEngineProvider } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "#666666",
    padding: "4px",
    fontSize: 14,
    fontWeight: 600,
    borderBottom: "0px solid red",
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
}));
const CustomizedTables = (props) => {
  return (
    <StyledEngineProvider injectFirst>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" padding="checkbox">
                <Checkbox color="primary" checked={false} onChange={null} />
              </StyledTableCell>
              <StyledTableCell
                align="center"
                className="data-tab-selec-img-cont"
              ></StyledTableCell>
              <StyledTableCell align="left">Product</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Sales</StyledTableCell>
              <StyledTableCell align="center">Inventory</StyledTableCell>
              <StyledTableCell align="center">Revenue</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className="data-tab-body-cont">
            {DATA.map((row) => (
              <StyledTableRow
                key={row.name}
                className="data-tab-row-cont"
                sx={{ borderStyle: "none" }}
              >
                <StyledTableCell
                  align="center"
                  padding="checkbox"
                  // className="data-tab-selec-cell-cont"
                >
                  <Checkbox color="primary" checked={false} onChange={null} />
                </StyledTableCell>
                <StyledTableCell
                  align="left"
                  className="data-tab-selec-img-cont"
                >
                  <div className="data-tab-data-img-data">{row.image}</div>
                </StyledTableCell>
                <StyledTableCell className="data-tab-data-name-cont">
                  <div className="data-tab-data-name-data">{row.product}</div>
                </StyledTableCell>
                <StyledTableCell align="center">{row.status}</StyledTableCell>
                <StyledTableCell align="center">{row.sales}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.inventory}
                </StyledTableCell>
                <StyledTableCell align="center">{row.revenue}</StyledTableCell>
                <StyledTableCell align="center">
                  <ActiveSwitch defaultChecked />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledEngineProvider>
  );
};

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
const ProdTable2 = (props) => {
  return (
    <>
      <div className="data-tab-main-cont">
        <CustomizedTables />
      </div>
    </>
  );
};

const ProdTableOpt = (props) => {
  return (
    <>
      <div className="prod-list-opt-con">
        <div className="prod-list-srch-cont">
          <svg
            className="prod-list-srch-ico"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1  6_834)">
              <path
                d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_834">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <input
            className="prod-list-srch-txt"
            placeholder="Search for products"
          />
        </div>

        <button className="prod-list-sort-butt">
          <svg
            className="prod-list-sort-butt-ico"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_16_681)">
              <path
                d="M19 3L23 8H20V20H18V8H15L19 3ZM14 18V20H3V18H14ZM14 11V13H3V11H14ZM12 4V6H3V4H12Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_681">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Sort
        </button>

        <button className="prod-list-sort-butt">
          <svg
            className="prod-list-sort-butt-ico"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_16_146)">
              <path
                d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_146">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Filter
        </button>
        <div className="prod-list-opt-list-right-cont">
          <button className="prod-list-opt-expt-butt">Export</button>
          <button className="prod-list-opt-expt-butt">Import</button>
          <button className="prod-list-opt-add-butt">ADD ITEM</button>
        </div>
      </div>
    </>
  );
};

const PageHeader = (props) => {
  return (
    <>
      <div className="app-page-head-cont">
        <div className="app-page-head-lab-cont">
          <svg
            className="app-page-head-cont-ico"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_31_471)">
              <path
                d="M12 15.25V11.75C12 9.42936 12.9219 7.20376 14.5628 5.56282C16.2038 3.92187 18.4294 3 20.75 3C23.0706 3 25.2962 3.92187 26.9372 5.56282C28.5781 7.20376 29.5 9.42936 29.5 11.75V15.25H34.75C35.2141 15.25 35.6592 15.4344 35.9874 15.7626C36.3156 16.0908 36.5 16.5359 36.5 17V38C36.5 38.4641 36.3156 38.9092 35.9874 39.2374C35.6592 39.5656 35.2141 39.75 34.75 39.75H6.75C6.28587 39.75 5.84075 39.5656 5.51256 39.2374C5.18437 38.9092 5 38.4641 5 38V17C5 16.5359 5.18437 16.0908 5.51256 15.7626C5.84075 15.4344 6.28587 15.25 6.75 15.25H12ZM12 18.75H8.5V36.25H33V18.75H29.5V22.25H26V18.75H15.5V22.25H12V18.75ZM15.5 15.25H26V11.75C26 10.3576 25.4469 9.02226 24.4623 8.03769C23.4777 7.05312 22.1424 6.5 20.75 6.5C19.3576 6.5 18.0223 7.05312 17.0377 8.03769C16.0531 9.02226 15.5 10.3576 15.5 11.75V15.25Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_31_471">
                <rect width="42" height="42" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Products
        </div>
        <div className="app-page-tab-cont">
          <div className="app-tab-main-cont">
            <button className="app-tab-butt app-tab-selec">All</button>
            <button className="app-tab-butt">Active</button>
            <button className="app-tab-butt">Draft</button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProdListing = (props) => {
  return (
    <>
      <div className="app-page-cont">
        <PageHeader />
        <div className="app-prod-list-bottom-cont">
          <div className="prodtable-card-cont">
            <ProdTableOpt />
            <ProdTable2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdListing;
