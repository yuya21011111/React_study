/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css"; // Child.cssファイルをインポートしている

const Child = () => { // 無名関数（アロー関数）「Child」を定義している
  const fn = () => 'hello'; // 変数「fn」に文字列「hello」を返すアロー関数を代入している
  const a = fn(); // 変数「a」に変数「fn」を実行した結果を代入している
  const b = 1 === 1; // 変数「b」に1が1と等しいかどうかの比較結果を代入している
  let c; // 変数「c」を宣言している
  if (b) { // もし変数「b」が真であれば
       c = 'true'; // 変数「c」に文字列「true」を代入している
  }
  return (
    <div className="component"> 
      <h3>式と文</h3> 
      {1}<br></br> 
      {a}<br></br> 
      {b}<br></br> 
      {c}<br></br> 
    </div>
  );
};

export default Child; // 「Child」という関数をエクスポートしている。
