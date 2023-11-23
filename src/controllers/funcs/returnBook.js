import { deleteData } from "../firebase/funtions/deleteData";
import { getData } from "../firebase/funtions/getData";
import { updateData } from "../firebase/funtions/updateData";
import { modelBook } from "../firebase/models/modelBooks";
import { modelOrder } from "../firebase/models/modelOrder";
import { modelUser } from "../firebase/models/modelUsers";

export const returnBooks = async (idOrder) => {
  const order = await getData(idOrder, "BooksOrder", modelOrder);
  const user = await getData(order.userId, "Users", modelUser);
  const book = await getData(order.bookId, "Books", modelBook);

  const newStock = book.stock + 1;

  const newBooks = user.books;

  newBooks.pop(book.id);

  await updateData({ stock: newStock }, order.bookId, "Books");
  await updateData({ books: newBooks }, order.userId, "Users");

  await deleteData(order.idOrder, "BooksOrder");
};
