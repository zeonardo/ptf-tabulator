/* import React from 'react'; */
import Header from './components/header';
import Logo from './components/logo';
import Content from './components/content';
import Tab, { Tab2 } from 'ztabs'
import TabController from './components/tabController';
import Footer from './components/footer';
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <Logo />
          Tabulator
        </Header>

        <Content>
          <h2>Uncontrolled Tabulator</h2>
          <Tab className="uncontrolled" initialActive={0}>
            <Tab.Pane title="First Pane">
              <>
                <strong>First</strong> Pane Body
              </>
            </Tab.Pane>
            <Tab.Pane title="Second Pane">
              <>
                Second <strong>Pane</strong> Body
              </>
            </Tab.Pane>
            <Tab.Pane title="Third Pane">
              Third Pane Body
            </Tab.Pane>
          </Tab>
          <hr/>

          <h2>Controlled Tabulator</h2>
          <TabController />
          <hr/>

          <h2>Tab2 with single render</h2>
          <Tab2 className="uncontrolled" initialActive={2}>
            <Tab2.Pane title="First Pane Single Render">
              <><strong>First</strong> Pane Body</>
            </Tab2.Pane>
            <Tab2.Pane title="Second Pane Single Render">
              <>Second <strong>Pane</strong> Body</>
            </Tab2.Pane>
            <Tab2.Pane title="Third Pane Single Render">
              Third Pane Body
            </Tab2.Pane>
          </Tab2>
        </Content>
        
        <Footer>
          © 2022 - zeonardo
        </Footer>
      </div>
    </>
  );
}

export default App;
