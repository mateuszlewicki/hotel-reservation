function BookingExtra(props) {
  console.log(props);
  return (

<div class="card mb-3  p-0 rounded-0" >
<div class="row g-0">
  <div class="col-md-4">
    <img src={props.bookingExtData.image.src} class="img-fluid" alt="Extras"/>
  </div>
  <div class="col-md-5 d-flex align-items-center">
    <div class="card-body ">
      <h4 class="card-title ">{props.bookingExtData.description.title}</h4>
      <p class="card-text ">{props.bookingExtData.description.priceText} - {props.bookingExtData.description.price} zł</p>
    </div>
  </div>
</div>
</div>

  );
}
export default BookingExtra;
