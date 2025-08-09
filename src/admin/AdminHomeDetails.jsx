//TODO Libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//TODO Main Function
const AdminHomeDetails = ({
  theme,
  dark,
  light,
  getUserDetailFromServerWithNavigate,
}) => {
  //TODO Variables
  const numberOfUsers = localStorage.getItem("numberOfUsers");
  const numberOfCards = localStorage.getItem("numberOfCards");
  const numberOfAdmins = localStorage.getItem("numberOfAdmins");
  const numberOfBusiness = localStorage.getItem("numberOfBusiness");
  const numberOfNotBusiness = localStorage.getItem("numberOfNotBusiness");
  const numberCardsHaveLikes = localStorage.getItem("numberCardsHaveLikes");
  const numberCardsNotHaveLikes = localStorage.getItem(
    "numberCardsNotHaveLikes"
  );
  const numberOfLikes = localStorage.getItem("numberOfLikes");
  const numberOfMaxLikes = localStorage.getItem("numberOfMaxLikes");
  const numberOfMinLikes = localStorage.getItem("numberOfMinLikes");
  const cardHaveMostLikes = localStorage.getItem("cardHaveMostLikes");
  const userHaveCardThatHaveMostLikes = localStorage.getItem(
    "userHaveCardThatHaveMostLikes"
  );
  let x = localStorage.getItem("userMostLikeDetails");
  const userDetails = JSON.parse(x);
  const navigate = useNavigate();
  //TODO States
  const [user, setUser] = useState("");
  const [card, setCard] = useState("");
  //TODO Return
  return (
    <div className="adminWrapperInfo">
      <div className="title">
        <h1>dashboard</h1>
      </div>
      {/* ---------------------USER----------------------- */}
      <div
        style={{
          background: theme === "dark" ? dark.threeColor : light.threeColor,
          color: theme === "dark" ? "white" : "black",
        }}
        className="adminWrapperInfoUser"
      >
        {/* -------------------HEADER---------------- */}
        <div
          style={{
            background: theme === "dark" ? dark.firstColor : light.firstColor,
          }}
          className="adminWrapperInfoHeader"
        >
          <div>
            <p>users</p>
          </div>
          <div>{numberOfUsers}</div>
        </div>
        {/* --------------------BODY--------------------- */}
        <div className="adminWrapperInfoBody">
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>number of admins : </p>
            </div>
            <div>{numberOfAdmins}</div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>number of business accounts : </p>
            </div>
            <div>{numberOfBusiness}</div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>number of not business accounts : </p>
            </div>
            <div>{numberOfNotBusiness}</div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>user that have most likes on one card : </p>
            </div>
            <div>{userHaveCardThatHaveMostLikes}</div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <input
                style={{
                  color: theme === "dark" ? "white" : "black",
                }}
                type="search"
                placeholder="Search User By ID"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                style={{
                  background:
                    theme === "dark" ? dark.firstColor : light.firstColor,
                  color: theme === "dark" ? "white" : "black",
                }}
                onClick={() => {
                  if (user === "") {
                    toast.error("Cant Search Empty ID");
                  } else {
                    getUserDetailFromServerWithNavigate(user);
                  }
                }}
              >
                Search
              </button>
            </div>
          </div>
          {/* --------------------------------- */}
          <div
            className="adminWrapperInfoBodyDetails"
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
          >
            <button
              onClick={() => {
                navigate("/admin/home/users");
              }}
              style={{
                background:
                  theme === "dark" ? dark.firstColor : light.firstColor,
                color: theme === "dark" ? "white" : "black",
              }}
            >
              View All User
            </button>
          </div>
        </div>
      </div>
      {/* ---------------------Card----------------------- */}
      <div
        style={{
          background: theme === "dark" ? dark.threeColor : light.threeColor,
          color: theme === "dark" ? "white" : "black",
        }}
        className="adminWrapperInfoCard"
      >
        <div
          style={{
            background: theme === "dark" ? dark.firstColor : light.firstColor,
          }}
          className="adminWrapperInfoHeader"
        >
          <div>
            <p>cards</p>
          </div>
          <div>{numberOfCards}</div>
        </div>
        {/* --------------------BODY--------------------- */}
        <div className="adminWrapperInfoBody">
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>number of cards that have likes : </p>
            </div>
            <div>{numberCardsHaveLikes}</div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>number of cards that not have likes : </p>
            </div>
            <div>{numberCardsNotHaveLikes}</div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>number of likes : </p>
            </div>
            <div>{numberOfLikes}</div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>most likes in one card : </p>
            </div>
            <div>{numberOfMaxLikes}</div>
          </div>
          {/* ------------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <p>less likes in one card : </p>
            </div>
            <div>{numberOfMinLikes}</div>
          </div>

          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div style={{ width: "100%" }}>
              <p>
                the card {cardHaveMostLikes} have the most likes created by :{" "}
                {userDetails.name.first}
              </p>
            </div>
          </div>
          {/* --------------------------------- */}
          <div
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
            className="adminWrapperInfoBodyDetails"
          >
            <div>
              <input
                style={{
                  color: theme === "dark" ? "white" : "black",
                }}
                type="search"
                placeholder="Search Card By ID"
                onChange={(e) => {
                  setCard(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                style={{
                  background:
                    theme === "dark" ? dark.firstColor : light.firstColor,
                  color: theme === "dark" ? "white" : "black",
                }}
                onClick={() => {
                  if (card === "") {
                    toast.error("Cant Search Empty ID");
                  } else {
                    navigate(`/cards/details/${card}`);
                  }
                }}
              >
                Search
              </button>
            </div>
          </div>
          {/* --------------------------------- */}
          <div
            className="adminWrapperInfoBodyDetails"
            style={{
              background:
                theme === "dark" ? dark.secondColor : light.secondColor,
            }}
          >
            <button
              onClick={() => {
                navigate("/");
              }}
              style={{
                background:
                  theme === "dark" ? dark.firstColor : light.firstColor,
                color: theme === "dark" ? "white" : "black",
              }}
            >
              View All Cards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeDetails;
