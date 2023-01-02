import { createRoot } from "react-dom/client";

const App = () => {
  return <div className="m-2 p-4 text-red-700">React + Vite</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
