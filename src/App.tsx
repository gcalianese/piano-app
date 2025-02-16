import Keyboard from "./Keyboard/keyboard";

import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
  return (
    <div>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="piano" />} />
            <Route path="/piano" element={<Keyboard />} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}