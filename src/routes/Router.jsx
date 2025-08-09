//TODO Libraries
import { Route, Routes } from "react-router-dom";
//TODO Pages
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import Error from "../pages/Error";
import ROUTES from "./routesDict";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CardInfo from "../pages/CardInfo";
import Profile from "../pages/user/Profile";
import CreateNewCard from "../pages/user/CreateNewCard";
import MyCards from "../pages/user/MyCards";
import EditCard from "../pages/user/EditCard";
import MyFavoriteCards from "../pages/user/MyFavoriteCards";
import UpdateUser from "../pages/user/UpdateUser";
import AdminHome from "../admin/AdminHome";
import ShowAllUsers from "../admin/ShowAllUsers";
import UserInfo from "../admin/UserInfo";
//TODO Main Function
const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<Home />} />
      <Route path={ROUTES.about} element={<AboutPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage />} />
      <Route path={ROUTES.cardInfo} element={<CardInfo />} />
      {/* --------------------  USER  ---------------------------------- */}
      <Route path={ROUTES.profile} element={<Profile />} />
      <Route path={ROUTES.updateProfile} element={<UpdateUser />} />
      <Route path={ROUTES.createNewCard} element={<CreateNewCard />} />
      <Route path={ROUTES.myCards} element={<MyCards />} />
      <Route path={ROUTES.editCard} element={<EditCard />} />
      <Route path={ROUTES.favorite} element={<MyFavoriteCards />} />
      {/* --------------------  ADMIN  ---------------------------------- */}
      <Route path={ROUTES.admin} element={<AdminHome />} />
      <Route path={ROUTES.allUsers} element={<ShowAllUsers />} />
      <Route path={ROUTES.userInfo} element={<UserInfo />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default Router;
