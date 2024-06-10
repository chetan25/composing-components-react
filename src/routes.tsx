import { Route, Routes } from "react-router-dom";
import CardBasic from "./pages/basic";
import CardProps from "./pages/props";
import CardChildren from "./pages/children";
import Home from "./pages/home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="basic" element={<CardBasic />} />
        <Route path="props" element={<CardProps />} />
        <Route path="children" element={<CardChildren />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
