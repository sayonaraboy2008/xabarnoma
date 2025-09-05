import React from "react";
import "./notification.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function Notification() {
  return (
    <div className="">
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Notification;
