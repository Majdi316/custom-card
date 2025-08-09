//TODO MUI Components
import { CardMedia } from "@mui/material";
//TODO Main Function
const MediaCard = ({ card }) => {
  return (
    <CardMedia sx={{ height: 140}} image={card.image.url} title={card.title} />
  );
};

export default MediaCard;
