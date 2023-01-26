import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import AppRoute from "./Routes/AppRoute"
import { BrowserRouter as Router} from 'react-router-dom';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";


function App() {

  return (
    <div >
      <Router>
        <Header/>
          <AppRoute/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
