import "./App.css";
import Banner from "./component/Banner";
import Collection from "./component/collection";
import Navbar from "./component/Navbar";
import Tagline from "./component/Tagline";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <Tagline></Tagline>
      <Collection></Collection>
      <h2> Hello It is mahlil </h2>
    </div>
  );
}

export default App;
