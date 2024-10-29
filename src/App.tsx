import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar.tsx";
import { Route, Routes } from "react-router-dom";
import ContentPage from "./containers/ContentPage/ContentPage.tsx";

function App() {
  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4 p-4 ">
        <Routes>
          <Route path="/" element={<ContentPage />} />
          <Route path="/pages" element={<ContentPage />} />
          <Route path={`/pages/:pageName`} element={<ContentPage />} />
          <Route
            path="*"
            element={<h1 className="text-center mt-5">Not found</h1>}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
