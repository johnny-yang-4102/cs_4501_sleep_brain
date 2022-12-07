import './App.css';

import ScreenSleep from './screens/ScreenSleep';
import ScreenHome from './screens/ScreenHome';
import { Typography } from '@mui/material';


import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import ScreenBrain from './screens/ScreenBrain';
import ScreenSleepBrainEffects from './screens/ScreenSleepBrainEffects';
import References from './screens/References';
import ScreenResearchResults from './screens/ScreenResearchResults';

import '../src/index.css'


function App() {

  const link = {
    padding: 8,
    color: 'inherit',
    textDecoration: 'none'
  }

  const navbar = {
    backgroundColor: 'wheat',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginBottom: '25px',
  }

  const footer = {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    backgroundColor: "wheat",
    color: "black",
    textAlign: "center",
    marginBottom: "-50px"
}

return (

  <div
    style={{
      minHeight: "100vh",
      height: "100%",
      position: "relative",
  
  }}>

    <Router>
      

      <div
        style={navbar}
      >


        <Typography
          display="inline"
          variant="h3"

          component="div"
          color="black"
        >
          Sleep And The Brain
        </Typography >

        <div>
          <Link style={link} to="/">Home</Link>
          <Link style={link} to="/sleep">Sleep</Link>
          <Link style={link} to="/brain">Brain</Link>
          <Link style={link} to="/sleep_brain_effects">Effects of Sleep on Brain</Link>
          <Link style={link} to="/research_results">Research Results</Link>
          <Link style={link} to="/References">References</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<ScreenHome />} />
        <Route path="/brain" element={<ScreenBrain />} />
        <Route path="/sleep" element={<ScreenSleep />} />
        <Route path="/sleep_brain_effects" element={<ScreenSleepBrainEffects />} />
        <Route path="/research_results" element={<ScreenResearchResults />} />
        <Route path="/References" element={<References />} />
      </Routes>

    </Router>
    
    <div style={{paddingBottom: "100px"}}>

    </div>
    <footer style={footer}>
          <p>CS 4501 Computing Biology @ UVA 2022</p>
    </footer>
  </div>

)
}

export default App;
