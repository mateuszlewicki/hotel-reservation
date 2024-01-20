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
    // <div className={styles.roomStyle}>
    //   <img
    //     src={props.roomData.image.src}
    //     alt="Pokój"
    //     className={styles.imageStyle}
    //   />
    //   <div className={styles.descriptionStyle}>
    //     <h2>{props.roomData.description.title}</h2>
    //     <ul>{generateLiElements(props.roomData.description.listItems)}</ul>
    //   </div>
    // </div> /*}
    <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src={props.roomData.image.src} class="img-fluid rounded-start" alt="Pokój"/>
      </div>
      <div class="col-md-8">
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
