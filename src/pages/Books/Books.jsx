import { useState, useEffect } from "react";
import { ViewBooks } from "../../components/ViewBook/ViewBook";
import { modelBook } from "../../controllers/firebase/models/modelBooks";
import { getCollections } from "../../controllers/firebase/funtions/getCollections";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const json = localStorage.getItem("user");
      const u = JSON.parse(json);
      setUser(u);
      const data = await getCollections("Books", modelBook);
      // console.log(data);
      setBooks(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <ViewBooks books={books} typeUser={user?.typeUser || false} />
      </div>
    </div>
  );
};

export default Books;
