//TODO Libraries
import { useContext } from "react";
//TODO Material UI
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  TextField,
} from "@mui/material";
//TODO Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
//TODO CSS
import "../../styles/search.css";
//TODO Pages
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData.js";
import { SearchContext } from "../../context/SearchContext.jsx";
import { useCurrentUser } from "../../context/UserContext.jsx";

//TODO Main Function
const AppBarPage = ({ drawerWidth, title, showDrawer }) => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  const { search, fillSearch } = useContext(SearchContext);
  const { user, userFullDetails } = useCurrentUser();
  //TODO Return
 
  return (
    <>
      <AppBar
        sx={{
          backgroundColor:
            theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          ml: { xs: 0, md: drawerWidth },
          width: { xs: "100%", md: `calc(100% - ${drawerWidth})` },
        }}
        position="static"
      >
        <Toolbar>
          {/* ----------------------------------------------------- */}
          <IconButton
            aria-label=""
            onClick={() => {
              showDrawer();
            }}
          >
            <MenuIcon
              sx={{ color: "white", display: { xs: "block", md: "none" } }}
            />
          </IconButton>
          {/* ----------------------------------------------------- */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Typography variant="h6"> {title}</Typography>
          </Typography>
          {/* ----------------------------------------------------- */}
          <div className="input-feild">
            <input
              value={search}
              onChange={(e) => fillSearch(e.target.value)}
              type="text"
            />
            <span>
              <SearchIcon />
            </span>
          </div>
          {/* ----------------------------------------------------- */}
          <Typography
            className="fullName"
            variant="h6"
            sx={{ marginRight: "12px", flexGrow: { xs: 1, sm: 0 } }}
          >
            {userFullDetails
              ? " " +
                userFullDetails.name.first +
                " " +
                userFullDetails.name.last +
                " "
              : " "}
          </Typography>
          {/* ----------------------------------------------------- */}
          {user ? (
            <Avatar>
              {userFullDetails
                ? " " +
                  userFullDetails.name.first.slice(0, 1).toUpperCase() +
                  " " +
                  userFullDetails.name.last.slice(0, 1).toUpperCase() +
                  " "
                : " "}
            </Avatar>
          ) : null}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarPage;
