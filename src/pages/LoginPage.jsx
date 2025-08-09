//TODO Libraries
import { useContext } from "react";
//TODO CSS
import "../styles/login.css";
//TODO Pages
import LoginForm from "../users/login/LoginForm";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
//TODO Main Function
const LoginPage = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  const dark = DARK_MODE;
  const light = LIGHT_MODE;
  //TODO Return
  return (
    <div className="loginWrapper">
      <LoginForm theme={theme} dark={dark} light={light} />
    </div>
  );
};

export default LoginPage;
