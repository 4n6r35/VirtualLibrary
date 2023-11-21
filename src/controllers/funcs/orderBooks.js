import { getData } from "../firebase/funtions/getData";
import { setData } from "../firebase/funtions/setData";
import { updateData } from "../firebase/funtions/updateData";
import { modelBook } from "../firebase/models/modelBooks";
import { modelUser } from "../firebase/models/modelUsers";

export const orderBooks = async (userId, bookId) => {
  const user = await getData(userId, "Users", modelUser);
  const book = await getData(bookId, "Books", modelBook);

  const date = new Date();
  const id = date.getTime();
  const data = {
    idOrder: id.toString(),
    userId: userId,
    bookId: bookId,
  };
  const orderBoooksUser = user.books;

  if (user.books.includes(bookId)) {
    return true;
  } else {
    orderBoooksUser.push(book.id.toString());
    const newUserData = {
      books: orderBoooksUser,
    };
    const newStock = book.stock - 1;
    await setData(data, id.toString(), "BooksOrder").then(() =>
      console.log("Successful Order")
    );
    await updateData({ stock: newStock }, bookId, "Books");
    await updateData(newUserData, userId, "Users")
      .then(() => console.log("Success"))
      .catch((e) => {
        console.log(e);
      });
  }
};
