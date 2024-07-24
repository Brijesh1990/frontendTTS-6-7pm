import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";
import NotFound from "./components/NotFound";
const App=()=>{
  return (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-data" element={<Create />} />
        <Route path="/edit-data" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  </>
  )
}
export default App
