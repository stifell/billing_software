import { Routes, Route } from "react-router-dom";
import Menubar from "./components/Menubar/Menubar";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageCategories from "./pages/ManageCategories/ManageCategories";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import ManageItems from "./pages/ManageItems/ManageItems";
import Explore from "./pages/Explore/Explore";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Menubar />
      {/* <Toaster /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/category" element={<ManageCategories />} />
        <Route path="/users" element={<ManageUsers />} />
        <Route path="/items" element={<ManageItems />} />
      </Routes>
    </div>
  );
}

export default App;