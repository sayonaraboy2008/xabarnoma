import { useState } from "react";
import "./App.css";
import List from "../src/components/list/List";
import Chat from "../src/components/chat/Chat";
import Detail from "../src/components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
function App() {
  const user = true;

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
        <Notification />
      </div>
    </>
  );
}

export default App;
