let val = 0;

const Child = () => {
  val++;
  return <div>{val}</div>
}

const ChildPure = ({ val }) => {
  return <div>{ val }</div>
}

const Example = () => {
let val = 0;
  return (
    <>
    <Child />
    <Child />
    <Child />
    <ChildPure val={++val} />
    <ChildPure val={++val} />
    <ChildPure val={++val} />
    </>
  );
};

export default Example;
