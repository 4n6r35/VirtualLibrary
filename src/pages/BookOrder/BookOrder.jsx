import { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import "./BookOrder.css";
import getOrderBooks from "../../controllers/funcs/getOrderBook";
import Loading from "../../components/Loading/Loading";
import { returnBooks } from "../../controllers/funcs/returnBook";

const BooksOrder = () => {
  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getOrderBooks();
      setBooks(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handle = async (id) => {
    await returnBooks(id)
      .then(() => console.log("Eliminado"))
      .catch((e) => console.log(e));

    fetchData();
  };

  return (
    <div className="books-order">
      <header>
        <h1>Ordenes</h1>
      </header>
      {books ? (
        <Table books={books} buttonBook={(e) => handle(e)} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default BooksOrder;
