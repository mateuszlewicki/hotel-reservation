import BookingExtra from "../BookingExtra/BookingExtra";
import { bookingExtras } from "../../fakeData/mockData";
import React, { useState } from "react";
function BookingExtras() {
  const [bookingExt, setbookingExt] = useState(null);
  const getbookingExt = function (extras) {
    const ext = extras.map(extras => 
    <div class="col"> <BookingExtra bookingExtData={extras} key={extras.id} /> 
    </div>);
    return ext;

  };
  return (

    <div class="container">
    <div class="row row-cols-2">
      { getbookingExt(bookingExtras)}
      </div>
      </div>

  );
}
export default BookingExtras;
