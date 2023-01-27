import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AppRoute from "./Routes/AppRoute";
import { BrowserRouter as Router } from "react-router-dom";
import { UserStorage } from "./useContext/useContext";

function App() {
  return (
    <div>
      <Router>
        <UserStorage>
          <Header />
          <AppRoute />
          <Footer />
        </UserStorage>
      </Router>
    </div>
  );
}

export default App;
