import {Unit} from "./unit";

export class ArmyList {
    Name: string;
    HQ: Unit[];
    Troops: Unit[];
    Elites: Unit[];
    FastAttack: Unit[];
    HeavySupport: Unit[];
    Transports: Unit[];
    LordOfWar: Unit[];
    Fliers: Unit[];
    Fortifications: Unit[];
    
    constructor() {
        this.HQ = [];
        this.Troops = [];
        this.Elites = [];
        this.FastAttack = [];
        this.HeavySupport = [];
        this.Transports = [];
        this.LordOfWar = [];
        this.Fliers = [];
        this.Fortifications = [];
    }
}
