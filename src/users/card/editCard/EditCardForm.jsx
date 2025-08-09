//TODO Libraries
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//TODO MUI Components
import { Box, TextField } from "@mui/material";
//TODO Pages
import initCreateNewCard from "../initCreateNewCardData";
import newCardSchema from "../newCardSchema";
import useForm from "../../hooks/useForm";
import normalizeCard from "../normalization";
import { useCurrentUser } from "../../../context/UserContext";


//TODO Main Function
const EditCardForm = ({ theme, dark, light ,cardID}) => {
  //TODO Variables
  let x = localStorage.getItem("cardDetail");
  const cardDetails = JSON.parse(x);
  const { token } = useCurrentUser();
  const navigate = useNavigate()
  //TODO Functions

  const handleEditCard = async (card) => {
    const cardDetailsForServer = normalizeCard(card);
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.put(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/"+cardID,
        cardDetailsForServer,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      toast.success("Card Has been updated successfully");
      navigate("/");
       window.location.reload(false);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data);
      }
    }
  };

  //TODO Variables
  const { formDetails,errors, handleChange, handleSubmit } = useForm(
    initCreateNewCard,
    newCardSchema,
    handleEditCard
  );
  //TODO States
  const [filterCard, setFilterCard] = useState([]);
  //TODO Functions
  let arr = [];
  const applyDelete = () => {
    let cardCopy = { ...cardDetails };
    arr.push(cardCopy);
    setFilterCard(arr);
  };
  useEffect(() => {
    applyDelete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //TODO Return
  return (
    <Box>
      <Box
        sx={{
          mt: "15px",
          display: "flex",
          flexWrap: "wrap",
          mb: "25px",
          gap: 5,
        }}
      >
        {filterCard.length === 0 ? (
          <div className="wrapper">
            <div>
              <h1
                style={{
                  color: theme === "dark" ? dark.firstColor : light.firstColor,
                }}
              >
                404
              </h1>
            </div>
            <div>
              <h1
                style={{
                  color:
                    theme === "dark" ? dark.secondColor : light.secondColor,
                }}
              >
                you do not have any card{" "}
              </h1>
            </div>
          </div>
        ) : (
          <div>
            {/* --------------   TITLE  ---------------- */}
            <div className="title">
              <h1>Update Card</h1>
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
                    {cardDetails.title}
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
                     {cardDetails.subtitle}
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
                  {cardDetails.description}
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
                    {cardDetails.email}
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
                    {cardDetails.phone}
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
                  {cardDetails.web}
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
                    {cardDetails.image.url}
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
                    {cardDetails.image.alt}
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
                    {cardDetails.address.state}
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
                    {cardDetails.address.country}
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
                    {cardDetails.address.city}
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
                    {cardDetails.address.street}
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
                    {cardDetails.address.houseNumber}
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
                    {cardDetails.address.zip}
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
                    value="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default EditCardForm;
