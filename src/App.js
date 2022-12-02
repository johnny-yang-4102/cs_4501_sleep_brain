import './App.css';

import ScreenSleep from './screens/ScreenSleep';
import ScreenIntro from './screens/ScreenIntro';
import { Typography, Divider } from '@mui/material';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"
import ScreenBrain from './screens/ScreenBrain';
import ScreenSleepBrainEffects from './screens/ScreenSleepBrainEffects';


function App() {

  const padding = {
    padding: 10
  }

  return (

    <div>

      <Typography
        variant="h3"
        
        component="div"
        color="black"
        
        style={{
          
          backgroundColor: 'wheat'
                   
      
      }}
      >
        Connections Between Sleep And Brain
      </Typography >

      <Divider />

      <Router>

        <div>
          <Link style={padding} to="/">Home</Link>
          <Link style={padding} to="/sleep">Sleep</Link>
          <Link style={padding} to="/brain">Brain</Link>
          <Link style={padding} to="/sleep_brain_effects">Effects of Sleep on Brain</Link>
          <a style={padding}  href="multiqc_report.html">MultiQC Report</a>
          <a style={padding}  href="SRR10139762_2_val_2_fastqc.html">FastQC Report</a>
        </div>

        <Routes>
          <Route path="/" element={<ScreenIntro />} />
          <Route path="/brain" element={<ScreenBrain />} />
          <Route path="/sleep" element={<ScreenSleep />} />
          <Route path="/sleep_brain_effects" element={<ScreenSleepBrainEffects />} />
        </Routes>

      </Router>
    </div>

  )
}

export default App;
