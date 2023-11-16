import { fireStore } from "../conection";
import { collection, getDocs } from "firebase/firestore";
//Get Collections
/**
 * @param {string} colection
 * @example await getCollections("Users",model)
 */
export const getCollections = async (colection, model) => {
  const data = await getDocs(
    collection(fireStore, colection).withConverter(model)
  );
  return data.docs.map((doc) => doc.data());
};
