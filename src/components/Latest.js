import React from "react";
import { prData } from "./data/data.dummy";
import Card1 from './Card1'

function Latest(props) {

return (
  <div className="row content p-40">
    <h1 className="df">
      LATEST VIEWED
    </h1>
    <div className=" d-flex flex-wrap">
{prData.map(obj1 => (
  <Card1
  image={obj1.image}
  title={obj1.title}
  price={obj1.price}
  />
))}
    </div>
    </div>

);

}
export default Latest;