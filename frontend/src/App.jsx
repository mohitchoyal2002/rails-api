import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Book from "./components/Book";
import Home from "./components/Home";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";
import Signup from "./components/Signup";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="book" element={<Book/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="create-book" element={<CreateBook/>}/>
            <Route path='edit' element={<EditBook/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
