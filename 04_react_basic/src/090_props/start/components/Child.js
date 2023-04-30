/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

// const Child = (props) => {

//   console.log(props);
//   return (
//     <div className={`component ${props.color}`}>
//       <h3>Hello Component</h3>
//     </div>
//   );
// };

const Child = ({ color = 'green' }) => { // "color"というプロパティを持つオブジェクトが渡されるようになっている。もしプロパティ"color"が未定義の場合、初期値として"green"が代入される。
  
  console.log(color); // "color"の値をコンソールに出力する

  return (
    <div className={`component ${color}`}> 
      <h3>Hello Component</h3> 
    </div>
  );
};

/* 「Child」という関数をエクスポートしている */


export default Child;
