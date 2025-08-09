//TODO Libraries
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
//TODO MUI Components
import { TextField } from "@mui/material";
//TODO Pages
import initUpdateProfile from "./initUpdateProfile";
import updateProfileSchema from "./updateProfileSchema";
import useForm from "../hooks/useForm";
import normalizeUpdateUser from "./normalization";
import { useCurrentUser } from "../../context/UserContext";
import { removeToken } from "../services/localStorage";
//TODO Main Function
const UpdateProfileForm = ({ theme, dark, light }) => {
  //TODO Variables
  let x = localStorage.getItem("userDetails");
  const userDetails = JSON.parse(x);
  const navigate = useNavigate();
  const { token ,user} = useCurrentUser();
  //TODO Functions
  const logout = () => {
    removeToken();
    navigate("/login");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("myFavoriteDetails");
    localStorage.removeItem("cardDetail");
    localStorage.removeItem("myCardsNumber");
    window.location.reload(false);
  };
  const updateProfile = async (userDetails) => {
    const userDetailsForServer = normalizeUpdateUser(userDetails);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" +
          user._id,
        userDetailsForServer,
        { headers: { "x-auth-token": token } }
      );
      toast.success("Updated Successfully");
      logout();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };
  //TODO Variables
  const { formDetails, errors, handleChange, handleSubmit } = useForm(
    initUpdateProfile,
    updateProfileSchema,
    updateProfile
  );

  //TODO Return
  return (
    <div className="registerForm">
      <form onSubmit={handleSubmit}>
        <div className="threeCols">
          <div className="createNewCardThreeColsInfo">
            <TextField
              name="first"
              sx={{ width: "100%" }}
              label="First Name"
              variant="outlined"
              error={errors.first}
              onChange={handleChange}
              value={formDetails.first}
            />
            {userDetails.name.first}
          </div>

          <div className="createNewCardThreeColsInfo">
            {" "}
            <TextField
              name="middle"
              sx={{ width: "100%" }}
              label="Middle Name"
              variant="outlined"
              error={errors.middle}
              onChange={handleChange}
              value={formDetails.middle}
              required={false}
            />
            {userDetails.name.middle}
          </div>

          <div className="createNewCardThreeColsInfo">
            <TextField
              name="last"
              sx={{ width: "100%" }}
              label="Last Name"
              variant="outlined"
              error={errors.last}
              onChange={handleChange}
              value={formDetails.last}
            />
            {userDetails.name.last}
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="oneCols">
          <TextField
            name="phone"
            type="phone"
            sx={{ width: "100%" }}
            label="Phone Number"
            variant="outlined"
            error={errors.phone}
            onChange={handleChange}
            value={formDetails.phone}
          />
          {userDetails.phone}
        </div>
        {/* ----------------------------- */}
        <div className="oneCols">
          {" "}
          <TextField
            name="url"
            sx={{ width: "100%" }}
            label="Image URL"
            variant="outlined"
            error={errors.url}
            onChange={handleChange}
            value={formDetails.url}
            required={false}
          />
          {userDetails.image.url}
        </div>

        <div className="oneCols">
          <TextField
            name="alt"
            sx={{ width: "100%" }}
            label="Image Alt"
            variant="outlined"
            error={errors.alt}
            onChange={handleChange}
            value={formDetails.alt}
            required={false}
          />
          {userDetails.image.alt}
        </div>
        {/* ----------------------------- */}
        <div className="threeCols">
          <div className="createNewCardThreeColsInfo">
            <TextField
              name="state"
              sx={{ width: "100%" }}
              label="State"
              variant="outlined"
              error={errors.state}
              onChange={handleChange}
              value={formDetails.state}
              required={false}
            />
            {userDetails.address.state}
          </div>

          <div className="createNewCardThreeColsInfo">
            <TextField
              name="country"
              sx={{ width: "100%" }}
              label="Country"
              variant="outlined"
              error={errors.country}
              onChange={handleChange}
              value={formDetails.country}
            />
            {userDetails.address.country}
          </div>

          <div className="createNewCardThreeColsInfo">
            <TextField
              name="city"
              sx={{ width: "100%" }}
              label="City"
              variant="outlined"
              error={errors.city}
              onChange={handleChange}
              value={formDetails.city}
            />
            {userDetails.address.city}
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="threeCols">
          <div className="createNewCardThreeColsInfo">
            {" "}
            <TextField
              name="street"
              sx={{ width: "100%" }}
              label="Street"
              variant="outlined"
              error={errors.street}
              onChange={handleChange}
              value={formDetails.street}
            />
            {userDetails.address.street}
          </div>

          <div className="createNewCardThreeColsInfo">
            <TextField
              name="houseNumber"
              sx={{ width: "100%" }}
              label="House Number"
              variant="outlined"
              error={errors.houseNumber}
              onChange={handleChange}
              value={formDetails.houseNumber}
            />
            {userDetails.address.houseNumber}
          </div>

          <div className="createNewCardThreeColsInfo">
            <TextField
              name="zip"
              sx={{ width: "100%" }}
              label="Zip Code"
              variant="outlined"
              error={errors.zip}
              onChange={handleChange}
              value={formDetails.zip}
              required={false}
            />
            {userDetails.address.zip}
          </div>
        </div>

        <input
          style={{
            background: theme === "dark" ? dark.firstColor : light.firstColor,
            color: theme === "dark" ? "white" : "black",
          }}
          className="submitButton"
          type="submit"
          value={"SAVE"}
        />
      </form>
    </div>
  );
};

export default UpdateProfileForm;
