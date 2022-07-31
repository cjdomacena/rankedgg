import React from "react";
import { getImageUrl } from "../../../utils";
import { testData } from "../../../utils/testData";

type Props = {};

const DraftLayout = (props: Props) => {

const {draft_timings} = testData;
const img = getImageUrl(null, "/apps/dota2/images/dota_react/heroes/dawnbreaker.png?");

  return (
    <div className="2xl:col-span-7 col-span-8 h-24 2xl:col-start-3 col-start-1  p-4">
      <div className="w-full h-auto  grid place-items-center relative">
        <ul className="steps steps-vertical">
      
          <li data-content={"✕"} className="step step-error">
            Ban 3
          </li>
          <li data-content={"✕"} className="step step-error">
            Ban 4
          </li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
      </div>
    </div>
  );
};

export default DraftLayout;
