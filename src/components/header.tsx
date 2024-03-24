const header = () => {
  return (
    <div className="row-container header">
      <a className="link" href="/">
        Hjem
      </a>
      <a className="link" href="/hello">
        Hello
      </a>
      <a className="link" href="/Anders">
        Anders
      </a>
      <div className="bilde">
        <a className="lukas" href="/Lukas">
          <img src="../public/LukasAnsikt.png" alt="Lukas" />
        </a>
      </div>
      <a className="link" href="/Overraskelse">
        Ovn
      </a>
    </div>
  );
};

export default header;
//heihei
