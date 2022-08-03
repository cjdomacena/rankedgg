import React, { useId, useState } from "react";
import { useGetTeams } from "../api";
import PageHeader from "../components/Header/PageHeader";
import PageHeaderBG from "../components/Header/PageHeaderBG";
import ShowingCount from "../components/Header/ShowingCount";
import PrimaryLayout from "../components/Layouts/PrimaryLayout";
import TeamCard from "../components/Teams/TeamCard";
import ShowMore from "../components/Utilility/ShowMore";
import TeamLoading from "../components/Utilility/TeamLoading";

type Props = {};

const Teams = (props: Props) => {
  const { data: teams, status } = useGetTeams();
  const uid = useId();

  const [show, setShow] = useState<number>(15);

  switch (status) {
    case "success": {
      return (
        <PrimaryLayout>
          <PageHeaderBG />
          <div className="container mx-auto my-8 p-8">
            <div className="flex justify-between flex-wrap mb-12 gap-4">
              <div className="">
                <PageHeader icon={<></>} title={"Top Teams"} />
                <p className="badge">Top 100</p>
              </div>
              <ShowingCount show={show} setShow={setShow} total={teams.length} />
            </div>
            <div className="mt-4 grid grid-cols-[repeat(auto-fill,minmax(min(100%,258px),1fr))] gap-12">
              {teams.slice(0, show).map((team, index) => (
                <TeamCard team={team} key={`${uid}-${team.team_id}-${index}`} index={index} />
              ))}
            </div>
            <div className="mt-8">
              <ShowMore total={teams.length} increment={10} show={show} setShow={setShow} />
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    case "loading": {
      return (
        <PrimaryLayout>
          <PageHeaderBG />
          <div className="container mx-auto my-8 p-8">
            <div className="mb-12">
              <PageHeader icon={<></>} title={"Top Teams"} />
              <p className="badge">Top 100</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,258px),1fr))] gap-4 ">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => (
                <TeamLoading key={`${uid}-${t}`} />
              ))}
            </div>
          </div>
        </PrimaryLayout>
      );
    }
    default: {
      return (
        <PrimaryLayout>
          <PageHeaderBG />
          <div className="container mx-auto my-8 p-8">
            <div className="mb-12">
              <PageHeader icon={<></>} title={"Top Teams"} />
              <p className="badge">Top 100</p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,258px),1fr))] gap-4 ">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((t) => (
                <TeamLoading key={`${uid}-${t}`} />
              ))}
            </div>
          </div>
        </PrimaryLayout>
      );
    }
  }
};

export default Teams;
