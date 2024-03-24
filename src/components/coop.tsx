function coop() {
  let money: number = 200;
  let items: string[] = ["Monster, Cookies, Boller, Battery"];

  return;
  <div>
    <p>"Du har {money}kr"</p>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>;
}

export default coop();
