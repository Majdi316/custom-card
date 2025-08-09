//TODO Libraries
import { useContext } from "react";
//TODO Images
import visitorHomePage from "../images/visitor1.JPG";
import visitorCardInfoPage from "../images/visitor2.JPG";
import visitorAboutPage from "../images/visitor3.JPG";
import visitorRegisterPage from "../images/visitor4.JPG";
//TODO CSS
import "../styles/about.css";
//TODO Pages
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
import AboutPageUser from "./AboutPageUser";
//TODO Main Page
const AboutPage = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  //TODO Return
  return (
    <div className="aboutWrapper">
      <div
        style={{
          background:
            theme === "dark" ? DARK_MODE.threeColor : LIGHT_MODE.threeColor,
          color: theme === "dark" ? "white" : "black",
        }}
        className="aboutWrapperInfo"
      >
        <div
          style={{
            background:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
            color: theme === "dark" ? "white" : "black",
          }}
          className="aboutWrapperInfoTitle"
        >
          <h1>about us</h1>
        </div>
        {/* ---------------------------------------- */}
        <div className="description">
          <p>
            in this application you can look at many Customization card, this
            app contain three types of people:
            <ol
              style={{
                color:
                  theme === "dark"
                    ? DARK_MODE.firstColor
                    : LIGHT_MODE.firstColor,
              }}
            >
              <li>visitors</li>
              <li>users</li>
              <li>admins</li>
            </ol>
            for each type have different permissions
          </p>
        </div>
        {/* ---------------------------------------- */}
        <div
          style={{
            background:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
            color: theme === "dark" ? "white" : "black",
          }}
          className="aboutWrapperInfoTitle"
        >
          <h1>visitors</h1>
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
            visitors can look at all cards
          </div>
          <div className="aboutWrapperInfoDetailsImage">
            <img src={visitorHomePage} alt="visitor home page" />
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
            <img src={visitorCardInfoPage} alt="visitor card info page" />
          </div>
          <div className="aboutWrapperInfoDetailsDesc">
            can look at more details about the card when click on view icon
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
            visitors can read about us
          </div>
          <div className="aboutWrapperInfoDetailsImage">
            <img src={visitorAboutPage} alt="visitor about page" />
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
            <img src={visitorRegisterPage} alt="visitor register page" />
          </div>
          <div className="aboutWrapperInfoDetailsDesc">
            can create a new account
          </div>
        </div>
        {/* ---------------------------------------- */}
        <AboutPageUser/>
      </div>
    </div>
  );
};

export default AboutPage;
