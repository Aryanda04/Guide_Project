import "./App.css";
import nnk_item from "./Data/nnk_item.json";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home";

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
            <Route path="/users">
              <Home />
            </Route>
            <Route path="/">{/* <Home /> */}</Route>
          </Routes>
        </div>
      </Router>
      <div className="App">
        <header className="App-header">
          <h1>Test</h1>
          <table>
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Price (per item)</th>
                <th scope="col">Qty</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {nnk_itemContainer !== undefined && (
                <>
                  {nnk_itemContainer.map((res, index) => {
                    // console.log(res.id);
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{res.name}</td>
                        <td>{res.lastname}</td>
                        {/* <td>{res}</td> */}
                        {/* <td>{res.qty}</td> */}
                        <td>
                          <span>
                            <button
                              // onClick={handleEdit}
                              // value={res.id}
                              className="edit"
                            >
                              Modify
                            </button>
                            <button
                              // onClick={handleDelete}
                              // value={res.id}
                              className="delete"
                            >
                              Delete
                            </button>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </header>
      </div>
    </>
  );
}

export default App;
