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
  cm_enabled: true;
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

export type THeroStats = {
  id: number,
  name: string,
  localized_name: string,
  img: string,
  icon: string,
  pro_win: number,
  pro_pick: number,
  hero_id: number,
  pro_ban: number,
  herald_pick: number,
  herald_win: number,
  guardian_pick: number,
  guardian_win: number,
  crusader_pick: number,
  crusader_win: number,
  archon_pick: number,
  archon_win: number,
  legend_pick: number,
  legend_win: number,
  ancient_pick: number,
  ancient_win: number,
  divine_pick: number,
  divine_win: number,
  immortal_pick: number,
  immortal_win: number,
  turbo_pick: number,
  turbo_win: number,
};
