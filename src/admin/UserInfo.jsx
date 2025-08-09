//TODO Libraries
import { useContext } from "react";
//TODO CSS
import "../styles/profile.css";
//TODO Pages
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
import UserInfoDetails from "./UserInfoDetails";
//TODO Main Function
const UserInfo = () => {

  const { theme } = useContext(ThemeContext);
  //TODO Return
  return (
    <div className="profileWrapper">
      <UserInfoDetails theme={theme} dark={DARK_MODE} light={LIGHT_MODE} />
    </div>
  );
};

export default UserInfo;
