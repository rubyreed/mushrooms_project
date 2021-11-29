import React from "react"

const Mushroom = (props) => {
  const { info } = props;
  return(
    <div>
      <h3>Variety: {info.variety}</h3>
      <h3>Color: {info.color}</h3>
      <h3>Usage: {info.usage}</h3>
      <hr />
    </div>
  )
};

export default Mushroom;