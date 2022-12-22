import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
        
          <Route path="/search">
             <h1>This is searchpage</h1> {/* SearchPage */}
            
          </Route>

          <Route path="/" component={<Home />}>
            {/* Home */} <h1>yooooo lets build Google Clone </h1>
            
            </Route>
        
      
    </div>
    </Router>
  );
}

export default App;
