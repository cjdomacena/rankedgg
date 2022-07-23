import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full h-auto p-4 bg-accent/20">
      <div className="text-neutral-400 text-center text-xs">
        <div className="space-y-1">
          <p>
            Dota 2, and the Dota 2 logo are registered trademarks of{" "}
            <a
              href="https://www.valvesoftware.com/en/"
              className="underline"
              referrerPolicy="no-referrer">
              Valve Corporation.
            </a>
          </p>
          <div>
            <span>
              Developed with ❤️ by{" "}
              <a href="https://christian-domacena.netlify.app/" className="underline">
                cjdomacena
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;