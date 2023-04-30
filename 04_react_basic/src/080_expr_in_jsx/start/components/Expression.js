import "./Expression.css"; // Expression.cssファイルをインポートしている

const Expression = () => { // 無名関数（アロー関数）「Expression」を定義している
    const title = "Expression";  // 「title」という変数に文字列「Expression」を代入している
    const array = ['item1','item2','item3']; // 「array」という変数に文字列の配列を代入している
    const hello = (arg) => `${arg} Function`; // 「hello」という変数に、引数を受け取って文字列を返すアロー関数を代入している
    const jsx = <h2>Hello JSX</h2> // 「jsx」という変数にJSX構文で作られた要素を代入している
    return (
        <div className={title.toLowerCase()}>  
             <h3>Hello {title}</h3> 
             <h3>{array}</h3> 
             <h3>{hello('Hello')}</h3> 
             {<h3>Hello JSX</h3>} 
             {jsx} 
        </div>
    )
}
export default Expression; // 「Expression」という関数をエクスポートしている。
