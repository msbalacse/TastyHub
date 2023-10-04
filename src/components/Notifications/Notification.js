import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebase";
import { useEffect } from "react";
import Title from "../Title/Title";

const Notification = () => {
  const [notificationdata, setNotificationData] = useState([]);

  async function getNotification() {
    const data = await getDocs(collection(db, "notifications"));
    try {
      setNotificationData(
        data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  }
  console.log(notificationdata);
  useEffect(() => {
    getNotification();
  }, []);
  return (
    <div>
      <Title data={"Notification"} />
      <div className="flex  gap-4 rounded-lg ">
        {notificationdata.map((data) => {
          const { imageUrl, NotificationName, Duration, Discount } = data;
          return (
            <div className="relative w-[250px] p-1 border-4 border-primary-color rounded-lg">
              <img src={imageUrl} alt={imageUrl} />
              <p className="my-2 text-base">{NotificationName}</p>
              <p className="text-primary-color font-semibold">
                End In : {Duration}
              </p>
              <div className="absolute right-0 top-0 rounded-sm flex items-center justify-center text-primary-color bg-white w-[40px]">
                {Discount}%
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Notification;
