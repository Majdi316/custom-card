//TODO Libraries
import { useContext } from "react";
//TODO Pages
import ContentCard from "./ContentCard";
import ActionsCard from "./ActionsCard";
import MediaCard from "./MediaCard";
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
//TODO MUI Components
import { Card } from "@mui/material";
//TODO Main Function
const CustomCard = ({ card, toggleLike, deleteCard }) => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  //TODO Return
  return (
    <Card
      sx={{
        background:
          theme === "dark" ? DARK_MODE.threeColor : LIGHT_MODE.threeColor,
        minWidth: 300,
        mx: 2,
        width: { xs: "100%", sm: "100%", lg: "300px" },
      }}
    >
      <MediaCard card={card} />
      <ContentCard card={card} />
      <ActionsCard
        card={card}
        toggleLike={toggleLike}
        likes={card.likes}
        deleteCard={deleteCard}
      />
    </Card>
  );
};

export default CustomCard;
