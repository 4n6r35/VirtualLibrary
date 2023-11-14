// Landing.js

// import Card from "../../components/Card/Card";

import { ViewBooks } from "../../components/ViewBook/ViewBook";
import img from "./../../assets/book.png";
import "./Landing.css";

const book = [
  {
    title: "El Principito",
    description:
      "La historia de un joven príncipe que viaja por varios planetas.",
    link: "/login",
    cover: "https://imagessl2.casadellibro.com/a/l/s5/92/9788419087492.webp",
  },
  {
    title: "Cien años de soledad",
    description:
      "La saga de la familia Buendía en el ficticio pueblo de Macondo.",

    link: "/login",
    cover: "https://centrogabo.org/sites/default/files/100_anos_172.jpg",
  },
  {
    title: "1984",
    description:
      "Un mundo distópico donde el control gubernamental es omnipresente.",
    link: "/login",
    cover:
      "https://assets-global.website-files.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg",
  },
];

const Landing = () => {
  return (
    <div className="landing-container">
      <header>
        <h1>Biblioteca Virtual </h1>
      </header>
      <div className="intro-section">
        <div className="ps">
          <p>
            ¡Bienvenido a nuestra Biblioteca Digital, donde la exploración y el
            descubrimiento se encuentran al alcance de tus manos! Sumérgete en
            un universo de sabiduría infinita mientras te aventuras a través de
            nuestra amplia colección de libros. Nuestra plataforma te ofrece una
            puerta de entrada a un océano de conocimiento, donde cada página es
            un nuevo horizonte por descubrir. Ya sea que busques aventurarte en
            historias fascinantes, aprender nuevas habilidades o explorar
            teorías innovadoras, aquí encontrarás la llave que abrirá las
            puertas a un mundo de posibilidades. ¡Embarca en tu viaje hacia la
            sabiduría y desbloquea el potencial de tu mente!
          </p>

          <img src={img} className="book" alt="book" />
        </div>
        <a href="/login">Comienza tu aventura literaria</a>
      </div>

      <ViewBooks books={book} />
    </div>
  );
};

export default Landing;
