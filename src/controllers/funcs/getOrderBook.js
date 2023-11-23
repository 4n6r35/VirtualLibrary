/* eslint-disable no-async-promise-executor */
import { getCollections } from "../firebase/funtions/getCollections";
import { getData } from "../firebase/funtions/getData";
import { modelBook } from "../firebase/models/modelBooks";
import { modelOrder } from "../firebase/models/modelOrder";
import { modelUser } from "../firebase/models/modelUsers";

const getOrderBooks = async () => {
  const json = localStorage.getItem("user");
  const user = JSON.parse(json);

  const books = await getCollections("BooksOrder", modelOrder);
  if (user.typeUser) {
    const result = books.map(
      (item) =>
        new Promise(async (resolve) => {
          const book = await getData(item.bookId, "Books", modelBook);
          const user = await getData(item.userId, "Users", modelUser);

          return resolve({
            id: item.idOrder,
            book: {
              title: book.title,
              cover: book.cover,
            },
            user: {
              email: user.email,
              username: user.username,
            },
          });
        })
    );

    return await Promise.all(result);
  } else {
    const result = books
      .filter((x) => x.userId === user.id)
      .map(
        (item) =>
          new Promise(async (resolve) => {
            const book = await getData(item.bookId, "Books", modelBook);
            return resolve({
              id: item.idOrder,
              book: {
                title: book.title,
                cover: book.cover,
              },
            });
          })
      );

    return await Promise.all(result);
  }
};

export default getOrderBooks;
