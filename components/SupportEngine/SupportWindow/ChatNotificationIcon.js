import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import ChatNotificationImage from "../../../public/images/chatEngineImgs/chatNotification1.gif";
import Image from 'next/image';

const ChatNotificationIcon = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div
      className="transition-3"
      style={{
        ...styles.ChatNotificationImage,
        position: "absolute",
        top: "-18px",
        right: "-16px",
        zIndex: "2",
      }}
    >
      {props.visible && (
        <Image
          src={ChatNotificationImage}
          alt="Chat Notification"
        />
      )}
      <div
        className="close-button"
        onClick={handleClick}
        style={{ display: visible ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default ChatNotificationIcon;
