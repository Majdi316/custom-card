//TODO Libraries
import { useEffect, useContext, useState, createContext } from "react";
import { getToken, getUser } from "../users/services/localStorage.js";
import axios from "axios";
import { toast } from "react-toastify";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(getUser());
  const [token, setToken] = useState(getToken());
  const [userFullDetails, setUserFullDetails] = useState();
  useEffect(() => {
    if (user && token) {
      const updateUserFullDetails = async () => {
        try {
          const res = await axios.get(
            "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" +
              user._id,
            {
              headers: {
                "x-auth-token": token,
              },
            }
          );

          setUserFullDetails(res.data);
          let userDetails = JSON.stringify(res.data);
          localStorage.setItem("userDetails", userDetails);
        } catch (err) {
          toast.error(err);
        }
      };

      updateUserFullDetails();
    }
  }, [user, token]);

  return (
    <UserContext.Provider
      value={{ user, setUser, token, setToken, userFullDetails }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useCurrentUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useCurrentUser must be used within provider");
  }

  return context;
};
