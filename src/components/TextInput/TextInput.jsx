import "./TextInput.css";

const TextInput = ({ type = "text", value, onChange, title }) => {
  return (
    <>
      <div className={"form-group"}>
        <label className={"title-input"}>{title}</label>
        <input
          type={type}
          className={"text-input"}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default TextInput;
