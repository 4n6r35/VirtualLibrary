import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

import "./UploadBook.css";
import Card from "../../components/Card/Card";
import { setData } from "../../controllers/firebase/funtions/setData";

const UploadBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [cover, setCover] = useState("");

  const [state, setState] = useState(false);
  const [stateView, setStateView] = useState(false);

  const changeImage = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setCover(e.target.result);
    };
  };

  const previewClick = () => {
    if ((title != "") & (description != "") & (link != "") & (cover != "")) {
      setStateView(!stateView);
    } else {
      alert("Rellene los campos");
    }
  };

  const uploadClick = async () => {
    const date = new Date();
    const id = date.getTime();
    const data = {
      id: id,
      title: title,
      description: description,
      link: link,
      cover: cover,
    };

    console.log(data);
    await setData(data, id.toString(), "Books");
    alert("se agrego con exito");
    cancelar();
  };

  const cancelar = () => {
    setCover("");
    setLink("");
    setDescription("");
    setTitle("");

    setStateView(!stateView);
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
              <Button onClick={uploadClick} text="Subir Libro" />
              <div className={"spacer"}></div>
              <Button onClick={cancelar} text="Cancelar" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default UploadBook;
