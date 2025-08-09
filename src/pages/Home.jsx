//TODO Libraries
import { useCallback, useContext } from "react";
import axios from "axios";
//TODO MUI Components
import { Box } from "@mui/material";
//TODO Pages
import { SearchContext } from "../context/SearchContext";
import CustomCards from "../cards/component/CustomCards";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
import { useCurrentUser } from "../context/UserContext";
import { toast } from "react-toastify";

//TODO Main Function
const Home = () => {
  //TODO Variables
  const { cards } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const { token } = useCurrentUser();
  //TODO Functions
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
      } catch (error) {
        toast.error(error);
      }
    },
    [token]
  );

  const deleteCard = useCallback(
    async (cardId, bizNumber) => {
      try {
        const s = {
          bizNumber: bizNumber,
        };
        // eslint-disable-next-line no-unused-vars
        const response = await axios.delete(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" +
            cardId,
          { headers: { "x-auth-token": token } },
          { s }
        );
        toast.success("the card has been deleted");
        window.location.reload(false);
      } catch (error) {
        toast.error(error);
      }
    },
    [token]
  );
  return (
    <Box>
      <div className="title">
        <h1
          style={{
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          Custom Cards
        </h1>
      </div>
      <div>
        <h2>Here you can find any Customization Cards with any Category</h2>
      </div>
      <CustomCards cards={cards} toggleLike={toggleLike} deleteCard={deleteCard} />
    </Box>
  );
};

export default Home;
