import { Route, Routes } from "react-router-dom";
import Layoute from "../Layoute";
import Home from "../components/Home";
import { DashboardLayout } from "../components/dashboards/DashboardLayout";
import { AddJob } from "../components/dashboards/employer/AddJob";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layoute />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route path="jobs" element={<AddJob/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default index;
