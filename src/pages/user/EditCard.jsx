//TODO Libraries
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

//TODO CSS
import "../../styles/createNewCard.css";
//TODO Pages
import EditCardForm from "../../users/card/editCard/EditCardForm";
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData.js";
import { SearchContext } from "../../context/SearchContext.jsx";

//TODO Main Function
const EditCard = () => {
  //TODO Variables
  const { id } = useParams();
  const { theme } = useContext(ThemeContext);
  const {  getCardById } = useContext(SearchContext);
  //TODO States

  //TODO Functions

  //TODO useEffect
  useEffect(() => {
    getCardById(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //TODO Return
  return (
    <div className="createNewCardWrapper">
      <EditCardForm
        theme={theme}
        dark={DARK_MODE}
        light={LIGHT_MODE}
        cardID={id}
      />
    </div>
  );
};

export default EditCard;
