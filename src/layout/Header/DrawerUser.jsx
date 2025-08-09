//TODO MUI Components
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
//TODO Icons
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
//TODO Main Function
const DrawerUser = ({
  theme,
  dark,
  light,
  logout,
  path,
  route,
  navigate,
  user,
}) => {
  //TODO Return
  return (
    <>
      <ListItem
        disablePadding
        sx={{
          bgcolor:
            path === route.profile
              ? theme === "dark"
                ? dark.threeColor
                : light.threeColor
              : null,
          color: theme === "dark" ? dark.textColor : light.textColor,
        }}
      >
        <ListItemButton
          onClick={() => {
            navigate(`/user/profile`);
            window.scroll(0, 0);
          }}
        >
          <ListItemIcon>
            <FolderSharedIcon
              sx={{
                color: theme === "dark" ? dark.textColor : light.textColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>

      {/* -------------------------------------- */}
      <ListItem
        disablePadding
        sx={{
          bgcolor:
            path === route.updateProfile
              ? theme === "dark"
                ? dark.threeColor
                : light.threeColor
              : null,
          color: theme === "dark" ? dark.textColor : light.textColor,
        }}
      >
        <ListItemButton
          onClick={() => {
            navigate(route.updateProfile);
            window.scroll(0, 0);
          }}
        >
          <ListItemIcon>
            <PersonIcon
              sx={{
                color: theme === "dark" ? dark.textColor : light.textColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Edit My Profile" />
        </ListItemButton>
      </ListItem>

      {/* -------------------------------------- */}
      <ListItem
        disablePadding
        sx={{
          bgcolor:
            path === route.myCards
              ? theme === "dark"
                ? dark.threeColor
                : light.threeColor
              : null,
          color: theme === "dark" ? dark.textColor : light.textColor,
        }}
      >
        <ListItemButton
          onClick={() => {
            navigate(route.myCards);
            window.scroll(0, 0);
          }}
        >
          <ListItemIcon>
            <CreditCardIcon
              sx={{
                color: theme === "dark" ? dark.textColor : light.textColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="My Cards" />
        </ListItemButton>
      </ListItem>
      {/* -------------------------------------- */}

      <ListItem
        disablePadding
        sx={{
          bgcolor:
            path === route.createNewCard
              ? theme === "dark"
                ? dark.threeColor
                : light.threeColor
              : null,
          color: theme === "dark" ? dark.textColor : light.textColor,
        }}
      >
        <ListItemButton
          onClick={() => {
            navigate(route.createNewCard);
            window.scroll(0, 0);
          }}
        >
          <ListItemIcon>
            <AddCardIcon
              sx={{
                color: theme === "dark" ? dark.textColor : light.textColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Create New Card" />
        </ListItemButton>
      </ListItem>
      {/* -------------------------------------- */}

      <ListItem
        disablePadding
        sx={{
          bgcolor:
            path === route.favorite
              ? theme === "dark"
                ? dark.threeColor
                : light.threeColor
              : null,
          color: theme === "dark" ? dark.textColor : light.textColor,
        }}
      >
        <ListItemButton
          onClick={() => {
            navigate(route.favorite);
            window.location.reload(false);
            window.scroll(0, 0);
          }}
        >
          <ListItemIcon>
            <FavoriteIcon
              sx={{
                color: theme === "dark" ? dark.textColor : light.textColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="My Favorite Cards" />
        </ListItemButton>
      </ListItem>
      {/* -------------------------------------- */}
      <ListItem
        disablePadding
        sx={{
          bgcolor: theme === "dark" ? dark.secondColor : light.secondColor,
          color: theme === "dark" ? dark.textColor : light.textColor,
        }}
      >
        <ListItemButton
          onClick={() => {
            logout();
          }}
        >
          <ListItemIcon>
            <LogoutIcon
              sx={{
                color: theme === "dark" ? dark.textColor : light.textColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </ListItem>
      {user.isAdmin ? (
        <>
          <Divider sx={{ color: "red", width: "75%", margin: "0 auto" }}>
            ADMIN
          </Divider>
          {/* -------------------------------------- */}

      <ListItem
        disablePadding
        sx={{
          bgcolor:
            path === route.admin
              ? theme === "dark"
                ? dark.threeColor
                : light.threeColor
              : null,
          color: theme === "dark" ? dark.textColor : light.textColor,
        }}
      >
        <ListItemButton
          onClick={() => {
            navigate(route.admin);
            window.scroll(0, 0);
            
          }}
        >
          <ListItemIcon>
            <AdminPanelSettingsIcon
              sx={{
                color: theme === "dark" ? dark.textColor : light.textColor,
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
        </>
        
      ) : null}
    </>
  );
};

export default DrawerUser;
