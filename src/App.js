import { BaseCont, InnerCont, PageCont } from "./components/base/holder";
import SideBar from "./components/nav/sideBar";
import TopBar from "./components/nav/topBar";
import { grommet } from "grommet/themes";
import { Grommet, Box, Heading, Paragraph, Text } from "grommet";
import ProdListing from "./components/pages/prodListing";

function App() {
  return (
    <Grommet theme={grommet}>
      <div className="App">
        <BaseCont>
          <SideBar />
          <InnerCont>
            {/* <TopBar /> */}
            <PageCont>
              <ProdListing />
            </PageCont>
          </InnerCont>
        </BaseCont>
      </div>
    </Grommet>
  );
}

export default App;
