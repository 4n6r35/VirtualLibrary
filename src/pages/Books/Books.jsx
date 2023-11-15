import { useState } from "react";
import { ViewBooks } from "../../components/ViewBook/ViewBook";

const Books = () => {
  //   const [books, setBooks] = useState([]);

  const books = [
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
    {
      title: "Orgullo y Prejuicio",
      description:
        "La historia de amor y malentendidos en la Inglaterra del siglo XIX.",
      link: "/login",
      cover:
        "https://biblioteca.ucab.edu.ve/wp-content/uploads/sites/13/2019/04/71EEWVApVZL.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      description:
        "Una novela sobre el racismo y la injusticia en el sur de Estados Unidos.",
      link: "/login",
      cover:
        "https://epqkkxb65h3.exactdn.com/wp-content/uploads/2023/02/m-2908.jpg?strip=all&lossy=1&resize=430%2C600&ssl=1",
    },
    {
      title: "El señor de los anillos",
      description:
        "Una épica aventura en un mundo de fantasía llamado Tierra Media.",
      link: "/login",
      cover:
        "https://www.planetadelibros.com.co/usuaris/libros/fotos/365/m_libros/364925_portada_el-senor-de-los-anillos-n-0203-las-dos-torres-ne_j-r-r-tolkien_202203111314.jpg",
    },
    {
      title: "Harry Potter y la piedra filosofal",
      description:
        "El inicio de la saga del joven mago en el mundo de la magia.",
      link: "/login",
      cover:
        "https://catalogue.immateriel.fr/resources/8d/24/e453d3ed042ea1363a0e904c69e47ab26c5815f46c7ffd9d7b5a37cb2a35.jpg",
    },
    {
      title: "La sombra del viento",
      description:
        "Un misterio literario ambientado en la Barcelona de la posguerra.",
      link: "/login",
      cover:
        "https://agora.xtec.cat/iescabanyes/wp-content/uploads/usu559/2019/01/sombradelviento.jpg",
    },
    {
      title: "Don Quijote de la Mancha",
      description:
        "Las aventuras del ingenioso hidalgo en la España del siglo XVII.",
      link: "/login",
      cover:
        "https://static.wixstatic.com/media/e152cd_4e40af1f12cf40c98c1103d1fb8d6838~mv2.webp",
    },
  ];

  return (
    <div>
      <div>
        <ViewBooks books={books} />
      </div>
    </div>
  );
};

export default Books;
