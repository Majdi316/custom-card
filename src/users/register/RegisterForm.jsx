//TODO Libraries
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
//TODO MUI Components
import { TextField } from "@mui/material";
//TODO Pages
import useForm from "../hooks/useForm";
import initRegisterData from "./initRegisterData";
import registerSchema from "./registerSchema";
import normalizeUser from "./normalization";
//TODO Main Function
const RegisterForm = ({ theme, dark, light }) => {
  //TODO Variables
  const navigate = useNavigate()
  //TODO General Function
  
  const handleSignup = async (userDetails) => {
    const userDetailsForServer = normalizeUser(userDetails);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
        userDetailsForServer
      );
      toast.success("Registration has been successfully");
      navigate("/login")
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };
  //TODO Variables
  const { formDetails, errors, handleChange, handleSubmit } = useForm(
    initRegisterData,
    registerSchema,
    handleSignup
  );

  //TODO Return
  return (
    <div className="registerForm">
      <form onSubmit={handleSubmit}>
        <div className="threeCols">
          <TextField
            name="first"
            sx={{ width: "100%" }}
            label="First Name"
            variant="outlined"
            error={errors.first}
            onChange={handleChange}
            value={formDetails.first}
          />
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
          <TextField
            name="last"
            sx={{ width: "100%" }}
            label="Last Name"
            variant="outlined"
            error={errors.last}
            onChange={handleChange}
            value={formDetails.last}
          />
        </div>
        {/* ----------------------------- */}
        <div className="oneCols">
          <TextField
            type="email"
            name="email"
            sx={{ width: "100%" }}
            label="Email"
            variant="outlined"
            error={errors.email}
            onChange={handleChange}
            value={formDetails.email}
          />
        </div>
        {/* ----------------------------- */}
        <div className="oneCols">
          <TextField
            type="password"
            name="password"
            sx={{ width: "100%" }}
            label="Password"
            variant="outlined"
            error={errors.password}
            onChange={handleChange}
            value={formDetails.password}
          />
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
        </div>
        {/* ----------------------------- */}
        <div className="towCols">
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
        </div>
        {/* ----------------------------- */}
        <div className="threeCols">
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
          <TextField
            name="country"
            sx={{ width: "100%" }}
            label="Country"
            variant="outlined"
            error={errors.country}
            onChange={handleChange}
            value={formDetails.country}
          />
          <TextField
            name="city"
            sx={{ width: "100%" }}
            label="City"
            variant="outlined"
            error={errors.city}
            onChange={handleChange}
            value={formDetails.city}
          />
        </div>
        {/* ----------------------------- */}
        <div className="threeCols">
          <TextField
            name="street"
            sx={{ width: "100%" }}
            label="Street"
            variant="outlined"
            error={errors.street}
            onChange={handleChange}
            value={formDetails.street}
          />
          <TextField
            name="houseNumber"
            type="number"
            sx={{ width: "100%" }}
            label="House Number"
            variant="outlined"
            error={errors.houseNumber}
            onChange={handleChange}
            value={formDetails.houseNumber}
          />
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
        </div>
        <input
          style={{
            background: theme === "dark" ? dark.firstColor : light.firstColor,
            color: theme === "dark" ? "white" : "black",
          }}
          className="submitButton"
          type="submit"
          value={"submit"}
        />
      </form>
    </div>
  );
};

export default RegisterForm;
