import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import Patients from "./pages/Patients";
import Schedule from "./pages/Schedule";
import Message from "./pages/Message";
import Transaction from "./pages/Transaction";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="patients" element={<Patients />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="message" element={<Message />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
