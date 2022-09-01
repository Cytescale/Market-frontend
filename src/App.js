import { BaseCont, InnerCont, PageCont } from "./components/base/holder";
import SideBar from "./components/nav/sideBar";

import TopBar from "./components/nav/topBar";
import ProdListing from "./components/pages/productlisting/prodListing";
import AddProduct from "./components/pages/addProduct/addProduct";

function App() {
  return (
    <div className="App">
      <BaseCont>
        <SideBar />
        <InnerCont>
          {/* <TopBar /> */}
          <PageCont>
            <AddProduct />
          </PageCont>
        </InnerCont>
      </BaseCont>
    </div>
  );
}

export default App;
