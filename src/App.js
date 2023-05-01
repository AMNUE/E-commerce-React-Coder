import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { NavBar } from "./components/Navbar/NavBar.jsx";
import { ItemList } from "./components/ItemList/ItemList.jsx";
import { Titulo } from "./components/Titulo/Titulo.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <Titulo/>
      <ItemListContainer/>
      <ItemList/>
      
      
    </>
  );
}

export default App;
