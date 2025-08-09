//TODO Libraries
import { useEffect, useState } from "react";
//TODO Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
//TODO Pages
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
//TODO Main Function
const Media = ({ card, theme }) => {
  //TODO States
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [likes, setLikes] = useState(0);
  //TODO Functions
  const getFullDate = () => {
    let fullDate = card.createdAt;
    let arr = fullDate.split("T");
    let dateData = arr[0];
    setDate(dateData);
    let hourData = arr[1].split(".")[0];
    setHour(hourData);
  };
  const getLikesCount = () => {
    let likesCount = card.likes.length;
    setLikes(likesCount);
  };
  //TODO useEffects
  useEffect(() => {
    getFullDate();
    getLikesCount();
  }, [card]);
  //TODO Return
  return (
    <div>
      <div className="title">
        <h1
          style={{
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          {card.title}
        </h1>
      </div>
      {/* ------------------------------------------ */}
      <div className="image">
        <img src={card.image.url} alt={""} />
      </div>
      {/* ------------------------------------------ */}
      <div
        className="createdAt"
        style={{
          background:
            theme === "dark" ? DARK_MODE.secondColor : LIGHT_MODE.secondColor,
            color:
            theme === "dark" ? "white" : "black",
        }}
      >
        <div className="content">
          <p>
            Created at date : {date} at {hour}
          </p>
        </div>
        <div className="favorite">
          <p>
            <span>{likes}</span>
            <FavoriteIcon sx={{ color: "red" }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Media;
