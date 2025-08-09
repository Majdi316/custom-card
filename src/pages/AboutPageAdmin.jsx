//TODO Libraries
import { useContext } from "react";
//TODO Images
import adminCardPage from "../images/admin1.JPG";
import adminPage from "../images/admin2.JPG";
import admin2Page from "../images/admin3.JPG";
import adminUsersPage from "../images/admin4.JPG";
//TODO Pages
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
//TODO Main Page
const AboutPageAdmin = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  //TODO Return
  return (
    <>
      {/* ---------------------------------------- */}
      <div
        style={{
          background:
            theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          color: theme === "dark" ? "white" : "black",
        }}
        className="aboutWrapperInfoTitle"
      >
        <h1>admins</h1>
      </div>
      {/* ---------------------------------------- */}
      <div
        className="aboutWrapperInfoDetails"
        style={{
          background:
            theme === "dark" ? DARK_MODE.secondColor : LIGHT_MODE.secondColor,
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <div className="aboutWrapperInfoDetailsDesc">
          admin can view,like,delete & update any card
        </div>
        <div className="aboutWrapperInfoDetailsImage">
          <img src={adminCardPage} alt="admin card page" />
        </div>
      </div>
      {/* ---------------------------------------- */}
      <div
        className="aboutWrapperInfoDetails"
        style={{
          background:
            theme === "dark" ? DARK_MODE.secondColor : LIGHT_MODE.secondColor,
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <div className="aboutWrapperInfoDetailsImage">
          <img src={adminPage} alt="admin home 1 page" />
        </div>
        <div className="aboutWrapperInfoDetailsDesc">
          admin can look more details about the users <br />
          number of users in app who is business or not & who is win <br />
          and can search for any user by ID
        </div>
      </div>
      {/* ---------------------------------------- */}
      <div
        className="aboutWrapperInfoDetails"
        style={{
          background:
            theme === "dark" ? DARK_MODE.secondColor : LIGHT_MODE.secondColor,
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <div className="aboutWrapperInfoDetailsDesc">
          admin can look at more details about cards <br />
          number of likes & card has most/less likes <br />
          number of cards have or not likes <br />
          and can search for any card by ID
        </div>
        <div className="aboutWrapperInfoDetailsImage">
          <img src={admin2Page} alt="admin home 2 page" />
        </div>
      </div>
      {/* ---------------------------------------- */}
       <div
        className="aboutWrapperInfoDetails"
        style={{
          background:
            theme === "dark" ? DARK_MODE.secondColor : LIGHT_MODE.secondColor,
          color: theme === "dark" ? "white" : "black",
        }}
      >
        <div className="aboutWrapperInfoDetailsImage">
          <img src={adminUsersPage} alt="admin users page" />
        </div>
        <div className="aboutWrapperInfoDetailsDesc">
          admin can view all users and admins details <br />
          admin can delete just users account 
        </div>
      </div>
      {/* ---------------------------------------- */}
    </>
  );
};

export default AboutPageAdmin;
