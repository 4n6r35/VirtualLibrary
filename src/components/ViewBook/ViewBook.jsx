/* eslint-disable react/prop-types */
import Card from "../Card/Card";

import "./ViewBook.css";

export const ViewBooks = ({ books = [] }) => {
  return (
    <div>
      {/* <p>Nuestros libros</p> */}
      <div className="view-books">
        {books.map((item) => {
          return (
            <Card
              key={item.title} // Se recomienda usar una clave única en cada iteración
              link={item.link}
              cover={item.cover}
              description={item.description}
              title={item.title}
              text="Leer"
            />
          );
        })}
      </div>
    </div>
  );
};
