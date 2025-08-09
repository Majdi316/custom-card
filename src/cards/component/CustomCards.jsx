//TODO Libraries
import { useContext, useEffect, useState } from "react";
//TODO MUI Components
import { Box, Pagination } from "@mui/material";
//TODO CSS
import "../../styles/search.css";
//TODO Pages
import CustomCard from "./CustomCard";
import { SearchContext } from "../../context/SearchContext";
import { ThemeContext } from "../../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
//TODO Global Variables
const CARDS_PER_PAGE = 12;
//TODO Main Function
const CustomCards = ({ toggleLike,deleteCard }) => {
  //TODO Variables
  const { search, cards } = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const pageCount = Math.ceil(cards.length / CARDS_PER_PAGE);
  //TODO States
  const [filterCards, setFilterCards] = useState([]);
  const [page, setPage] = useState(1);
  //TODO Functions
  const applySearch = () => {
    let cardsCopy = cards.slice(
      (page - 1) * CARDS_PER_PAGE,
      page * CARDS_PER_PAGE
    );
    if (search === "") {
      setFilterCards(cardsCopy);
    } else {
      cardsCopy = cardsCopy.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilterCards(cardsCopy);
  };
  const handleChange = (event, value) => {
    setPage(value);
  };
  //TODO UseEffects
  useEffect(() => {
    window.scrollTo(0, 0);
    applySearch();
  }, [search, cards, page]);
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

        {filterCards.length === 0 ? (
          <div className="wrapper">
            <div>
              <h1
                style={{
                  color:
                    theme === "dark"
                      ? DARK_MODE.firstColor
                      : LIGHT_MODE.firstColor,
                }}
              >
                404
              </h1>
            </div>
            <div>
              <h1
                style={{
                  color:
                    theme === "dark"
                      ? DARK_MODE.secondColor
                      : LIGHT_MODE.secondColor,
                }}
              >
                NOT MATCH ANY CARDS THAT HAS TITLE ---{" "}
                <span style={{ color: "red" }}>{search}</span>{" "}
              </h1>
            </div>
          </div>
        ) : (
          filterCards.map((card) => (
            <CustomCard key={card._id} card={card} toggleLike={toggleLike} deleteCard={deleteCard}/>
          ))
        )}
      </Box>
      <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
        <Pagination count={pageCount} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
};

export default CustomCards;
