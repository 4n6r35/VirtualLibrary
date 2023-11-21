import { useEffect, useState } from "react";

import { useParams,useNavigate } from "react-router-dom";
import { getData } from "../../controllers/firebase/funtions/getData";
import { modelBook } from "../../controllers/firebase/models/modelBooks";
import "./DetailsBook.css";
import Button from "../../components/Button/Button";
import { orderBooks } from "../../controllers/funcs/orderBooks";

const DetailsBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(id, "Books", modelBook);
      const json = localStorage.getItem("user");
      const u = JSON.parse(json);
      // console.log(u);
      setItem(data);
      setUser(u);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleOrder = async () => {
    const response = await orderBooks(user.id, id);

    if (response) {
      setAlert(false);
    } else {
      navigate("/books");
    }
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
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
              <p>{`Stock: ${book.stock}`}</p>
              {!alert ? <p>¡Ya prestaste este libro!</p> : <div></div>}
              <Button text={"Prestar"} onClick={handleOrder} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsBook;
