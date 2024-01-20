import { roomsData } from "../../fakeData/mockData";
import Room from "../Room/Room";
import styles from "./Rooms.module.css";
import React, { useState } from "react";
function Rooms() {
  const [rooms, setRooms] = useState(null);
  const getRooms = function (roomsData) {
    let rooms = [];
    roomsData.forEach((x) => {
      rooms.push(<Room roomData={x} key={x.id} />);
    });
    setRooms(rooms);
  };
  return (
    <div class="container">
  <div class="row row-cols-2">
    {/* <div className={styles.roomContainer}> */}
    <div class="col">{rooms ? rooms : getRooms(roomsData)}</div>
    </div>
    </div>
  );
}
export default Rooms;
