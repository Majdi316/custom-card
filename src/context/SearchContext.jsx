//TODO Libraries
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCurrentUser } from "./UserContext";

// eslint-disable-next-line react-refresh/only-export-components
export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  //TODO States
  const [cards, setCards] = useState([]);
  const [myCards, setMyCards] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const { token } = useCurrentUser();
  const [card, setCard] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  //TODO Functions
  const fillSearch = (data) => {
    setSearch(data);
  };
  //---------------------------------------------
  const getCardsData = async () => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
      );
      setCards(response.data);
    } catch (err) {
      setError(err);
    }
  };
  const getAllUsersFromServer = async () => {
    await axios
      .get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users", {
        headers: { "x-auth-token": token },
      })
      .then((res) => {
        setAllUsers(res.data);
        
      })
      .catch((err) => toast.error(err));
  };
  const getCardById = async (cardID) => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + cardID,

        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      setCard(response.data);
      let cardDetails = JSON.stringify(response.data);
      localStorage.setItem("cardDetail", cardDetails);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };
  const getMyCardsFromServer = async () => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards",
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      localStorage.setItem("myCardsNumber", response.data.length);
      setMyCards(response.data);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };
  //-----useEffect-----------
  useEffect(() => {
    getCardsData();
    getMyCardsFromServer();
    getAllUsersFromServer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const value = {
    search,
    fillSearch,
    cards,
    error,
    myCards,
    card,
    getCardById,
    allUsers,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
