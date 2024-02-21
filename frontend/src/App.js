import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup.js'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';
import MemberDashboard from './Pages/Dashboard/MemberDashboard/MemberDashboard.js';
import Allbooks from './Pages/Allbooks';
// import Header from './Components/Header';
import AdminDashboard from './Pages/Dashboard/AdminDashboard/AdminDashboard.js';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext.js';
import Allsubjects from './Pages/Allcategory.js';
import CategoryBooks from './Components/CategoryBooks.js';
import FacultyDetails from './Pages/Faculty Details.js'
import EJournals from './Pages/EJournals.js'
// import Footer from './Components/Footer.js';
import CollegeInfo from './Components/CollegeInfo.js'
import Navbar from './Components/Navbar.js';
import AboutUs from './Pages/AboutUs.js';
import LearningOutcomes from './Pages/LearningOutcomes.js';
import VisionMission from './Pages/VisionMission.js'

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <CollegeInfo/>
      {/* <Header/> */}
      <Navbar/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs/>
          </Route>
          <Route exact path="/visionmission">
            <VisionMission/>
          </Route>
          <Route exact path="/learnings">
            <LearningOutcomes/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/signin">
            {user ? (
              user.isAdmin ? (
                <Redirect to="/dashboard@admin" />
              ) : (
                <Redirect to="/dashboard@member" />
              )
            ) : (
              <Signin />
            )}
          </Route>
          <Route exact path="/dashboard@member">
            {user ? (
              user.isAdmin === false ? (
                <MemberDashboard />
              ) : (
                <Redirect to="/" />
              )
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/dashboard@admin">
            {user ? (
              user.isAdmin === true ? (
                <AdminDashboard />
              ) : (
                <Redirect to="/" />
              )
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/books">
            <Allbooks />
          </Route>
          <Route exact path="/ejournals">
            <EJournals/>
          </Route>
          <Route exact path="/allsubjects">
            <Allsubjects />
          </Route>
          <Route exact path="/facultydetails">
            <FacultyDetails/>
          </Route>
          <Route path="/book/:category">
            {/* {console.log(category)} */}
            <CategoryBooks/>
          </Route>
        </Switch>
      </div>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
