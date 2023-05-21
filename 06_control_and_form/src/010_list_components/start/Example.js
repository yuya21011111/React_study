
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalsList = [];
  animals.map(function(val){
    animalsList.push(<li key={val}>{val}</li>);
  });

  const helloAnimals = animals.map((animal) => 
    <li key={animal}>Hello, {animal}</li>
  );

  console.log(helloAnimals);

  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animalsList}
        {helloAnimals}
      </ul>
    </>
  );
};

export default Example;
