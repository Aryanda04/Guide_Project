import "./App.css";
import nnk_item from "./Data/nnk_item.json";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Item_Card from "./components/card/Item_card";
// import Home from "./components/Pages/Home";

function App() {
  const nnk_itemContainer = [];
  const keys = Object.keys(nnk_item);

  keys.forEach((key) => {
    nnk_itemContainer.push(...nnk_item[key]);
  });
  console.log(nnk_itemContainer);
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/about">{/* <About /> */}</Route>
            <Route path="/users">{/* <Home /> */}</Route>
            <Route path="/">{/* <Home /> */}</Route>
          </Routes>
        </div>
      </Router>
      <div className="App">
        <header className="App-header">
          <h1>Test</h1>
          xx
          <Item_Card />
          Test
        </header>
      </div>
    </>
  );
}

export default App;
