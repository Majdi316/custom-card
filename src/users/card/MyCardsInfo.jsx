import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData.js";
import CustomCard from "../../cards/component/CustomCard";

const MyCardsInfo = ({ myCards, toggleLike, deleteCard }) => {
  const { theme } = useContext(ThemeContext);
  //TODO States
  const [filterCards, setFilterCards] = useState([]);
  //TODO Functions
  const applyDelete = () => {
    let cardsCopy = myCards.slice();

    setFilterCards(cardsCopy);
  };
useEffect(()=>{
  applyDelete()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[myCards])
  return (
    <Box>
      <Box
        sx={{
          mt: "15px",
          display: "flex",
          flexWrap: "wrap",
          mb: "25px",
          gap: 5,
        }}
      >
        {myCards.length === 0 ? (
          <div className="wrapper">
            <div>
              <h1
                style={{
                  color:
                    theme === "dark"
                      ? DARK_MODE.firstColor
                      : LIGHT_MODE.firstColor,
                }}
              >
                404
              </h1>
            </div>
            <div>
              <h1
                style={{
                  color:
                    theme === "dark"
                      ? DARK_MODE.secondColor
                      : LIGHT_MODE.secondColor,
                }}
              >
                you do not have any card{" "}
              </h1>
            </div>
          </div>
        ) : (
          filterCards.map((card) => (
            <CustomCard
              key={card._id}
              card={card}
              toggleLike={toggleLike}
              deleteCard={deleteCard}
            />
          ))
        )}
      </Box>
    </Box>
  );
};

export default MyCardsInfo;
