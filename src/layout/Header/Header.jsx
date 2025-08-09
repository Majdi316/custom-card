//TODO Libraries
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//TODO Pages
import AppBarPage from "./AppBarPage";
import DrawerPage from "./DrawerPage";
import ROUTES from "../../routes/routesDict";
//TODO CSS Files
import "./header.css";
//TODO Main Function
const Header = ({ drawerWidth }) => {
  //TODO Variables
  const currentLocation = useLocation();
  //TODO States
  const [title, setTitle] = useState("");
  const [path, setPath] = useState("");
  const [noneOrBlock, setNoneOrBlock] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");
  //TODO Functions
  const showDrawer = () => {
    setDrawerType("temporary");
    setNoneOrBlock("block");
  };
  const hideDrawer = () => {
    setDrawerType("permanent");
    setNoneOrBlock("none");
  };
  //TODO useEffect
  useEffect(() => {
    switch (currentLocation.pathname) {
      case "/":
        setTitle("Home");
        setPath(ROUTES.root);
        break;
      case "/about":
        setTitle("About");
        setPath(ROUTES.about);
        break;
      case "/cards":
        setTitle("All Cards");
        setPath(ROUTES.cards);
        break;
      case "/login":
        setTitle("Login");
        setPath(ROUTES.login);
        break;
      case "/register":
        setTitle("Create New Account");
        setPath(ROUTES.register);
        break;
      case "/sandbox":
        setTitle("Sand Box");
        setPath(ROUTES.sandBox);
        break;
      case "/cards/details/:id":
        setTitle("Card Detail");
        setPath(ROUTES.cardInfo);
        break;
      case "/user/profile":
        setTitle("My Profile");
        setPath(ROUTES.profile);
        break;
      case "/user/cards/createNewCard":
        setTitle("Create New Card");
        setPath(ROUTES.createNewCard);
        break;
        case "/user/cards/myCards":
        setTitle("My Cards");
        setPath(ROUTES.myCards);
        break;
         case "/user/cards/editCard/:id":
        setTitle("Edit Card");
        setPath(ROUTES.editCard);
        break;
         case "/user/cards/myFavoriteCards":
        setTitle("My Favorite Cards");
        setPath(ROUTES.favorite);
        break;
        case "/user/profile/update":
        setTitle("Edit My Profile");
        setPath(ROUTES.updateProfile);
        break;
        case "/admin/home":
        setTitle("Dashboard");
        setPath(ROUTES.admin);
        break;
         case "/admin/home/users":
        setTitle("View Users");
        setPath(ROUTES.allUsers);
        break;
         case "/admin/home/users/userInfo":
        setTitle("User Details");
        setPath(ROUTES.userInfo);
        break;
      default:
        setTitle("");
    }
  }, [currentLocation]);
  //TODO Return
  return (
    <>
      <AppBarPage
        drawerWidth={drawerWidth}
        title={title}
        showDrawer={showDrawer}
      />
      <DrawerPage
        drawerWidth={drawerWidth}
        path={path}
        displayMenu={noneOrBlock}
        drawerType={drawerType}
        hideDrawer={hideDrawer}
      />
    </>
  );
};

export default Header;
