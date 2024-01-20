import styles from "./BookingExtra.module.css";
function BookingExtra(props) {
  console.log(props);
  return (
    <div>
      <div className={styles.bookingExtrasStyle}>
        <img
          src={props.bookingExtData.image.src}
          alt="Pokój"
          className={styles.imageStyle}
        />
        <div>
          <div className={styles.row}>
            <h2>{props.bookingExtData.description.title}</h2>
          </div>
          <div>
            <div className={styles.row}>
              <div className={styles.column}>
                {props.bookingExtData.description.priceText}
              </div>
              <div className={styles.column}>
                {props.bookingExtData.description.price} zł
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookingExtra;
