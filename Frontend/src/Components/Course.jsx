import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios"

function Course() {
  const [book , setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
       const res =  await  axios.get("http://localhost:4001/book")
       console.log(res.data)
       setBook(res.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center text-center justify-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-5 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vero
            eligendi in qui ab dolor adipisci maiores recusandae laborum vitae
            incidunt delectus veritatis, commodi quaerat suscipit ea?
            Perspiciatis dicta quidem placeat molestiae magnam delectus,
            repellendus assumenda eligendi eaque iste ab quasi vel illo enim
            laboriosam fuga similique inventore temporibus? Ducimus corrupti
            laudantium enim dolorum mollitia.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>{" "}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {book.map((list) => (
            <Cards key={list.id} list={list} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
