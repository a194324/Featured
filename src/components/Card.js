



function Card(props) {
  const onClickButton = () => {
alert(props.title);
  };


  return(
    <div className="card">
      <div className="zx">
         <img
      src={require('../assets/images/arrivel/prol/' +
        props.image +
        '.jpg')}
      className="img-fluid olp"
      alt={props.title}
    />
        <h3 className="as">{props.title}</h3>
        <div>
          <span>Цена:</span>
          <b className="az"> {props.price}</b>
        </div>
<button type="button" onClick={onClickButton} className=" btn btn-light button">ADD TO CART</button>
      </div>
    </div>
  );
}
export default Card;