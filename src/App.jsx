//TODO Libraries
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
//TODO Pages
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import UserProvider from "./context/UserContext";
//TODO Main Function
function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <UserProvider>
        <BrowserRouter>
          <ThemeProvider>
            <SearchProvider>
              <Layout>
                <Router />
              </Layout>
            </SearchProvider>
          </ThemeProvider>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
