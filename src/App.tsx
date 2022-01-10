/*
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
*/

import "./styles.css";
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";

//import type { User } from "./types/user";

//ユーザー情報の型定義
type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
};

export default App = () => {
  //取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  //画面表示にユーザー情報取得
  useEffect(() => {
    axios.get<User[]>("https://4ugzi.csb.app/users.json").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return <div>{users.length} </div>;

  // return <div>test</div>;
};
