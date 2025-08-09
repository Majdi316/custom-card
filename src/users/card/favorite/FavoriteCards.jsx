//TODO Libraries
import { useCallback, useContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
//TODO MUI Components
import { Box } from "@mui/material";
//TODO Pages
import { ThemeContext } from "../../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../../theme/themeData";
import { SearchContext } from "../../../context/SearchContext";
import FavoriteDetails from "../../../pages/user/FavoriteDetails";
import { useCurrentUser } from "../../../context/UserContext";

//TODO Main Function
const FavoriteCards = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  const { cards } = useContext(SearchContext);
  const { token } = useCurrentUser();
  let x = localStorage.getItem("userDetails");
  const userDetails = JSON.parse(x);
  const myFavorite = [];
  //TODO Function
  const getMyFavoriteCards = () => {
    if (userDetails) {
      cards?.map((card) => {
        card.likes.map((user) => {
          if (user === userDetails._id) {
            myFavorite.push(card);
          }
        });
      });
    }
  };
  const toggleLike = useCallback(
    async (cardId) => {
      try {
        // eslint-disable-next-line no-unused-vars
        const response = await axios.patch(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" +
            cardId,
          {},
          { headers: { "x-auth-token": token } }
        );
        window.location.reload(false);
      } catch (error) {
        toast.error(error);
      }
    },
    [token]
  );

  getMyFavoriteCards();
  let myFavoriteDetails = JSON.stringify(myFavorite);
  localStorage.setItem("myFavoriteDetails", myFavoriteDetails);
  //TODO Return
  return (
    <Box>
      <div className="title">
        <h1
          style={{
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          My Favorite Card
        </h1>
      </div>
      <FavoriteDetails
        theme={theme}
        dark={DARK_MODE}
        light={LIGHT_MODE}
        toggleLike={toggleLike}
      />
    </Box>
  );
};

export default FavoriteCards;
