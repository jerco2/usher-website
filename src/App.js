import "./App.css";
import NavMenu from "./components/navmenu/NavMenu";
import Showcase from "./components/showcase/Showcase";
import About from "./components/about/About";
import Product from "./components/products/Product";

function App() {
  return (
    <div>
      <NavMenu />
      <Showcase />
      <About />
      <Product />
    </div>
  );
}

export default App;
