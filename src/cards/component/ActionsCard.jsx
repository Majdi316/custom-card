//TODO Libraries
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
//TODO MUI Components
import { CardActions, IconButton } from "@mui/material";
//TODO MUI Icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
//TODO pages
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
import { useCurrentUser } from "../../context/UserContext";

//TODO Main Function
const ActionsCard = ({ card, toggleLike, likes, deleteCard }) => {
  //TODO Variables
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { user } = useCurrentUser();
  let x = localStorage.getItem("userDetails");
  const userDetails = JSON.parse(x);
  //TODO State
  const [isLike, setIsLike] = useState(likes.includes(user?._id));

  //TODO Return
  return (
    <>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between" }}
        disableSpacing
      >
        {/* ---------------- 1 ------------------- */}
        <a href={`../../cards/details/${card._id}`} target="_blank">
          <IconButton
            onClick={() => {
              //  navigate(`../../cards/details/${card._id}`);
            }}
          >
            <VisibilityIcon
              sx={{
                color:
                  theme === "dark"
                    ? DARK_MODE.firstColor
                    : LIGHT_MODE.firstColor,
              }}
            />
          </IconButton>
        </a>
        {/* ---------------- 2 ------------------- */}

        <IconButton>
          <LocalPhoneIcon
            sx={{
              color:
                theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
            }}
          />
        </IconButton>
        {/* ---------------- 3 ------------------- */}
        {user ? (
          <IconButton
            onClick={() => {
              setIsLike((prev) => !prev);
              toggleLike(card._id);
            }}
          >
            <FavoriteIcon
              sx={{
                color:
                  isLike === true
                    ? "red"
                    : theme === "dark"
                    ? DARK_MODE.firstColor
                    : LIGHT_MODE.firstColor,
              }}
            />
          </IconButton>
        ) : null}

        {/* ---------------- 4 ------------------- */}

        {card.user_id === userDetails?._id || user?.isAdmin ? (
          <IconButton
            onClick={() => {
              navigate(`../../user/cards/editCard/${card._id}`);
              window.location.reload(false);
            }}
          >
            <EditIcon
              sx={{
                color:
                  theme === "dark"
                    ? DARK_MODE.firstColor
                    : LIGHT_MODE.firstColor,
              }}
            />
          </IconButton>
        ) : null}

        {/* ---------------- 5 ------------------- */}
        {card.user_id === userDetails?._id || user?.isAdmin ? (
          <IconButton
            onClick={() => {
              deleteCard(card._id, card.bizNumber);
            }}
          >
            <DeleteIcon
              sx={{
                color:
                  theme === "dark"
                    ? DARK_MODE.firstColor
                    : LIGHT_MODE.firstColor,
              }}
            />
          </IconButton>
        ) : null}
      </CardActions>
    </>
  );
};

export default ActionsCard;
