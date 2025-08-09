//TODO Pages
import { DARK_MODE, LIGHT_MODE } from "../../theme/themeData";
//TODO CSS
import "../../styles/cardBody.css";
//TODO Main Function
const Body = ({ card, theme }) => {
  //TODO Return
  return (
    <div className="wrapperBody">
      <div className="title">
        <h1
          style={{
            color:
              theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
          }}
        >
          {card.subtitle}
        </h1>
      </div>
      {/* --------------------------------------------- */}
      <div className="description">
        <p style={{ marginTop: "25px" }}>{card.description}</p>
        <p className="web" style={{ marginTop: "25px" }}>
          {card.web}
        </p>
        <p
          style={{
            marginTop: "7px",
          }}
        >
          Card number is :{" "}
          <span
            style={{
              fontWeight: "bold",
              color:
                theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
            }}
          >
            {card.bizNumber}
          </span>
        </p>
        <p style={{ marginTop: "10px" }}>
          <hr />
        </p>
        <div className="contact">
          <p
            style={{
              fontWeight: "bold",
              color:
                theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
              marginTop: "15px",
            }}
          >
            address :
          </p>
        </div>
      </div>
      {/* --------------------------------------------- */}
      <div className="address">
        {/* ---------------------- 1 ----------------------- */}
        <div className="addressData">
          <div>
            <p className="addressData-desc">state :</p>
          </div>
          <div>
            <p>{card.address.state}</p>
          </div>
        </div>
        {/* ---------------------- 2 ----------------------- */}
        <div className="addressData">
          <div>
            <p className="addressData-desc">city :</p>
          </div>
          <div>
            <p>{card.address.city}</p>
          </div>
        </div>
        {/* ---------------------- 3 ----------------------- */}
        <div className="addressData">
          <div>
            <p className="addressData-desc">country :</p>
          </div>
          <div>
            <p>{card.address.country}</p>
          </div>
        </div>
        {/* ---------------------- 4 ----------------------- */}
        <div className="addressData">
          <div>
            <p className="addressData-desc">street :</p>
          </div>
          <div>
            <p>{card.address.street}</p>
          </div>
        </div>
        {/* ---------------------- 5 ----------------------- */}
        <div className="addressData">
          <div>
            <p className="addressData-desc">zip code :</p>
          </div>
          <div>
            <p>{card.address.zip}</p>
          </div>
        </div>
        {/* ---------------------- 6 ----------------------- */}
        <div className="addressData">
          <div>
            <p className="addressData-desc">house number :</p>
          </div>
          <div>
            <p>{card.address.houseNumber}</p>
          </div>
        </div>
        {/* --------------------------------------------- */}
        <div className="contact">
          <p style={{ marginTop: "10px" }}>
            <hr />
          </p>

          <p
            style={{
              fontWeight: "bold",
              color:
                theme === "dark" ? DARK_MODE.firstColor : LIGHT_MODE.firstColor,
              marginTop: "15px",
            }}
          >
            contact us :
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
