//TODO Libraries
import { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
//TODO Pages
import { useCurrentUser } from "../../context/UserContext";
import MyCardsInfo from "../../users/card/MyCardsInfo";
import { SearchContext } from "../../context/SearchContext";

//TODO Main Function
const MyCards = () => {
  //TODO Variables
  const { token } = useCurrentUser();
  const { myCards } = useContext(SearchContext);
  //TODO State
  //TODO Function

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
        window.location.reload(false)
      } catch (error) {
        toast.error(error);
      }
    },
    [token]
  );
  useEffect(() => {}, []);
  //TODO Return
  return (
    <div>
      <MyCardsInfo
        myCards={myCards}
        toggleLike={toggleLike}
        deleteCard={deleteCard}
      />
    </div>
  );
};

export default MyCards;
