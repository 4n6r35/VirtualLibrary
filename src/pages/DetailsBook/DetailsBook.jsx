import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../controllers/firebase/funtions/getData";
import { modelBookModel } from "../../controllers/firebase/models/modelBooks";
import "./DetailsBook.css";
import Button from "../../components/Button/Button";

const DetailsBook = () => {
  const { id } = useParams();
  const [book, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(id, "Books", modelBookModel);
      setItem(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="book-page">
      {book && (
        <div className="book-detail-container">
          <div className="book-image">
            <img className={"cover"} src={book.cover} alt={book.title} />
          </div>
          <div className="book-info">
            <p className={"title"}>{book.title}</p>
            <p className={"descr"}>{book.description}</p>

            <div className={"buttons"}>
              <Button text={"Prestar"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBook;
