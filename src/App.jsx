import { useState } from "react";
import "./App.css";
import List from "../src/components/list/List";
import Chat from "../src/components/chat/Chat";
import Detail from "../src/components/detail/Detail";
function App() {
  return (
    <>
      <div className="container">
        <List />
        <Chat />
        <Detail />
      </div>
    </>
  );
}

export default App;
