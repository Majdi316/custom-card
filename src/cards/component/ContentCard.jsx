//TODO Libraries
import { useContext } from "react";
//TODO MUI Components
import { CardContent } from "@mui/material";
//TODO Pages
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
//TODO CSS

//TODO Main Function
const ContentCard = ({ card }) => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  return (
    <CardContent>
      <div>
        <h1
          style={{
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          {card.title}
        </h1>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div>
        <h2
          style={{
            marginBottom: "7px",
            color: theme === "dark" ? "white" : "black",
          }}
        >
          {card.subtitle}
        </h2>
      </div>
      {/* ---------------------------------------------------------------- */}
      <hr />
      <div style={{ marginTop: "7px" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          Phone:{" "}
        </span>{" "}
        <span
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
        >
          {card.phone}
        </span>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          Address:{" "}
        </span>{" "}
        <span
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
        >
          {card.address.city}
        </span>
      </div>
      {/* ---------------------------------------------------------------- */}
      <div>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          Card Number:
        </span>{" "}
        <span
          style={{
            color: theme === "dark" ? "white" : "black",
          }}
        >
          {card.bizNumber}
        </span>
      </div>
    </CardContent>
  );
};

export default ContentCard;
