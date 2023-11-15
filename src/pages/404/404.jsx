import "./404.css";

import logo from "./../../assets/logo.svg";

const Error404 = () => {
  return (
    <div className={"page-404"}>
      <div className={"circle"}></div>
      <div className={"content-404"}>
        <img src={logo} alt="logo" className={"logo-404"} />
        <h1 className={"text-404"}>404</h1>
      </div>
    </div>
  );
};

export default Error404;
