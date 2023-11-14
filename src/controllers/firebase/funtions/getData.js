import { fireStore } from "../conection";
import { doc, getDoc } from "firebase/firestore";

//GetData
/**
 *
 * @param {key} id
 * @param {string} collection
 * @param {Class} model
 * @example await getData(12152,"Books",BooksModel)
 */

export const getData = async (id, collection, model) => {
  const docRef = doc(fireStore, collection, id).withConverter(model);
  const docSnap = await getDoc(docRef);
  return docSnap;
};
