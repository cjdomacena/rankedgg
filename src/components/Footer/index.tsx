import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-auto p-4 bg-[#0a0f1c] text-gray-300 ">
      <div className="text-neutral-400 text-center text-xs ">
        <div className="space-y-1 text-2xs">
          <p>
            Dota 2, and the Dota 2 logo are registered trademarks of{" "}
            <a
              href="https://www.valvesoftware.com/en/"
              className="underline"
              referrerPolicy="no-referrer"
            >
              Valve Corporation.
            </a>
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://www.opendota.com/"
              className="underline"
              referrerPolicy="no-referrer"
            >
              OpenDota API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
