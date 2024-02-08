import styles from "./Room.module.css";
function Room(props) {
  console.log(props.roomData);
  function generateLiElements(liStrings) {
    let liElemts = [];
    let fakeKey = 1;
    console.log(liStrings);
    liStrings.forEach((x) => {
      liElemts.push(<li key={fakeKey}>{x}</li>);
      fakeKey++;
    });
    return liElemts;
  }
  return (
    <div class="card mb-3  p-0 rounded-0" >
    <div class="row g-0 ">
      <div class="col-md-6 ">
        <img src={props.roomData.image.src} class="img-fluid  " alt="Pokój"/>
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <div class="card-body">
          <h5 class="card-title">{props.roomData.description.title}</h5>
          <p class="card-text">{generateLiElements(props.roomData.description.listItems)}</p>
        </div>
      </div>
    </div>
  </div>
  );
}
export default Room;
