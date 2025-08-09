//TODO Libraries
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//TODO MUI Components
import { TextField } from "@mui/material";
//TODO Pages
import useForm from "../hooks/useForm";
import normalizeCard from "./normalization";
import initCreateNewCard from "./initCreateNewCardData";
import newCardSchema from "./newCardSchema";
import { useCurrentUser } from "../../context/UserContext";


//TODO Main Function
const CreateNewCardForm = ({ theme, dark, light }) => {
  //TODO general variables
  const { token } = useCurrentUser();
  const navigate = useNavigate();
  //TODO General Functions
  const handleCreateNewCard = async (cardDetails) => {
    const cardDetailsForServer = normalizeCard(cardDetails);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
        cardDetailsForServer,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      toast.success("Card Has been added successfully");
      navigate("/");
      window.location.reload(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };
  //TODO Variables
  const { formDetails, errors, handleChange, handleSubmit } = useForm(
    initCreateNewCard,
    newCardSchema,
    handleCreateNewCard
  );
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  //TODO Return
  return (
    <div>
      {/* --------------   TITLE  ---------------- */}
      <div className="title">
        <h1>create new card</h1>
      </div>
      {/* --------------   FORM  ---------------- */}
      <div className="createNewCardForm">
        <form onSubmit={handleSubmit}>
          {/* --------------   TITLE  ---------------- */}
          <div className="createNewCardTowCols">
            <div className="createNewCardTowColsInfo">
              <TextField
                name="title"
                sx={{ width: "100%" }}
                label="Title"
                variant="outlined"
                error={errors.title}
                onChange={handleChange}
                value={formDetails.title}
              />
            </div>
            <div className="createNewCardTowColsInfo">
              <TextField
                name="subtitle"
                sx={{ width: "100%" }}
                label="Sub Title"
                variant="outlined"
                error={errors.subtitle}
                onChange={handleChange}
                value={formDetails.subtitle}
              />
            </div>
          </div>
          {/* --------------   DESCRIPTION  ---------------- */}
          <div>
            <TextField
              name="description"
              sx={{ width: "100%" }}
              label="Description"
              variant="outlined"
              error={errors.description}
              onChange={handleChange}
              value={formDetails.description}
            />
          </div>
          {/* --------------   Email & Phone  ---------------- */}
          <div className="createNewCardTowCols">
            <div className="createNewCardTowColsInfo">
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
            <div className="createNewCardTowColsInfo">
              <TextField
                type="phone"
                name="phone"
                sx={{ width: "100%" }}
                label="Phone Number"
                variant="outlined"
                error={errors.phone}
                onChange={handleChange}
                value={formDetails.phone}
              />
            </div>
          </div>
          {/* --------------   WEB  ---------------- */}
          <div>
            <TextField
              name="web"
              sx={{ width: "100%" }}
              label="Web"
              variant="outlined"
              required={false}
              error={errors.web}
              onChange={handleChange}
              value={formDetails.web}
            />
          </div>
          {/* --------------   IMAGE  ---------------- */}
          <div className="createNewCardTowCols">
            <div className="createNewCardTowColsInfo">
              <TextField
                name="url"
                sx={{ width: "100%" }}
                label="Image URL"
                variant="outlined"
                required={false}
                error={errors.url}
                onChange={handleChange}
                value={formDetails.url}
              />
            </div>
            <div className="createNewCardTowColsInfo">
              <TextField
                name="alt"
                sx={{ width: "100%" }}
                label="Image ALT"
                variant="outlined"
                required={false}
                error={errors.alt}
                onChange={handleChange}
                value={formDetails.alt}
              />
            </div>
          </div>
          {/* --------------   ADDRESS  ---------------- */}
          {/* --------------   1.ROW  ---------------- */}
          <div className="createNewCardThreeCols">
            <div className="createNewCardThreeColsInfo">
              {" "}
              <TextField
                name="state"
                sx={{ width: "100%" }}
                label="State"
                variant="outlined"
                required={false}
                error={errors.state}
                onChange={handleChange}
                value={formDetails.state}
              />
            </div>
            <div className="createNewCardThreeColsInfo">
              {" "}
              <TextField
                name="country"
                sx={{ width: "100%" }}
                label="Country"
                variant="outlined"
                error={errors.country}
                onChange={handleChange}
                value={formDetails.country}
              />
            </div>
            <div className="createNewCardThreeColsInfo">
              {" "}
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
          </div>
          {/* --------------   2.ROW  ---------------- */}
          <div className="createNewCardThreeCols">
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
            </div>
            <div className="createNewCardThreeColsInfo">
              {" "}
              <TextField
                type="number"
                name="houseNumber"
                sx={{ width: "100%" }}
                label="House Number"
                variant="outlined"
                error={errors.houseNumber}
                onChange={handleChange}
                value={formDetails.houseNumber}
              />
            </div>
            <div className="createNewCardThreeColsInfo">
              {" "}
              <TextField
                type="number"
                name="zip"
                sx={{ width: "100%" }}
                label="Zip Code"
                variant="outlined"
                required={false}
                error={errors.zip}
                onChange={handleChange}
                value={formDetails.zip}
              />
            </div>
          </div>
          {/* --------------   Button  ---------------- */}
          <div>
            <input
              style={{
                background:
                  theme === "dark" ? dark.firstColor : light.firstColor,
                color: theme === "dark" ? "white" : "black",
              }}
              className="submitButton"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewCardForm;
