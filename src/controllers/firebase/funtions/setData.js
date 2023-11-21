import { fireStore } from "../conection";
import { doc, setDoc } from "firebase/firestore";

//Set Data

/**
 *
 * @param {object} data
 * @param {string} id
 * @param {string} collection
 * @example await setData({name: "Uno",age:22},"44824","Books")
 * @returns
 */

export const setData = async (data, id, collection) => {
  try {
    await setDoc(doc(fireStore, collection, id), data);
  } catch (error) {
    console.log(error);
  }
};
