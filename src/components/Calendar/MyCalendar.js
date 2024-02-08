import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Calendar from "react-calendar";
import Badge from "react-bootstrap/Badge";
import "react-calendar/dist/Calendar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Stack from "react-bootstrap/Stack";
import { fakeRoomsData } from "../../fakeData/roomsData";
import MyChatbot from "../MyChatBot/MyChatbot";
import style from "./MyCalendar.module.css";


function MyCalendar() {
  // return <Calendar  />
  const [value, dateOnChange] = useState(new Date());
  const [roomInfo, setRoomInfo] = useState({
    occupiedRooms: [],
    availableRooms: [],
  });
  const [fact, setFact] = useState("");
  console.log(getDayName(value));
  function getDayName(date, locale = "pl-PL") {
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function formatDate(date) {
    const months = [
      "Stycznia",
      "Lutego",
      "Marca",
      "Kwietnia",
      "Maja",
      "Czerwca",
      "Lipca",
      "Sierpnia",
      "Września",
      "Października",
      "Listopada",
      "Grudnia",
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
  }
  const formatDateToSearch = (date) => {
    let day = date.getDate().toString();
    let month = (date.getMonth() + 1).toString(); // Miesiące są liczone od 0
    const year = date.getFullYear();

    // Dodajemy zero na początku, jeśli dzień lub miesiąc jest jednocyfrowy
    if (day.length < 2) day = "0" + day;
    if (month.length < 2) month = "0" + month;

    return `${year}-${month}-${day}`;
  };
  const findRoomAvailability = (date) => {
    // Formatowanie daty do formatu YYYY-MM-DD
    console.log(date);
    const formattedDate = formatDateToSearch(date);
    console.log(formattedDate);

    // Wyszukiwanie dostępności pokoju na daną datę
    const roomAvailability = fakeRoomsData.dates.find((d) => {
      return d.date === formattedDate;
    });
    // Aktualizacja stanu, jeśli znaleziono dane
    if (roomAvailability) {
      setRoomInfo({
        occupiedRooms: roomAvailability.occupiedRooms,
        availableRooms: roomAvailability.availableRooms,
      });
    } else {
      setRoomInfo({
        occupiedRooms: [],
        availableRooms: []
      });
      // Możesz również obsłużyć przypadki, gdy nie ma danych na daną datę
      console.log("Brak danych na tę datę");
    }
  };
  const setDateReservation = (e) => {
    dateOnChange(e);
    findRoomAvailability(e);
  };
  useEffect(() => {
    const fetchCatFact = async () => {
      try {
        const response = await axios.get("https://catfact.ninja/fact"); //Jakieś losowe api z neta (REST API)
        setFact(response.data.fact);
        console.log(response.data.fact);
      } catch (error) {
        console.error("Error fetching cat fact:", error);
        setFact("Failed to load cat fact.");
      }
    };

    fetchCatFact();
  }, []); // Pusta tablica zależności, aby uruchomić tylko przy montowaniu komponentu
  return (
    <Container
      fluid={false}
      style={{ marginTop: "5%", minHeight: "1200px", maxWidth: "2000px" }}
    >
      <Row style={{ minHeight: "500px", minWidth: "450px", marginLeft: "1%" }}>
        <Row style={{ minHeight: "600px", minWidth: "450px" }}>
          <Col sm={8} style={{ background: "rgb(1, 62, 146)" }}>
            <Row style={{ minHeight: "600px", minWidth: "450px" }}>
              <Col>
                <Row>
                  <Calendar
                    className={style.reactCalendar}
                    onChange={setDateReservation}
                    value={value}
                  />
                </Row>
                <Row style={{ background: "rgb(1, 62, 146)" }}>
                  <h1 style={{ color: "white", fontSize: "75px" }}>
                    {capitalizeFirstLetter(getDayName(value))}
                  </h1>
                </Row>
                <Row style={{ background: "rgb(1, 62, 146)" }}>
                  <h2 style={{ color: "white", fontSize: "50px" }}>
                    {formatDate(value)}
                  </h2>
                </Row>
                <Row>
                  <p
                    style={{
                      borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
                      width: "75%",
                      margin: "10px",
                      marginRight: "50px",
                    }}
                  ></p>
                </Row>
                <Row></Row>
                <Row>
                  <h3 style={{ color: "white", fontSize: "55px" }}>
                    Zajęte pokoje:
                  </h3>
                </Row>
                <Row>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    {roomInfo.availableRooms.length > 0 ? (
                      roomInfo.availableRooms.map((room, index) => (
                        <Badge
                          key={index}
                          bg="danger"
                          style={{ fontSize: "1.5em", padding: "0.5em 1em" }}
                        >
                          {room}
                        </Badge>
                      ))
                    ) : (
                      <h6 style={{ color: "white", fontSize: "35px" }}>
                        Brak zajetych pokoi
                      </h6>
                    )}
                  </div>
                </Row>
                <Row>
                  <h3 style={{ color: "white", fontSize: "55px" }}>
                    Wolne pokoje:
                  </h3>
                </Row>
                <Row style={{ marginBottom: "3%" }}>
                  <Row>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                    >
                      {roomInfo.occupiedRooms.length > 0 ? (
                        roomInfo.occupiedRooms.map((room, index) => (
                          <Badge
                            key={index}
                            bg="success"
                            style={{ fontSize: "1.5em", padding: "0.5em 1em" }}
                          >
                            {room}
                          </Badge>
                        ))
                      ) : (
                        <h6 style={{ color: "white", fontSize: "35px" }}>
                          Brak wolnych pokoi
                        </h6>
                      )}
                    </div>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* <Col sm={4}>{<MyChatbot />}</Col> */}

          <Col sm={4}>{"Miejsce na chat"}</Col>
        </Row>
      </Row>
    </Container>
  );
}

export default MyCalendar;
