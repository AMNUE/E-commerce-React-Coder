import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { NavBar } from "./components/Navbar/NavBar.jsx";
import { ItemCount } from "./components/ItemCounter/Counter.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer saludo="Hola mundo"/>
      <ItemCount/>
      
    </>
  );
}

export default App;
