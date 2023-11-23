//Borrar documento
import { deleteDoc, doc } from "firebase/firestore";
import { fireStore } from "../conection";

/**
 * @param {key} key
 * @param {string} colection
 * @example await DelData("1jasdh9" , "Users")
 */
export const deleteData = async (key, colection) =>{
    await deleteDoc(doc(fireStore, colection, key));

}