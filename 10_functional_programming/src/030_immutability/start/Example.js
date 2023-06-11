const Example = () => {
  const num = {
    val: 2
  }

  const doubel = (num) => {
    const newNum = {}
    newNum.val =  num.val * 2
    return newNum;
  }

  const newNum = doubel(num);
  // alert(newNum.val);
  console.log('newNum',newNum, 'num',num)
  return (
    <>
      <h3>不変性（Immutability）</h3>
      <p>引数で渡ってきたオブジェクトを変更しない！</p>
    </>
  );
};

export default Example;
