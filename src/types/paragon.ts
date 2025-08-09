interface ParagonAttack {
    name: string;
    base?: number;
    ceramic?: number;
    fortified?: number;
    camo?: number;
    moab?: number;
    boss?: number;
    eliteBoss?: number;
    pierce?: number;
    speed?: number;
}

export interface Paragon {
    name: string;
    price: number;
    image: string;
    attacks: ParagonAttack[];
    cooldown?: number;
}
