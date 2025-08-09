/* eslint-disable no-unused-vars */
//TODO Libraries
import { useNavigate } from "react-router-dom";
import axios from "axios";
//TODO MUI Components
import { TextField } from "@mui/material";
//TODO Pages
import loginSchema from "./loginSchema.js";
import initialLoginForm from "./initLoginData.js";
import { getUser, setTokenInLocalStorage } from "../services/localStorage.js";
import { useCurrentUser } from "../../context/UserContext.jsx";
import useForm from "../hooks/useForm.js";
import { toast } from "react-toastify";
 
//TODO Main Function
const LoginForm = ({ theme, dark, light }) => {
  //TODO Variables
  const { setToken, setUser,userFullDetails } = useCurrentUser();
  const navigate = useNavigate();
  //TODO Functions
  const handleLogin = async (user) => {
    try {
      const response = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        user
      );
      setTokenInLocalStorage(response.data);
      setToken(response.data);
      setUser(getUser());
     
      navigate("/");
    } catch (error) {
      toast.error("Invalid Email Or Password!!!!");
    }
  };

  const { formDetails, errors, handleChange, handleSubmit } = useForm(
    initialLoginForm,
    loginSchema,
    handleLogin
  );

  //TODO Return
  return (
    <div
      style={{
        background: theme === "dark" ? dark.threeColor : light.threeColor,
        color: theme === "dark" ? "white" : "black",
      }}
      className="loginWrapperInfo"
    >
      <div className="loginForm">
        <div className="title">
          <h1
            style={{
              color: theme === "dark" ? dark.firstColor : light.firstColor,
            }}
          >
            Create New Account
          </h1>
        </div>
        {/* ---------------------------------------------- */}
        <form onSubmit={handleSubmit} className="loginFormInfo">
          <div>
            <TextField
              className="loginInput"
              type="email"
              name="email"
              label="email"
              error={errors.email}
              onChange={handleChange}
              value={formDetails.email}
            />
          </div>
          {/* ---------------------------------------------- */}
          <div>
            <TextField
              className="loginInput"
              name="password"
              label="password"
              type="password"
              error={errors.password}
              onChange={handleChange}
              value={formDetails.password}
            />
          </div>
          <div>
            <input
              style={{
                background:
                  theme === "dark" ? dark.firstColor : light.firstColor,
                color: theme === "dark" ? "white" : "black",
              }}
              className="submitButton"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
