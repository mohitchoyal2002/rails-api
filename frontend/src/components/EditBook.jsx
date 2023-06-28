import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { state } = useLocation();
  const { book } = state;
  const navigate = useNavigate()

  const [title, setTitle] = useState(book.title);
  const [body, setBody] = useState(book.body);

  const showError = (err) => {
    const title = document.querySelector(".name");
    // console.log(err);
    if (err.title){
      title.innerHTML = err.title[0];
      // console.log(err.name);
    }
    else{
      title.innerText = ''
    }

    const body = document.querySelector(".body");
    if(err.body){
      body.innerText = err.body[0];
    }
    else{
      body.innerText = ''
    }
  }

  const editBook = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:3000/books/${book.id}`, {
        title,
        body,
      });
      console.log(res.data);
      navigate('/')
    } catch (err) {
      showError(err.response.data.errors)
      console.log(err);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <h1 className="text-3xl text-center">Edit Book</h1>
      <form
        onSubmit={(e) => {
          editBook(e);
        }}
        className="border p-4 w-1/2 flex flex-col justify-center gap-5"
      >
        <div className="flex flex-col gap-2">
          <span>Book Name</span>
          <input
            className="border border-gray-200 outline-none p-2 rounded-md text-lg"
            type="text"
            placeholder="Enter Book Name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <span className="name text-sm text-red-500"></span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Book Discription</span>
          <textarea
            type="text"
            className="border border-gray-200 outline-none p-2 rounded-md h-40 text-lg"
            placeholder="Enter Book Discription"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <span className="body text-sm text-red-500"></span>
        </div>
        <div>
          <button className="flex items-center gap-1 bg-green-600 rounded-md cursor-pointer p-3 text-white text-lg shadow-md">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
