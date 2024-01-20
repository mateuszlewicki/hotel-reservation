import styles from "./BookingExtras.module.css";
import BookingExtra from "../BookingExtra/BookingExtra";
import { bookingExtras } from "../../fakeData/mockData";
import React, { useState } from "react";
function BookingExtras() {
  const [bookingExt, setbookingExt] = useState(null);
  const getbookingExt = function (roomsData) {
    let rooms = [];
    roomsData.forEach((x) => {
      rooms.push(<BookingExtra bookingExtData={x} key={x.id} />);
    });
    setbookingExt(rooms);
  };
  return (
    <div>
      <div className={styles.roomContainer}>
        {bookingExt ? bookingExt : getbookingExt(bookingExtras)}
      </div>
    </div>
  );
}
export default BookingExtras;
