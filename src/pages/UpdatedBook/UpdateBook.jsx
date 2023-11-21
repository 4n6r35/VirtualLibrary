import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";


//Firebase
import { updateData } from "../../controllers/firebase/funtions/updateData";
import { getData } from "../../controllers/firebase/funtions/getData";
import { modelBook } from "../../controllers/firebase/models/modelBooks";

import "./UpdateBook.css";
const UpdateBook = () => {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [stock, setStock] = useState(0);
  const [link, setLink] = useState();
  const [cover, setCover] = useState();

  const [stateView, setStateView] = useState(false);
  const navigate = useNavigate();

  const changeImage = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setCover(e.target.result);
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(id, "Books", modelBook);
      setCover(data.cover);
      setDescription(data.description);
      setTitle(data.title);
      setLink(data.link);
      setStock(data.stock);
    };

    fetchData();
  }, [id]);

  const previewClick = () => {
    if ((title != "") & (description != "") & (link != "") & (cover != "")) {
      setStateView(!stateView);
    } else {
      alert("Rellene los campos");
    }
  };

  const uploadClick = async () => {
    const data = {
      title: title,
      description: description,
      link: link,
      cover: cover,
      stock: stock,
    };

    console.log(data);
    await updateData(data, id, "Books");
    alert("se actualizo con exito");
    cancelar();
  };

  const cancelar = () => {
    setCover("");
    setLink("");
    setDescription("");
    setTitle("");
    setStateView(!stateView);
    navigate("/books")
  };
  return (
    <div className="upload-page">
      <div className="upload-content">
        {!stateView ? (
          <div>
            <TextInput
              type="text"
              title="Título"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <TextInput
              type="text"
              title="Descripcion"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextInput
              type="number"
              title="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

            <TextInput
              type="text"
              title="Enlace"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />

            <input
              type="file"
              className="file-upload"
              onChange={(e) => changeImage(e)}
            />

            <div className={"buttons"}>
              <Button onClick={previewClick} text="Preview" />
            </div>
          </div>
        ) : (
          <div className="preview">
            <Card
              description={description}
              link={link}
              title={title}
              cover={cover}
            />
            <div className={"buttons"}>
              <Button onClick={uploadClick} text="Actualizar Libro" />
              <div className={"spacer"}></div>
              <Button onClick={cancelar} text="Cancelar" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UpdateBook;
