import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
// import About from "./components/About/About";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element : <>Main page</>
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/smarthouse",
//     element: <>house</>
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
     <App/>
  </BrowserRouter>
);
