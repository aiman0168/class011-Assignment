import React from "react";

function ChildComponent(props: any) {
  return (
    <div className="flex flex-col items-center border border-gray-300 p-5 m-4 w-64">
      <img src={props.carImage} alt={props.carName} className="w-full h-auto mb-4" />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.carName}</h2>
      <p className="text-gray-600 mb-2">Price: {props.carPrice}</p>
      <p className="text-yellow-500">{props.carReviews} ⭐</p>
    </div>
  );
}

export default ChildComponent;