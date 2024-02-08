import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyCalendar from "./components/Calendar/MyCalendar";
import Rooms from "./components/Rooms/Rooms";
import BookingExtras from "./components/BookingExtras/BookingExtras";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={content} />
        <Route path="/kalendarz" element={calendar} />
        <Route path="/pokoje" element={rooms} />
        <Route path="/dodatki" element={bookingExtras} />

        {/* <Route path='/pokoje'>
    
        </Route>
        <Route path='/dodatki'>
    
        </Route> */}
      </Routes>
    </Router>
  );
}
const content = <Header />;
const calendar = (
  <>
    <Header />
    <MyCalendar />
  </>
);
const bookingExtras = (
  <>
    <Header />
    <BookingExtras />
  </>
);
const rooms = (
  <>
    <Header />
    <Rooms />
  </>
);

export default App;
