//TODO Libraries
import { useContext } from "react";
import { Link } from "react-router-dom";
//TODO MUI Components
import { Container } from "@mui/material";
//TODO Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddCardIcon from "@mui/icons-material/AddCard";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
//TODO CSS
import "../../styles/footer.css";
//TODO Pages
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
import { useCurrentUser } from "../../context/UserContext";

//TODO Main Function
const Footer = ({ drawerWidth }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useCurrentUser();
  //TODO Return
  return (
    <Container
      sx={{
        backgroundColor:
          theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
        ml: { xs: 0, md: drawerWidth },
        width: { xs: "100%", md: `calc(100% - ${drawerWidth})` },
      }}
    >
      <div className="footerWrapper">
        {/* -------------------------------------- */}
        <Link to={"/"}>
          <div
            className="footerWrapperInfo"
            style={{
              background:
                theme === "dark" ? DARK_MODE.threeColor : LIGHT_MODE.threeColor,
              color: theme === "dark" ? "white" : "black",
            }}
          >
            <HomeIcon />
            <p>home</p>
          </div>
        </Link>
        {/* -------------------------------------- */}
        <Link to={"/about"}>
          <div
            className="footerWrapperInfo"
            style={{
              background:
                theme === "dark" ? DARK_MODE.threeColor : LIGHT_MODE.threeColor,
              color: theme === "dark" ? "white" : "black",
            }}
          >
            <InfoIcon />
            <p>about</p>
          </div>
        </Link>
        {user ? (
          <>
            {/* -------------------------------------- */}
            <Link to={"/user/cards/createNewCard"}>
              <div
                className="footerWrapperInfo"
                style={{
                  background:
                    theme === "dark"
                      ? DARK_MODE.threeColor
                      : LIGHT_MODE.threeColor,
                  color: theme === "dark" ? "white" : "black",
                }}
              >
                <AddCardIcon />
                <p>+ card</p>
              </div>
            </Link>
            {/* -------------------------------------- */}
            <Link to={"/user/profile"}>
              <div
                className="footerWrapperInfo"
                style={{
                  background:
                    theme === "dark"
                      ? DARK_MODE.threeColor
                      : LIGHT_MODE.threeColor,
                  color: theme === "dark" ? "white" : "black",
                }}
              >
                <PersonIcon />
                <p>profile</p>
              </div>
            </Link>
            {/* -------------------------------------- */}
            <Link to={"/user/cards/myFavoriteCards"}>
              <div
                className="footerWrapperInfo"
                style={{
                  background:
                    theme === "dark"
                      ? DARK_MODE.threeColor
                      : LIGHT_MODE.threeColor,
                  color: theme === "dark" ? "white" : "black",
                }}
              >
                <FavoriteIcon />
                <p>favorite</p>
              </div>
            </Link>
            {user.isAdmin ? (
              <>
                {/* -------------------------------------- */}
                <Link to={"/admin/home"}>
                  <div
                    className="footerWrapperInfo"
                    style={{
                      background:
                        theme === "dark"
                          ? DARK_MODE.threeColor
                          : LIGHT_MODE.threeColor,
                      color: theme === "dark" ? "white" : "black",
                    }}
                  >
                    <AdminPanelSettingsIcon />
                    <p>dashboard</p>
                  </div>
                </Link>
              </>
            ) : null}
          </>
        ) : null}
      </div>
    </Container>
  );
};

export default Footer;
