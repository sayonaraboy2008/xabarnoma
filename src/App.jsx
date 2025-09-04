import { useState } from "react";
import "./App.css";
import List from "../src/components/list/List";
import Chat from "../src/components/chat/Chat";
import Detail from "../src/components/detail/Detail";
import Login from "./components/login/Login";
function App() {
  const user = false;

  return (
    <>
      <div className="container">
        {user ? (
          <>
            <List />
            <Chat />
            <Detail />
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default App;
