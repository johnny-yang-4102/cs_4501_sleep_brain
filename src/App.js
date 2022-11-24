import './App.css';

import ScreenSleepGenes from './screens/ScreenSleepGenes';
import ScreenIntro from './screens/ScreenIntro';
import { Typography } from '@mui/material';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"


function App() {

  const padding = {
    padding: 10
  }

  return (

    <div>

      <Typography
        variant="h2"
        
        component="div"
        color="black"
      >
        CS 4501 Project
      </Typography>

      <Router>

        <div>
          <Link style={padding} to="/">Home</Link>
          <Link style={padding} to="/sleep_genes">Sleep Genes</Link>
          <a style={padding}  href="multiqc_report.html">MultiQC Report</a>
          <a style={padding}  href="SRR10139762_2_val_2_fastqc.html">FastQC Report</a>
        </div>

        <Routes>
          <Route path="/" element={<ScreenIntro />} />
          <Route path="/sleep_genes" element={<ScreenSleepGenes />} />
        </Routes>

      </Router>
    </div>

  )
}

export default App;
