export class Detachment {
    Name: string;
    CP: number;
    HQ: {
        min: number;
        max: number;
    };
    Troops: {
        min: number;
        max: number;
    };
    Elites: {
        min: number;
        max: number;
    };
    FastAttack: {
        min: number;
        max: number;
    };
    HeavySupport: {
        min: number;
        max: number;
    };
    Transport: {
        min: number;
        max: number;
    };
    LordOfWar: {
        min: number;
        max: number;
    };
    Fliers: {
        min: number;
        max: number;
    };
    Fortifications: {
        min: number;
        max: number;
    };

    constructor() {
        this.HQ = {
            min: 0,
            max: 0
        };
        this.Troops = {
            min: 0,
            max: 0
        };
        this.Elites = {
            min: 0,
            max: 0
        };
        this.FastAttack = {
            min: 0,
            max: 0
        };
        this.HeavySupport = {
            min: 0,
            max: 0
        };
        this.Transport = {
            min: 0,
            max: 0
        };
        this.LordOfWar = {
            min: 0,
            max: 0
        };
        this.Fliers = {
            min: 0,
            max: 0
        };
        this.Fortifications = {
            min: 0,
            max: 0
        };
    }
}
