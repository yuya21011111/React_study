const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。')
  }
  const clickHandler2 = () => {
    alert('ボタンがクリックされました。')
  }
  const hello = () => 'hello react'
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
      <button onClick={() => {clickHandler()}}>クリックしてね</button>
      {hello()}
    </>
  );
};

export default Example;
