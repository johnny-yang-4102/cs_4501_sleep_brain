import './App.css';

import ScreenSleepGenes from './screens/ScreenSleepGenes';
import ScreenIntro from './screens/ScreenIntro';
import ScreenPipeline from './screens/ScreenPipeline';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom"


function App() {

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">Home</Link>
        <Link style={padding} to="/sleep_genes">Sleep Genes</Link>
        <Link style={padding} to="/pipeline">Pipeline</Link>
      </div>

      <Routes>
        <Route path="/" element={<ScreenIntro />} />
        <Route path="/sleep_genes" element={<ScreenSleepGenes />} />
        <Route path="/pipeline" element={<ScreenPipeline />} />
      </Routes>

    </Router>
  )
}

export default App;
