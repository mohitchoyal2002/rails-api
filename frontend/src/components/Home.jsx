import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BiPencil } from "react-icons/bi";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:3000/books")
        .then((res) => {
          // console.log(res.data);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <h1 className="text-center pt-28 text-4xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="pt-28 px-6">
      <div className="mb-10 flex items-center justify-between px-6">
        <h1 className="text-4xl">All Books</h1>
        <Link
          to="create-book"
          className="flex items-center gap-1 bg-green-600 rounded-md cursor-pointer p-3 text-white text-lg shadow-md"
        >
          <span>Create Book</span> <BiPencil />
        </Link>
      </div>
      <div>
        {data.map((book, index) => (
          <Card book={book} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
