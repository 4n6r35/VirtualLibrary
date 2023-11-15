/* eslint-disable react/prop-types */

import "./Card.css";

const Card = ({ title, description, link, text = "Leer", cover }) => (
  <div className="card">
    <img src={cover} alt="ImgBook" />
    <p className="title">{title}</p>
    <p className="descr">{description}</p>
    <a href={link}>{text}</a>
  </div>
);

export default Card;
