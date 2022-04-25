function SliderItem(props) {
  return (
    <div className="slider-item">
      <img className="slider-item__img" src={props.img} alt="Slider Item" />
      <h3 className="slider-item__title">{props.name}</h3>
      <p className="slider-item__p">{props.lead}</p>
      <button className="slider-item__link">{props.price}</button>
    </div>
  );
}

export default SliderItem;
