import "./App.css";
import Banner from "./component/Banner";
import Blog from "./component/Blog";
import Collection from "./component/collection";
import Girlbanner from "./component/Girlbanner";
import Glassproduct from "./component/Glassproduct";
import Logosection from "./component/Logosection";
import Navbar from "./component/Navbar";
import Product from "./component/Product";
import Tagline from "./component/Tagline";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Tagline></Tagline>
      <Collection></Collection>
      <Product></Product>
      <Logosection></Logosection>
      <Glassproduct></Glassproduct>
      <Girlbanner></Girlbanner>
      <Blog></Blog>
     
    </div>
  );
}

export default App;
