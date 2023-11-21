import { fireStore } from "../conection";
import { doc, setDoc } from "firebase/firestore";

/**
 * @param {object} data
 * @param {key} id
 * @param {string} colection
 * @example await updateData({name:"Jhon Vazquez"} , "1hasdj", "Users")
 */
export const updateData = async (data, id, colection) => {
  const dataRef = await doc(fireStore, colection, id);
  await setDoc(dataRef, data, { merge: true });
};
