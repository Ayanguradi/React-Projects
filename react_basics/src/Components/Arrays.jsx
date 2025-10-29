function Fruits() {
  var fruit = ["apple", "orange", "mango"];

  return (
    <>
      <p>fruits:{fruit} </p> 
      <ul>
        {fruit.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> 
      {/* ------foreach wll not work------ */}
        <div>
            {fruit.forEach(element => {
                // <p>{element}</p>
                console.log(element)
            })}
        </div>
    </>
  );
}

export default Fruits;
