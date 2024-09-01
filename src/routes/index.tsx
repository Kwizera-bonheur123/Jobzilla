import { Route, Routes } from "react-router-dom";
import Layoute from "../Layoute";
import Home from "../components/Home";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layoute />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default index;
