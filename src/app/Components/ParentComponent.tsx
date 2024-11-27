import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent(){
   const cars = [
    {
      carImage: '/car1.png',
      carName: 'Alto',
      carPrice: 90000,
      carReviews: 4.8,
    },
    {
      carImage: '/car2.jpg',
      carName: 'Toyota Corolla',
      carPrice: 70000,
      carReviews: 4.5,
    },
    {
      carImage: '/car3.jpg',
      carName: 'Honda City',
      carPrice: 650000,
      carReviews: 4.7,
    },
    {
      carImage: '/car4.jpg',
      carName: 'Honda Civic',
      carPrice: 55000,
      carReviews: 4.6,
    },
   ];
  return (
    <div>
      {cars.map((car, index) => {
        return(
          <ChildComponent
          key={index}
          carImage={car.carImage}
          carName={car.carName}
          carPrice={car.carPrice}
          carReviews={car.carReviews}
          />
        )
      })}
    </div>
   )
}

export default ParentComponent
