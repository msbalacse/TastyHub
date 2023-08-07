// SendMessage.js
import React, { useState } from "react";
import axios from "axios";

const SendMessage = () => {
  const [to, setTo] = useState("");
  const [body, setBody] = useState("");

  const handleSendSMS = () => {
    fetch("https://tastyhub.onrender.com/send-sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, body }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("SMS sent successfully:", data);
        // Handle success, show a success message, etc.
      })
      .catch((error) => {
        console.error("Error sending SMS:", error);
        // Handle error, show an error message, etc.
      });
  };

  // const handleSendSMS = async () => {
  //   try {
  //     const response = await axios.post(
  //       "https://tastyhub.onrender.com/send-sms",
  //       {
  //         to,
  //         body,
  //       }
  //     );

  //     console.log("SMS sent:", response.data);
  //   } catch (error) {
  //     console.error("Failed to send SMS:", error);
  //   }
  // };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient's phone number"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="text"
        placeholder="SMS content"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleSendSMS}>Send SMS</button>
    </div>
  );
};

export default SendMessage;
