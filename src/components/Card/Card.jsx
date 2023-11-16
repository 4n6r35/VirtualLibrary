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

const Card = ({ title, description, link, text = "Leer", cover }) => {
  return (
    <div className="card">
      <img src={cover} alt="ImgBook" />
      <p className="title">{title}</p>
      <p className="descr">
        <TruncatedText text={description} maxLength={80} />
      </p>
      <a href={`/books/${link}`}>{text}</a>
    </div>
  );
};

export default Card;
