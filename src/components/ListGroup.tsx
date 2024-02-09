function ListGroup() {
  let items = ["Hamar", "Kåppang", "Ridabu", "Løten", "stange"];
  items = [];

  const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
