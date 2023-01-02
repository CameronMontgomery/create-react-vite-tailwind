import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div className="p-4 text-red-700 m-2">
      React + Vite
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
