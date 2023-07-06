import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import { ItemCount } from "./components/ItemCount";
// import "./App.css";

// import React from "react";
import { useState, useEffect } from "react";
import data from "./data/Productos.json";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import { Link, NavLink } from "react-router-dom";
import { ItemDetail } from "./components/ItemDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* <Route path="/" element={<Inicio />} /> */}
          <Route path="/" element={<div>Inicio</div>} />
          <Route
            path="/category/:id"
            element={<ItemListContainer products={data} />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
