//TODO Libraries
import { useEffect } from "react";
//TODO MUI Components
import { Box } from "@mui/material";
//TODO Pages
import CustomCard from "../../cards/component/CustomCard";
//TODO Main Function
const FavoriteDetails = ({ theme, dark, light, toggleLike }) => {
  //TODO Variables
  let x = localStorage.getItem("myFavoriteDetails");
  const myFavoriteDetails = JSON.parse(x);

  //TODO useEffect
  useEffect(() => {
    window.scroll(0, 0);
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
        {myFavoriteDetails.length === 0 ? (
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
                DO NOT HAVE ANY FAVORITE CARDS ----{" "}
              </h1>
            </div>
          </div>
        ) : (
          myFavoriteDetails.map((card) => (
            <CustomCard key={card._id} card={card} toggleLike={toggleLike} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default FavoriteDetails;
