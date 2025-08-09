//TODO Libraries
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//TODO CSS
import "../styles/allUsers.css";
//TODO MUI Components
import { Box, IconButton, Pagination } from "@mui/material";
//TODO Icons
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
//TODO Pages
import { SearchContext } from "../context/SearchContext";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_MODE, LIGHT_MODE } from "../theme/themeData";
import { toast } from "react-toastify";
import axios from "axios";
import { useCurrentUser } from "../context/UserContext";
//TODO GLOBAL Variables
const USERS_PER_PAGE = 10;
//TODO Main Function
const ShowAllUsers = () => {
  //TODO States
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [filterUsers, setFilterUsers] = useState([]);
  //TODO Variables
  const { allUsers } = useContext(SearchContext);
  let pageCount = Math.ceil(allUsers.length / USERS_PER_PAGE);
  const { theme } = useContext(ThemeContext);
  const { token } = useCurrentUser();
  const navigate = useNavigate();
  //TODO Function
  const handleChange = (event, value) => {
    setPage(value);
  };
  const getUserDetailFromServer = async (id) => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" + id,
        { headers: { "x-auth-token": token } }
      );
      let userDetails = JSON.stringify(response.data);
      localStorage.setItem("adminUserDetails", userDetails);
      window.scroll(0, 0);
      navigate(`../../../admin/home/users/userInfo/${id}`);
      window.location.reload(false);
    } catch (error) {
      toast.error(error);
    }
  };
  const deleteUserFromServer = async (id) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.delete(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/" + id,
        { headers: { "x-auth-token": token } }
      );
      navigate("/admin/home");
      window.location.reload(false);
      toast.success("User is Deleted");
    } catch (error) {
      toast.error(error);
    }
  };

  //TODO useEffects
  useEffect(() => {
    window.scroll(0, 0);
    let fUser = allUsers.slice();
    fUser = allUsers.filter((user) => {
      return search.toLowerCase() === ""
        ? user
        : user.name.first.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search);
    });

    let usersCopy = fUser.slice(
      (page - 1) * USERS_PER_PAGE,
      page * USERS_PER_PAGE
    );
    setFilterUsers(usersCopy);
  }, [search, allUsers, page]);

  //TODO Return
  return (
    <div className="allUsersWrapper">
      <div className="allUsersWrapperInfo">
        <div className="title">
          <h1>view all users</h1>
        </div>
        <div className="search">
          <input type="search" onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="table">
          <table>
            <thead>
              <tr
                style={{
                  background:
                    theme === "dark"
                      ? DARK_MODE.firstColor
                      : LIGHT_MODE.firstColor,
                  color: theme === "dark" ? "white" : "black",
                }}
              >
                <th>#</th>
                <th>image</th>
                <th>email</th>
                <th>full name</th>
                <th>is admin</th>
                <th>view</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {filterUsers.map((user, index) => (
                <tr
                  key={index}
                  className="row"
                  style={{
                    background:
                      index % 2 === 0
                        ? theme === "dark"
                          ? DARK_MODE.threeColor
                          : LIGHT_MODE.threeColor
                        : "",

                    color:
                      index % 2 === 0
                        ? theme === "dark"
                          ? "white"
                          : "black"
                        : "",
                       
                        
                  }}
                >
                  <td data-title="number" className="userNumber">
                    {index + 1}
                  </td>
                  <td data-title="image" className="userImage">
                    <img
                      width="70px"
                      height="70px"
                      className="userImageDetail"
                      src={user.image.url}
                      alt={user.image.alt}
                    />
                  </td>
                  <td data-title="email" className="userEmail">
                    {user.email}
                  </td>
                  <td data-title="full name" className="userFullName">
                    {user.name.first} {user.name.middle} {user.name.last}
                  </td>
                  <td data-title="is admin" className="userIsAdmin">
                    {user.isAdmin ? (
                      <p style={{ color: "green" }}>YES</p>
                    ) : (
                      <p style={{ color: "red" }}>NO</p>
                    )}
                  </td>
                  <td data-title="view" className="userView">
                    <IconButton
                      onClick={() => {
                        getUserDetailFromServer(user._id);
                      }}
                    >
                      <VisibilityIcon
                        sx={{
                          color: "green",
                        }}
                      />
                    </IconButton>
                  </td>
                  <td data-title="delete" className="userDelete">
                    {user.isAdmin ? (
                      <p style={{color:"red"}}>NOT ALLOWED</p>
                    ) : (
                      <IconButton
                        onClick={() => {
                          deleteUserFromServer(user._id);
                        }}
                      >
                        <DeleteIcon
                          sx={{
                            color: "red",
                          }}
                        />
                      </IconButton>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
          <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Box>
      </div>
    </div>
  );
};

export default ShowAllUsers;
