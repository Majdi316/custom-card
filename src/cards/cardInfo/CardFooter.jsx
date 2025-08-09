//TODO Icons
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
//TODO CSS
import "../../styles/cardFooter.css";
//TODO Pages
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
//TODO Main Function
const CardFooter = ({ card, theme }) => {
  //TODO Return
  return (
    <div className="cardFooter">
      <div className="cardFooter-email">
        <div>
          <EmailIcon
            sx={{
              color:
                theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
            }}
          />
        </div>
        <div className="info">{card.email}</div>
      </div>
      {/* ------------------------------------------ */}
      <div className="cardFooter-phone">
        <div>
          <LocalPhoneIcon
            sx={{
              color:
                theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
            }}
          />
        </div>
        <div className="info">{card.phone}</div>
      </div>
    </div>
  );
};

export default CardFooter;
