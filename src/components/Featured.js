



import React from "react";

 import { prolData } from "./data/data.dummy";
import Card from './Card'

function Featured() {

return (
  <div className="content p-40 mb-4">
    <h1 className="df">
      <b className="zl">FEATURED</b><br/> ARRIVALS
    </h1>
    <p className="bnm">
      “Whoever said money cant buy happiness simply didnt know WHERE TO SHOP”
    </p>
    <div className="d-flex flex-wrap">
{prolData.map(obj => (
  <Card
  image={obj.image}
  title={obj.title}
  price={obj.price}
  onClick={() => console.log(obj)}
  />
))}
    </div>
    </div>

);

}
export default Featured;