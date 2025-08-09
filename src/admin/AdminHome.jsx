//TODO Libraries
import { useCallback, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//TODO CSS
import "../styles/admin.css";
//TODO Pages
import { useCurrentUser } from "../context/UserContext";
import AdminHomeDetails from "./AdminHomeDetails";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
//TODO Main Function
const AdminHome = () => {
  //TODO Variables
  const { theme } = useContext(ThemeContext);
  const { token } = useCurrentUser();
  const navigate = useNavigate();
  //TODO Function
  const getAllUsers = useCallback(async () => {
    try {
      let numberOfAdmins = 0;
      let numberOfBusiness = 0;
      let numberOfNotBusiness = 0;
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
        { headers: { "x-auth-token": token } }
      );
      localStorage.setItem("numberOfUsers", response.data.length);
      response.data.map((user) => {
        if (user.isAdmin === true) {
          numberOfAdmins++;
        }
        if (user.isBusiness === true) {
          numberOfBusiness++;
        } else {
          numberOfNotBusiness++;
        }
      });

      localStorage.setItem("numberOfAdmins", numberOfAdmins);
      localStorage.setItem("numberOfBusiness", numberOfBusiness);
      localStorage.setItem("numberOfNotBusiness", numberOfNotBusiness);
    } catch (error) {
      toast.error(error);
    }
  }, [token]);
  // -------------------------------------------------
  const getAllCards = useCallback(async () => {
    try {
      let numberOfLikes = 0;
      let numberOfMaxLikes = 0;
      let numberOfMinLikes = 10000;
      let cardHaveMostLikes = "";
      let numberCardsHaveLikes = 0;
      let numberCardsNotHaveLikes = 0;
      let userHaveCardThatHaveMostLikes = "";

      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
      );
      localStorage.setItem("numberOfCards", response.data.length);
      response.data.map((card) => {
        numberOfLikes += card.likes.length;
        if (card.likes.length === 0) {
          numberCardsNotHaveLikes++;
        } else {
          numberCardsHaveLikes++;
        }
        if (card.likes.length > numberOfMaxLikes) {
          numberOfMaxLikes = card.likes.length;
          cardHaveMostLikes = card._id;
          userHaveCardThatHaveMostLikes = card.user_id;
        }
        if (card.likes.length < numberOfMinLikes) {
          numberOfMinLikes = card.likes.length;
        }
      });

      localStorage.setItem("numberOfLikes", numberOfLikes);
      localStorage.setItem("numberOfMaxLikes", numberOfMaxLikes);
      localStorage.setItem("numberOfMinLikes", numberOfMinLikes);
      localStorage.setItem("cardHaveMostLikes", cardHaveMostLikes);
      localStorage.setItem("numberCardsHaveLikes", numberCardsHaveLikes);
      localStorage.setItem("numberCardsNotHaveLikes", numberCardsNotHaveLikes);
      localStorage.setItem(
        "userHaveCardThatHaveMostLikes",
        userHaveCardThatHaveMostLikes
      );
    } catch (error) {
      toast.error(error);
    }
  }, []);
  // -------------------------------------------
  const getUserDetailFromServer = async (id) => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" + id,
        { headers: { "x-auth-token": token } }
      );
      let userDetails = JSON.stringify(response.data);
      localStorage.setItem("adminUserDetails", userDetails);
      window.scroll(0, 0);
      navigate(`../../admin/home/users/userInfo/${id}`);
      window.location.reload(false);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Invalid ID");
    }
  };
  // ----------------------------------------
  const getUserMostLikesDetailFromServer = async (id) => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" + id,
        { headers: { "x-auth-token": token } }
      );
      let userDetails = JSON.stringify(response.data);
      localStorage.setItem("userMostLikeDetails", userDetails);
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Invalid ID");
    }
  };
  //TODO useEffect
  useEffect(() => {
    window.scroll(0, 0);
    getAllUsers();
    getAllCards();
  }, []);
  const userId = localStorage.getItem("userHaveCardThatHaveMostLikes");
  getAllUsers();
  getAllCards();
  getUserMostLikesDetailFromServer(userId);
  //TODO Return
  return (
    <div className="adminWrapper">
      <AdminHomeDetails
        theme={theme}
        dark={DARK_MODE}
        light={LIGHT_MODE}
        getUserDetailFromServerWithNavigate={getUserDetailFromServer}
      />
    </div>
  );
};

export default AdminHome;
