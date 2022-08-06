export type THero = {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: string[];
  img: string;
  icon: string;
  base_health: number;
  base_health_regen: number;
  base_mana: number;
  base_mana_regen: number;
  base_armor: number;
  base_mr: number;
  base_attack_min: number;
  base_attack_max: number;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  attack_range: number;
  projectile_speed: number;
  attack_rate: number;
  move_speed: number;
  turn_rate: null | number;
  cm_enabled: boolean;
  legs: number;
};

export type THeroes = {
  hero: THero[] | null;
};

export type TFilteredHeroes = {
  agility: THero[];
  strength: THero[];
  intelligence: THero[];
};

export type THeroStats = THero & {
  hero_id: number;
  turbo_picks: number;
  turbo_wins: number;
  pro_ban: number;
  pro_win: number;
  pro_pick: number;
  "1_pick": number;
  "1_win": number;
  "2_pick": number;
  "2_win": number;
  "3_pick": number;
  "3_win": number;
  "4_pick": number;
  "4_win": number;
  "5_pick": number;
  "5_win": number;
  "6_pick": number;
  "6_win": number;
  "7_pick": number;
  "7_win": number;
  "8_pick": number;
  "8_win": number;
  null_pick: number;
  null_win: number;
};

export type THeroTrend = {
  id: number;
  name: string;
  localized_name: string;
  icon: string;
  hero_id: number;
  pro_ban: number;
  pro_pick: number;
  pro_win: number;
  pro_wr: number;
  "1_pick": number;
  "1_win": number;
  "1_wr": number;
  "2_pick": number;
  "2_win": number;
  "2_wr": number;
  "3_pick": number;
  "3_win": number;
  "3_wr": number;
  "4_pick": number;
  "4_win": number;
  "4_wr": number;
  "5_pick": number;
  "5_win": number;
  "5_wr": number;
  "6_pick": number;
  "6_win": number;
  "6_wr": number;
  "7_pick": number;
  "7_win": number;
  "7_wr": number;
  "8_pick": number;
  "8_win": number;
  "8_wr": number;
  turbo_picks: number;
  turbo_wins: number;
};

export type TPublicMatches = {
  match_id: number;
  match_seq_num: number;
  radiant_win: boolean;
  start_time: number;
  duration: number;
  avg_mmr: number | null;
  num_mmr: number | null;
  lobby_type: number;
  game_mode: number;
  avg_rank_tier: number;
  num_rank_tier: number;
  cluster: number;
  radiant_team: string;
  dire_team: string;
};
export enum Attributes {
  agi = "Agility",
  str = "Strength",
  int = "Intelligence",
}

export type THeroStat = {
  hasTooltip: boolean;
  tooltipInfo: string;
  title: string;
  value: string | number | JSX.Element;
  id: string;
};

export type THeroAbilities = {
  abilities: string[];
  talents: {
    name: string;
    level: number;
  };
};

export type TAllAbilities = {
  dname: string;
  behavior: string | string[];
  dmg_type: string;
  bkbpierce: string;
  desc: string;
  attrib:
    | {
        key: string;
        header: string;
        value: string[] | string | null;
      }[]
    | [];
  mc: string[] | string | null;
  cd: string | number;
  img: string;
};

export type TProMatch = {
  match_id: number;
  duration: number;
  start_time: number;
  radiant_team_id: number;
  radiant_name: string;
  dire_team_id: number;
  dire_name: string;
  leagueid: number;
  league_name: string;
  series_id: number;
  series_type: number;
  radiant_score: number;
  dire_score: number;
  radiant_win: boolean;
};

export type TAghsShard = {
  hero_name: string;
  hero_id: number;
  has_scepter: boolean;
  scepter_desc: string;
  scepter_skill_name: string;
  scepter_new_skill: boolean;
  has_shard: boolean;
  shard_desc: string;
  shard_skill_name: string;
  shard_new_skill: boolean;
};

export enum BenchMarkType {
  kills,
  deaths,
  tower_damage,
  gold_spent,
  obs_placed,
  gold_per_min,
  assists,
  hero_damage,
}

export type TTeam = {
  team_id: number;
  rating: number;
  wins: number;
  losses: number;
  last_match_time: number;
  name: string;
  tag: string;
  logo_url: string;
};

export type TMatchup = {
  hero_id: number;
  games_played: number;
  wins: number;
};

export type TPlayers = {
  account_id: number | null;
  name: string | null;
  games_played: number | null;
  wins: number | null;
  is_current_team_member: boolean | null;
};

export type TTeamMatches = {
  match_id: number;
  radiant_win: boolean;
  radiant: boolean;
  duration: number;
  start_time: number;
  leagueid: number;
  league_name: string;
  cluster: number;
  opposing_team_id: number;
  opposing_team_name: string;
  opposing_team_logo: string;
};
