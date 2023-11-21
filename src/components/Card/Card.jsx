/* eslint-disable react/prop-types */
import "./Card.css";

const TruncatedText = ({ text, maxLength }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  return <>{truncateText(text, maxLength)}</>;
};

const Card = ({ title, description, link, text = "Leer", cover, typeUser }) => {
  return (
    <div className="card">
      {/* <p className="title">{stock}</p> */}
      <img src={cover} alt="ImgBook" />
      <p className="title">{title}</p>
      <p className="descr">
        <TruncatedText text={description} maxLength={80} />
      </p>
      <a href={`/books/${link}`}>{text}</a>
      {typeUser ? <a href={`/books/update/${link}`}>Editar</a> : <div></div>}
    </div>
  );
};

export default Card;
