//TODO Libraries
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
//TODO Material UI Component
import {
  Drawer,
  Divider,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
//TODO Icons
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import SunnyIcon from "@mui/icons-material/Sunny";
import BedtimeIcon from "@mui/icons-material/Bedtime";
//TODO Pages
import ROUTES from "../../routes/routesDict";
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData.js";
import { removeToken } from "../../users/services/localStorage.js";
import DrawerUser from "./DrawerUser.jsx";
import { useCurrentUser } from "../../context/UserContext.jsx";
//TODO Main Function
const DrawerPage = ({
  drawerWidth,
  path,
  displayMenu,
  drawerType,
  hideDrawer,
}) => {
  //TODO Variables
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useCurrentUser();
  //TODO Functions
  const logout = () => {
    removeToken();
    navigate("/");

    localStorage.removeItem("userDetails");
    localStorage.removeItem("myFavoriteDetails");
    localStorage.removeItem("cardDetail");
    localStorage.removeItem("myCardsNumber");
    window.location.reload(false);
  };
  //TODO Return
  return (
    <>
      <Drawer
        sx={{
          backgroundColor:
            theme === "dark" ? DARK_MODE.secondColor : LIGHT_MODE.secondColor,
          width: drawerWidth,
          flexShrink: 0,
          display: { xs: displayMenu, md: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor:
              theme === "dark" ? DARK_MODE.secondColor : LIGHT_MODE.secondColor,
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawer();
        }}
      >
        <Button
          sx={{ mt: "10px", background: "inherit", fontSize: "25px" }}
          color="inherit"
          onClick={toggleTheme}
          variant="contained"
        >
          {theme === "dark" ? (
            <SunnyIcon sx={{ color: DARK_MODE.textColor }} />
          ) : (
            <BedtimeIcon sx={{ color: LIGHT_MODE.textColor }} />
          )}
        </Button>
        <List>
          {/*----------------- 1 -------------------*/}
          <ListItem
            disablePadding
            sx={{
              bgcolor:
                path === ROUTES.root
                  ? theme === "dark"
                    ? DARK_MODE.threeColor
                    : LIGHT_MODE.threeColor
                  : null,
              color:
                theme === "dark" ? DARK_MODE.textColor : LIGHT_MODE.textColor,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(ROUTES.root);
                window.scroll(0, 0);
              }}
            >
              <ListItemIcon>
                <HomeIcon
                  sx={{
                    color:
                      theme === "dark"
                        ? DARK_MODE.textColor
                        : LIGHT_MODE.textColor,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          {/*----------------- 2 -------------------*/}
          <ListItem
            disablePadding
            sx={{
              bgcolor:
                path === ROUTES.about
                  ? theme === "dark"
                    ? DARK_MODE.threeColor
                    : LIGHT_MODE.threeColor
                  : null,
              color:
                theme === "dark" ? DARK_MODE.textColor : LIGHT_MODE.textColor,
            }}
          >
            <ListItemButton
              onClick={() => {
                navigate(ROUTES.about);
                window.scroll(0, 0);
              }}
            >
              <ListItemIcon>
                <InfoIcon
                  sx={{
                    color:
                      theme === "dark"
                        ? DARK_MODE.textColor
                        : LIGHT_MODE.textColor,
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>

          {/*----------------- 3 -------------------*/}
          {user ? null : (
            <>
              {" "}
              <ListItem
                disablePadding
                sx={{
                  bgcolor:
                    path === ROUTES.register
                      ? theme === "dark"
                        ? DARK_MODE.threeColor
                        : LIGHT_MODE.threeColor
                      : null,
                  color:
                    theme === "dark"
                      ? DARK_MODE.textColor
                      : LIGHT_MODE.textColor,
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(ROUTES.register);
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemIcon>
                    <PersonAddAlt1Icon
                      sx={{
                        color:
                          theme === "dark"
                            ? DARK_MODE.textColor
                            : LIGHT_MODE.textColor,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
              {/*----------------- 4 -------------------*/}
              <ListItem
                disablePadding
                sx={{
                  bgcolor:
                    path === ROUTES.login
                      ? theme === "dark"
                        ? DARK_MODE.threeColor
                        : LIGHT_MODE.threeColor
                      : null,
                  color:
                    theme === "dark"
                      ? DARK_MODE.textColor
                      : LIGHT_MODE.textColor,
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(ROUTES.login);
                    window.scroll(0, 0);
                  }}
                >
                  <ListItemIcon>
                    <LoginIcon
                      sx={{
                      
                        color:
                          theme === "dark"
                            ? DARK_MODE.textColor
                            : LIGHT_MODE.textColor,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            </>
          )}

          {/*----------------- Users Only -------------------*/}
          {user ? (
            <>
              <Divider sx={{ color: "red", width: "75%", margin: "0 auto" }}>
                USER
              </Divider>
              <DrawerUser
                theme={theme}
                dark={DARK_MODE}
                light={LIGHT_MODE}
                logout={logout}
                path={path}
                route={ROUTES}
                navigate={navigate}
                user={user}
              />
            </>
          ) : null}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerPage;
