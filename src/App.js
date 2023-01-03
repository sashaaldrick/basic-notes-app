import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Notes from "./pages/Notes";
import Note from "./pages/Note";

import "./App.css";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<h2> Head to /notes to see that sweet app </h2>}
          />
          <Route path="/notes" element={<Notes />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
