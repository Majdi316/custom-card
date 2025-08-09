//TODO Libraries
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//TODO CSS
import "../styles/cardInfo.css";
//TODO Pages
import { SearchContext } from "../context/SearchContext";
import Media from "../cards/cardInfo/Media";
import { ThemeContext } from "../context/ThemeContext";
import Body from "../cards/cardInfo/Body";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
import CardFooter from "../cards/cardInfo/CardFooter";

//TODO Main Function
const CardInfo = () => {
  //TODO Variables
  const { id } = useParams();
  const { cards } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate()
  //TODO States
  const [singleCard, setSingleCard] = useState([]);
  //TODO Functions
  const getSingleCardByID = () => {
    let oneCard = cards.slice();
    oneCard = oneCard.filter((card) => card._id.includes(id));
    setSingleCard(oneCard);
  };
  //TODO useEffects
  useEffect(() => {
    window.scroll(0, 0);
    getSingleCardByID();
  }, [id, cards]);
  console.log(singleCard);
  //TODO Return
  return (
    <div className="wrapper">
      {singleCard.length !== 0 ? (
        <>
          {singleCard.map((card) => (
            <div
              className="wrapper-info"
              style={{
                background:
                  theme === "dark"
                    ? DARK_MODE.threeColor
                    : LIGHT_MODE.threeColor,
                color: theme === "dark" ? "white" : "black",
              }}
            >
              <Media card={card} theme={theme} />
              <Body card={card} theme={theme} />
              <CardFooter card={card} theme={theme} />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="errorMessage">
            <p>Invalid Card That Have ID {id}</p>
            <button onClick={()=>{
              navigate("/")
            }}
              style={{
                background:
                  theme === "dark"
                    ? DARK_MODE.firstColor
                    : LIGHT_MODE.firstColor,
                color: theme === "dark" ? "white" : "black",
              }}
            >
              Go Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardInfo;
