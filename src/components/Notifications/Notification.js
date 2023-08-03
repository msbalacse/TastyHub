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
      <div className="flex flex-col gap-4 rounded-lg ">
        {notificationdata.map((data) => (
          <div className="relative w-full h-[200px] border-4 border-primary-color rounded-lg">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={data.imageUrl}
              alt={data.NotificationName}
            />
            <h1 className="absolute z-10 text-base font-bold text-white md:text-lg lg:text-xl top-1 left-1">
              {data.NotificationName}
            </h1>
            <p className="absolute bottom-0 right-0 z-10 px-4 text-lg italic font-extrabold text-yellow-500 bg-white rounded-tl-lg rounded-br-lg">
              {data.Duration} hrs
              <span className="text-xs text-black"> expire</span>
            </p>
            <p className="absolute z-10 text-lg italic font-extrabold text-white transform -translate-x-1/2 -translate-y-1/2 md:text-2xl lg:text-6xl text-shadow-md top-1/2 left-1/2 ">
              {data.Discount} %
            </p>
            <div class="absolute inset-0 bg-black opacity-50"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notification;
