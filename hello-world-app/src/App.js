// src/App.js
import "./App.css";
import logo from "./images/logo-iron.png";
import hamburger from "./images/hamburger.png";
import declarative from "./images/declarative.png";
import components from "./images/components.png";
import singleWay from "./images/single-way.png";
import JSX from "./images/JSX.png";

function App(props) {
  return (
    <>
      <div className="navBar">
        <img src={logo} alt="Logo" className="logo" />
        <img src={hamburger} alt="Hamburger" className="hamburger" />
      </div>
      <div className="main-text">
        <h1>Say hello to ReactJS</h1>
        <p className="p-main">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer.
        </p>
        <button type="submit">Awesome!</button>
      </div>
      <div className="sectionBottom">
        <div className="declarative-box">
          <img src={declarative} alt="declarative" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>

        <div className="components-box">
          <img src={components} alt="components" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>

        <div className="single-way-box">
          <img src={singleWay} alt="single way" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>

        <div className="jsx-box">
          <img src={JSX} alt="jsx" />
          <h3>JSX</h3>
          <p>Statically-typed,designed to run on modern browsers</p>
        </div>
      </div>
    </>
  );
}
export default App;
