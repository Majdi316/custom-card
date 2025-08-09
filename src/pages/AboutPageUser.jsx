//TODO Libraries
import { useContext } from "react";
//TODO Images
import userLoginPage from "../images/user1.JPG";
import userProfilePage from "../images/user2.JPG";
import userUpdateProfilePage from "../images/user3.JPG";
import userCreateCardPage from "../images/user4.JPG";
import userMyCardsPage from "../images/user5.JPG";
import userCardPage from "../images/user6.JPG";
import userEditCardPage from "../images/user7.JPG";
import userFavoritePage from "../images/user8.JPG";
//TODO Pages
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
import AboutPageAdmin from "./AboutPageAdmin";
//TODO Main Page
const AboutPageUser = () => {
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
        <h1>users</h1>
      </div>
      {/* ---------------------------------------- */}
      <div className="description">
        <p>
          for each month the user that have most likes in his card we will give
          him gift
        </p>
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
          user can login to the application
        </div>
        <div className="aboutWrapperInfoDetailsImage">
          <img src={userLoginPage} alt="user login page" />
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
          <img src={userProfilePage} alt="user profile page" />
        </div>
        <div className="aboutWrapperInfoDetailsDesc">
          user can view his details
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
          user can update his details
        </div>
        <div className="aboutWrapperInfoDetailsImage">
          <img src={userUpdateProfilePage} alt="user update profile page" />
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
          <img src={userCreateCardPage} alt="user create new card page" />
        </div>
        <div className="aboutWrapperInfoDetailsDesc">
          user can create new card
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
          user can look at his created cards
        </div>
        <div className="aboutWrapperInfoDetailsImage">
          <img src={userMyCardsPage} alt="user my cards page" />
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
          <img src={userCardPage} alt="user card page" />
        </div>
        <div className="aboutWrapperInfoDetailsDesc">
          user can like & unlike cards when click on favorite icon & delete his
          card when click on trash icon
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
          user can edit his card details
        </div>
        <div className="aboutWrapperInfoDetailsImage">
          <img src={userEditCardPage} alt="user edit card page" />
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
          <img src={userFavoritePage} alt="user favorite page" />
        </div>
        <div className="aboutWrapperInfoDetailsDesc">
          user can look at all favorite cards
        </div>
      </div>
      {/* ------------------ADMIN---------------------- */}
      <AboutPageAdmin />
    </>
  );
};

export default AboutPageUser;
