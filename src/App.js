import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { NavBar } from "./components/Navbar/NavBar.jsx";
import { About } from "./components/About/About.jsx";
//import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom"
import { Titulo } from "./components/Titulo/Titulo.jsx";


function App() {
  return (

    <div className="App">
      
      <Router>
        <NavBar/>
        <Titulo/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/productos/:categoryId" element={<ItemListContainer/>}/>
          
          <Route path="*" element={<Navigate to ="/"/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
