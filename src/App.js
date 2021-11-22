import "./App.css";
import Article from "./components/articles/Article";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
// import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Blog from "./containers/blog/Blog";
import Header from "./containers/header/Header";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Possibility from "./containers/possibility/Possibility";
import Footer from "./containers/footer/Footer";
import Featuress from "./components/Featuress/Featuress";

function App() {
  return (
    <div className="App">
      {/* <h1>This is vr app !!!</h1> */}
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      {/* <Article /> */}
      <WhatGPT3 />

      <Featuress />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
