import { FaCoins } from "react-icons/fa";
import { GiShatteredSword } from "react-icons/gi";
import { getHeroLevel, getImageUrl } from "../../../utils";

type Props = {
  player: any;
};

const PlayerMatchInfo = ({ player }: Props) => {
  const t = getImageUrl;
  const level = getHeroLevel;
  return (
    <div
      className="p-4 bg-black/30 w-full flex gap-4 items-center rounded min-w-[150px]"
      key={player.account_id}>
      <div>
        <img
          src={t(player.hero_id, "")}
          className={`w-8 h-8 ${player.isRadiant ? "custom-shadow-radiant" : "custom-shadow"}`}
        />
        <div className="text-xs mt-2 text-center w-fit mx-auto">
          {player.xp_t ? level(player.xp_t[player.xp_t.length - 1]) : null}
        </div>
      </div>
      <div className="space-y-0.5">
        <h4>
          {player.name ? (
            player.name
          ) : player.personaname ? (
            player.personaname
          ) : (
            <span className="text-2xs text-gray-400">Name not Available</span>
          )}
        </h4>
        <div className="text-xs flex items-center tooltip" data-tip="K/D/A">
          <p>
            {player.kills}/{player.deaths}/{player.assists}
          </p>
        </div>
        <div className="pt-2 flex items-center gap-2">
          <p className="flex items-center text-xs tooltip" data-tip="Hero Damage">
            <GiShatteredSword className="w-4 h-4 mr-1" />
            {new Intl.NumberFormat("en-US").format(Number(player.hero_damage ?? 0))}
          </p>
          <div className="flex items-center text-xs tooltip" data-tip="Net Worth">
            <FaCoins className="mr-2" />
            {new Intl.NumberFormat("en-US").format(Number(player.net_worth ?? 0))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMatchInfo;
