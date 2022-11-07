import './App.css';

import ScreenSleepGenes from './screens/ScreenSleepGenes';
import ScreenIntro from './screens/ScreenIntro';
import ScreenPipeline1 from './screens/ScreenPipeline1';
import ScreenPipeline2 from './screens/ScreenPipeline2';
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
          <Link style={padding} to="/pipeline_1">Pipeline Results 1</Link>
          <Link style={padding} to="/pipeline_2">Pipeline Results 2</Link>
        </div>

        <Routes>
          <Route path="/" element={<ScreenIntro />} />
          <Route path="/sleep_genes" element={<ScreenSleepGenes />} />
          <Route path="/pipeline_1" element={<ScreenPipeline1 />} />
          <Route path="/pipeline_2" element={<ScreenPipeline2 />} />
        </Routes>

      </Router>
    </div>

  )
}

export default App;
