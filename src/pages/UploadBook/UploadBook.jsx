import { useState } from "react";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

import "./UploadBook.css";

const UploadBook = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [cover, setCover] = useState("");

  const changeImage = (e) => {
    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setCover(e.target.result);
      // onImage();
    };
  };

  const uploadClick = () => {
    console.log({ title, description, link, cover });
  };
  return (
    <div className="upload-page">
      <div className="upload-content">
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
        <div>
          <TextInput
            type="text"
            title="Enlace"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <input type="file" onChange={(e) => changeImage(e)} />

        <div className={"buttons"}>
          {/* <Button onClick={uploadClick} text="Subir Libro" /> */}
          <Button onClick={uploadClick} text="Preview" />
        </div>
      </div>
    </div>
  );
};
export default UploadBook;
