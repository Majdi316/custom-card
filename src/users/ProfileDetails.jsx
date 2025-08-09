//TODO Libraries
import { useEffect, useState } from "react";
//TODO Icons
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
//TODO Main Function
const ProfileDetails = ({ theme, dark, light }) => {
  //TODO States
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  //TODO Variables
  let x = localStorage.getItem("userDetails");
  const userDetails = JSON.parse(x);
  let myCardsNumber = localStorage.getItem("myCardsNumber");
  //TODO Functions
  const getFullDate = () => {
    let fullDate = userDetails.createdAt;
    let arr = fullDate.split("T");
    let dateData = arr[0];
    setDate(dateData);
    let hourData = arr[1].split(".")[0];
    setHour(hourData);
  };
  //TODO useEffects
  useEffect(() => {
    window.scroll(0, 0);
    getFullDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);
  //TODO Return
  return (
    <div
      style={{
        background: theme === "dark" ? dark.threeColor : light.threeColor,
        color: theme === "dark" ? "white" : "black",
      }}
      className="profileWrapperInfo"
    >
      <div className="infoWithPadding">
        <div>
          <p className="createdAt">
            <span style={{ color: theme === "dark" ? "white" : "black" }}>
              Created At :{" "}
            </span>
            <span
              style={{
                color: theme === "dark" ? dark.firstColor : light.firstColor,
              }}
            >
              {date}
            </span>
            {""}
            <span
              style={{
                color: theme === "dark" ? dark.firstColor : light.firstColor,
              }}
            >
              {hour}
            </span>
          </p>
        </div>
        <div className="profileImage">
          <img src={userDetails.image.url} alt={userDetails.image.alt} />
        </div>
        <div className="title">
          <h1>
            {userDetails.name.first} {userDetails.name.middle}{" "}
            {userDetails.name.last}
          </h1>
        </div>
        <div className="cardsNumber">
          <span
            style={{
              color: theme === "dark" ? dark.firstColor : light.firstColor,
            }}
          >
            cards number :
          </span>{" "}
          <span>{myCardsNumber}</span>
        </div>
        {/* ------------------------------------- */}
        <div className="address">
          <p
            style={{
              color: theme === "dark" ? dark.firstColor : light.firstColor,
            }}
          >
            address :
          </p>
        </div>
        {/* -----------------------1--------------- */}
        <div
          style={{ color: theme === "dark" ? "white" : "black" }}
          className="addressDetails"
        >
          <div className="addressDetailsTitle">state : </div>
          <div>{userDetails.address.state}</div>
        </div>
        {/* -----------------------2--------------- */}
        <div
          style={{ color: theme === "dark" ? "white" : "black" }}
          className="addressDetails"
        >
          <div className="addressDetailsTitle">country : </div>
          <div>{userDetails.address.country}</div>
        </div>
        {/* -----------------------3--------------- */}
        <div
          style={{ color: theme === "dark" ? "white" : "black" }}
          className="addressDetails"
        >
          <div className="addressDetailsTitle">city : </div>
          <div>{userDetails.address.city}</div>
        </div>
        {/* -----------------------4--------------- */}
        <div
          style={{ color: theme === "dark" ? "white" : "black" }}
          className="addressDetails"
        >
          <div className="addressDetailsTitle">street : </div>
          <div>{userDetails.address.street}</div>
        </div>
        {/* -----------------------5--------------- */}
        <div
          style={{ color: theme === "dark" ? "white" : "black" }}
          className="addressDetails"
        >
          <div className="addressDetailsTitle">zip code : </div>
          <div>{userDetails.address.zip}</div>
        </div>
        {/* -----------------------6--------------- */}
        <div
          style={{ color: theme === "dark" ? "white" : "black" }}
          className="addressDetails"
        >
          <div className="addressDetailsTitle">house number : </div>
          <div>{userDetails.address.houseNumber}</div>
        </div>
        {/* -----------------------7--------------- */}
        <div
          style={{ color: theme === "dark" ? "white" : "black" }}
          className="addressDetails"
        >
          <div className="addressDetailsTitle">class code : </div>
          <div>{userDetails.classCode}</div>
        </div>
        {/* -------------------------------------- */}
        <hr style={{ marginTop: "15px" }} />
        <div style={{ marginTop: "15px" }} className="infoContactUsTitle">
          <p
            style={{
              color: theme === "dark" ? dark.firstColor : light.firstColor,
            }}
          >
            address :
          </p>
        </div>
        <div className="infoContactUsWrapper">
          <div
            style={{
              color: theme === "dark" ? dark.firstColor : light.firstColor,
            }}
            className="infoContactUs"
          >
            <div>
              <EmailIcon />
            </div>
            <div>{userDetails.email}</div>
          </div>
          <div
            style={{
              color: theme === "dark" ? dark.firstColor : light.firstColor,
            }}
            className="infoContactUs"
          >
            <div>
              <LocalPhoneIcon />
            </div>
            <div>{userDetails.phone}</div>
          </div>
        </div>
        {/* -------------------------------------- */}
      </div>
    </div>
  );
};

export default ProfileDetails;
