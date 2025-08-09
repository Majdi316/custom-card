//TODO Components
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
//TODO Main Function
const Layout = ({ children }) => {
  //TODO Variables
  const drawerWidth = "240px";
  //TODO Return
  return (
    <>
      <Header drawerWidth={drawerWidth} />
      <Main drawerWidth={drawerWidth}>{children}</Main>
      <Footer  drawerWidth={drawerWidth}/>
    </>
  );
};

export default Layout;
