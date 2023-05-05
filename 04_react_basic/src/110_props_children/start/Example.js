import Profile from "./components/Profile"; //  './components/Profile' から "Profile" コンポーネントをインポートしている
import Container from "./components/Container"; // './components/Container' から "Container" コンポーネントをインポートしている

const profile = [ // オブジェクト"profile"が定義されている。オブジェクト内に2つのユーザー情報が含まれ、1つ目のuserinfoは "Takashi"、2つ目のuserinfoは "Jane" である。   
  { name: "Takashi", age: 19, country: "Japan", color: "red" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
];

const Example = () => { // "Example"というReactコンポーネントが定義されている。
  return (
    <div>
      <Container title="Childrenとは？" > 
        <Profile key={profile[0].name} {...profile[0]} /> 
        <Profile key={profile[1].name} {...profile[1]} /> 
        <Profile /> 
      </Container>

      <Container title="Childrenとは？(配列)" children= { 
        [
         <Profile key={profile[0].name} {...profile[0]} />, // "Profile"コンポーネントをインスタンス化し、props属性としてキーが "takashi" のプロファイルオブジェクトを渡す。この要素は配列"children"に格納される
         <Profile key={profile[1].name} {...profile[1]} />,  // "Profile"コンポーネントをインスタンス化し、props属性としてキーが "jane" のプロファイルオブジェクトを渡す。この要素は配列"children"に格納される
         <Profile /> // Profileコンポーネントが呼び出され、propsを与えられていないため、何も表示されない。この要素は配列"children"に格納される
        ]
      } 
      first={<Profile key={profile[0].name} {...profile[0]} />} // props属性のフィールドである"first"に、先頭のプロファイルを含む "Profile"コンポーネントを渡している
      />
  
      
    </div>
  );
};

export default Example; // "Example"コンポーネントをエクスポートしている 
