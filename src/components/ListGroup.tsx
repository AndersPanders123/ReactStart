import { useState } from "react";

function ListGroup() {
  let items = ["Hamar", "Kåppang", "Ridabu", "Løten", "stange"];
  const [selectedIndex, setSelectedIndex]= useState(-1);
  
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className=
            {selectedIndex === index 
              ? "list-group-item active"
              : "list-group-item"
            }
            key={index}
            onClick={() => {setSelectedIndex(index); }}
          >
            {item} 
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
//Anders