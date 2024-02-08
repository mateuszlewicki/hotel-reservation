import { roomsData } from "../../fakeData/mockData";
import Room from "../Room/Room";
import styles from "./Rooms.module.css";
import React, { useState } from "react";
function Rooms() {
  const [rooms, setRooms] = useState(null);
  const getRooms = function (data) {
    const rooms = data.map(data => 
      <div class="col"> <Room roomData={data} key={data.id} /> </div>
    )
    return rooms
  };
  return (
    <div class="container">
  <div class="row row-cols-2">
    { getRooms(roomsData)}
    </div>
    </div>
  );
}
export default Rooms;
