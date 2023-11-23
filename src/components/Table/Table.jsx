/* eslint-disable react/prop-types */

import Button from "../Button/Button";
import "./Table.css";
import { useState, useEffect } from "react";

const Table = ({ books, buttonBook }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    function onEffect() {
      const json = localStorage.getItem("user");
      const u = JSON.parse(json);
      setUser(u);
    }
    onEffect();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Cover</th>
          <th>Book</th>
          {user?.typeUser ? <th>Email</th> : <div></div>}
          {user?.typeUser ? <th>Username</th> : <div></div>}

          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {books.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>
              <img className="cover" src={item.book.cover} alt="book" />
            </td>
            <td>
              <p>{item.book.title}</p>
            </td>

            {user?.typeUser ? (
              <td>
                <p>{item.user?.email}</p>
              </td>
            ) : (
              <div></div>
            )}
            {user?.typeUser ? (
              <td>
                <p>{item.user?.username}</p>
              </td>
            ) : (
              <div></div>
            )}

            <td>
              <Button text="Devolver" onClick={() => buttonBook(item.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
