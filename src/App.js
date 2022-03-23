import "./App.css";
import NavMenu from "./components/navmenu/NavMenu";
import Showcase from "./components/showcase/Showcase";
import About from "./components/about/About";
import Products from "./components/products/Products";

function App() {
  return (
    <div>
      <NavMenu />
      <Showcase />
      <About />
      <Products />
    </div>
  );
}

export default App;
