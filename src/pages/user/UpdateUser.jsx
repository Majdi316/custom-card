//TODO Libraries
import { useContext } from "react";
//TODO CSS
import "../../styles/register.css";
//TODO Pages
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
import UpdateProfileForm from "../../users/updateProfile/UpdateProfileForm";

//TODO Main Function
const UpdateUser = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  //TODO Return
  return (
    <div className="wrapper-register">
      <div className="title">
        <h1
          style={{
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          Create New Account
        </h1>
      </div>
      {/* ---------------------------------------------------- */}
      <UpdateProfileForm theme={theme} dark={DARK_MODE} light={LIGHT_MODE}/>
    </div>
  );
};

export default UpdateUser;
