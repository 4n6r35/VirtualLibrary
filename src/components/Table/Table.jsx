// import { useState, useEffect } from "react";
// import { modelOrder } from "../../controllers/firebase/models/modelOrder";
// import { getCollections } from "../../controllers/firebase/funtions/getCollections";
// import { getData } from "../../controllers/firebase/funtions/getData";
// import { modelBook } from "../../controllers/firebase/models/modelBooks";

// const Tabla = () => {
//   const [datos, setDatos] = useState();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getCollections("BooksOrder", modelOrder);
//         const orderData = await Promise.all(
//           data.map(async(bookName)=>{
//             const name = await getData(bookName.idOrder, "Books", modelBook);
//           })
//         )
//         console.log(data);
//         setDatos(data);
//       } catch (error) {
//         console.error("Error al obtener los datos:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   if (!datos || datos.length === 0) {
//     return <p>No hay datos disponibles</p>;
//   }

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>idBooks</th>
//           <th>idUser</th>
//         </tr>
//       </thead>
//       <tbody>
//         {datos.map((item) => (
//           <tr key={item.idOrder}>
//             <td>{item.bookId}</td>
//             <td>{item.userId}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Tabla;
