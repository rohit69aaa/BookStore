import React from "react";

function Cards({ list }) {
  return (
    <div className="card bg-neutral w-full shadow-sm rounded-lg overflow-hidden 
                    hover:shadow-lg hover:scale-105 transform transition duration-300">
      <figure>
        <img
          src={list.image}
          alt={list.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between items-center">
          {list.name}
          <div className="badge badge-secondary">{list.category}</div>
        </h2>
        <p>{list.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{list.price}</div>
          <div className="badge badge-outline cursor-pointer hover:text-white hover:bg-pink-500 duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
