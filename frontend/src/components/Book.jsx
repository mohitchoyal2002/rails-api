import React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Book = () => {
  const { state } = useLocation();
  const { book } = state;
  const navigate = useNavigate();

  const edit = () => {
    navigate("/edit", { state: { book: book } });
  };

  const deleteBook = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/books/${book.id}`);
      console.log(res.data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-28 px-10">
      <h1 className="text-3xl font-semibold text-center">{book.title}</h1>
      <p className="text-center">{book.body}</p>
      <div className="flex items-center justify-around">
        <button
          onClick={edit}
          className=" gap-1 bg-green-600 rounded-md cursor-pointer p-3 text-white text-lg shadow-md"
        >
          Edit Book Info
        </button>
        <button
          onClick={deleteBook}
          className=" gap-1 bg-red-600 rounded-md cursor-pointer p-3 text-white text-lg shadow-md"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
};

export default Book;
