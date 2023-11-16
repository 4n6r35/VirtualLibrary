import { useState } from "react";
import { ViewBooks } from "../../components/ViewBook/ViewBook";
import { useEffect } from "react";
import { modelBookModel } from "../../controllers/firebase/models/modelBooks";
import { getCollections } from "../../controllers/firebase/funtions/getCollections";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollections("Books", modelBookModel);
      console.log(data);
      setBooks(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <ViewBooks books={books} />
      </div>
    </div>
  );
};

export default Books;
