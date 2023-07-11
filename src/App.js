import "./stylesheets/App.css";
import Navbar from "./partials/Navbar";
import Home from "./pages/Home";
import Footer from "./partials/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs"
import Sommarlov from "./pages/Sommarlovsklattring"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YouthGroups from "./pages/YouthGroups";
import Prices from "./pages/Prices";
import Courses from "./pages/Courses";
import ProvaPa from "./pages/ProvaPa";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/om-oss">
              <About />
            </Route>
            <Route exact path="/kontakt">
              <Contact />
            </Route>
            <Route exact path="/jobb">
              <Jobs />
            </Route>
            <Route exact path="/sommarlov">
              <Sommarlov />
            </Route>
            <Route exact path="/barn&ungdom">
              <YouthGroups />
            </Route>
            <Route exact path="/priser">
              <Prices />
            </Route>
            <Route exact path="/kurser">
              <Courses />
            </Route>
            <Route exact path="/prova-på">
              <ProvaPa />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
