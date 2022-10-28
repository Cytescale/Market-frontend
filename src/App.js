import { BaseCont, InnerCont, PageCont } from "./components/base/holder";
import SideBar from "./components/nav/sideBar2";
import ProdListing from "./components/pages/productlisting/prodListing";
import ProductDetail from "./components/pages/productDetail/prodDetail";
import CustomersBase from "./components/pages/customers/customers";
import ProfileBase from "./components/pages/profile/profileBase";
import LoginBase from "./components/pages/login";
import EarningBase from "./components/pages/earnings/earnings";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

const ShellComp = (props) => {
  return (
    <BaseCont>
      <SideBar />
      <InnerCont>
        <PageCont>{props.children}</PageCont>
      </InnerCont>
    </BaseCont>
  );
};

function App() {
  const [auth, setAuth] = useState(true);
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/products"
              element={
                <ShellComp>
                  <ProdListing />
                </ShellComp>
              }
            ></Route>
            <Route exact path="/" element={<Navigate to="/products" />}></Route>
            <Route exact path="/analytics" element={<ShellComp />}></Route>
            <Route exact path="/home" element={<ShellComp />}></Route>
            <Route
              exact
              path="/customers"
              element={
                <ShellComp>
                  <CustomersBase />
                </ShellComp>
              }
            ></Route><Route
              exact
              path="/earnings"
              element={
                <ShellComp>
                  <EarningBase />
                </ShellComp>
              }
            ></Route>
            <Route
              exact
              path="/products/productname/edit"
              element={
                <ShellComp>
                  <ProductDetail />
                </ShellComp>
              }
            ></Route>
            <Route
              exact
              path="/products/add"
              element={
                <ShellComp>
                  {/* <AddProduct /> */}
                </ShellComp>
              }
            ></Route>
            <Route
              exact
              path="/profile"
              element={
                <ShellComp>
                  <ProfileBase />
                </ShellComp>
              }
            ></Route>
            <Route exact path="/login" element={<LoginBase />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
