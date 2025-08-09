//TODO Libraries
import { useContext } from "react";
//TODO CSS
import "../../styles/profile.css";
//TODO Pages
import ProfileDetails from "../../users/ProfileDetails";
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData.js";
//TODO Main Function
const Profile = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  //TODO Return
  return (
    <div className="profileWrapper">
      <ProfileDetails theme={theme} dark={DARK_MODE} light={LIGHT_MODE} />
    </div>
  );
};

export default Profile;
