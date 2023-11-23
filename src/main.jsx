import ReactDOM from "react-dom/client";
import "./styles.css";
import { RouterMain } from "./router/RouterMain";
import { AuthProvider } from "./context/ctx";

ReactDOM.createRoot(document.getElementById("root")).render(<AuthProvider> <RouterMain /></AuthProvider>);
