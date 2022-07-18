import { FiTrendingUp } from "react-icons/fi";
import { useHeroStats } from "../api";
import Table from "../components/Table/Table";
type Props = {};

const TrendingHeroes = (props: Props) => {
  // const {data:heroes, isLoading, isFetched, isError} = useHeroStats();

  return (
    <section className="p-8 h-full w-full text-neutral-300 font-noto-sans">
      <div className="mx-auto container">
        <h1 className="text-2xl font-bold tracking-wide text-white flex items-center">
          <FiTrendingUp className="w-6 h-6 mr-2" />
          Trending Heroes
        </h1>
        <div className="my-12 text-neutral-300  w-full overflow-x-auto">
          <Table
            isLoading={false}
            heroStats={[
              {
                id: 2,
                name: "npc_dota_hero_axe",
                localized_name: "Axe",
                primary_attr: "str",
                attack_type: "Melee",
                roles: ["Initiator", "Durable", "Disabler", "Jungler", "Carry"],
                img: "/apps/dota2/images/dota_react/heroes/axe.png?",
                icon: "/apps/dota2/images/dota_react/heroes/icons/axe.png?",
                base_health: 200,
                base_health_regen: 2.75,
                base_mana: 75,
                base_mana_regen: 0,
                base_armor: -1,
                base_mr: 25,
                base_attack_min: 27,
                base_attack_max: 31,
                base_str: 25,
                base_agi: 20,
                base_int: 18,
                str_gain: 3.4,
                agi_gain: 2.2,
                int_gain: 1.6,
                attack_range: 150,
                projectile_speed: 900,
                attack_rate: 1.7,
                move_speed: 310,
                turn_rate: null,
                cm_enabled: true,
                legs: 2,
                hero_id: 2,
                turbo_picks: 319358,
                turbo_wins: 172573,
                pro_ban: 33,
                pro_win: 28,
                pro_pick: 56,
                "1_pick": 41185,
                "1_win": 22958,
                "2_pick": 60684,
                "2_win": 32906,
                "3_pick": 57065,
                "3_win": 30593,
                "4_pick": 40662,
                "4_win": 21238,
                "5_pick": 21628,
                "5_win": 11149,
                "6_pick": 9530,
                "6_win": 4923,
                "7_pick": 4301,
                "7_win": 2140,
                "8_pick": 1135,
                "8_win": 539,
                null_pick: 2148585,
                null_win: 0,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default TrendingHeroes;
