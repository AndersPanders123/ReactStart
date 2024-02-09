function ListGroup() {
  let items = ["Hamar", "Kåppang", "Ridabu", "Løten", "stange"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item"
          key={index} onClick={() => console.log("Clicked", {item})}
          >{item} </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
