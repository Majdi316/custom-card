//TODO Libraries
import { useContext } from "react";
//TODO CSS
import "../../styles/createNewCard.css";
//TODO Pages
import CreateNewCardForm from "../../users/card/CreateNewCardForm";
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
//TODO Main Function
const CreateNewCard = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  //TODO Return
  return (
    <div className="createNewCardWrapper">
      <CreateNewCardForm theme={theme} dark={DARK_MODE} light={LIGHT_MODE} />
    </div>
  );
};

export default CreateNewCard;
