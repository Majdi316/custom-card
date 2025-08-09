//TODO MUI
import { Container } from "@mui/material";
//TODO pages

//TODO Main Function
const Main = ({ children, drawerWidth }) => {
  //TODO Variables

  //TODO Return
  return (
    <Container
      sx={{
        ml: { xs: 0, md: drawerWidth },
        width: { xs: "100%", md: `calc(100% - ${drawerWidth})` },
        display: "flex",
        minHeight:"100vh",
        mb:"10px"
      }}
    >
      {children}
    </Container>
  );
};

export default Main;
