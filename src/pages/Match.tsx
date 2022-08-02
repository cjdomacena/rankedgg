import { Outlet } from "react-router-dom";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";

const Match = () => {

  return (
    <PrimaryLayout>
      <PageHeaderBG />
      <Outlet/>
    </PrimaryLayout>
  )

};

export default Match;
