import { BaseCont, InnerCont, PageCont } from "./components/base/holder";
import SideBar from "./components/nav/sideBar";
import ProdListing from "./components/pages/productlisting/prodListing";
import ProductDetail from "./components/pages/productDetail/prodDetail";
import AddProduct from "./components/pages/addProduct/addProduct";
import ProfileBase from "./components/pages/profile/profileBase";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <BaseCont>
          <SideBar />
          <InnerCont>
            {/* <TopBar /> */}
            <PageCont>
              <Routes>
                <Route exact path="/products" element={<ProdListing />}></Route>
                <Route
                  exact
                  path="/products/productname/edit"
                  element={<ProductDetail />}
                ></Route>
                <Route
                  exact
                  path="/products/add"
                  element={<AddProduct />}
                ></Route>
                <Route exact path="/profile" element={<ProfileBase />}></Route>
              </Routes>
            </PageCont>
          </InnerCont>
        </BaseCont>
      </div>
    </Router>
  );
}

export default App;
