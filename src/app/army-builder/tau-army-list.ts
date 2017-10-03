import {ArmyList} from "./army-list";

export class TauArmyList extends ArmyList {
    constructor() {
        super();
        this.Name = "Tau";
        this.HQ = [
            {
                name: "Commander",
                role: "hq",
                cost: 76,
                power: 6,
                movement: 8,
                ws: 3,
                bs: 2,
                strength: 5,
                toughness: 5,
                wounds: 6,
                attacks: 4,
                leadership: 9,
                save: 3
            },
            {
                name: "Coldstar Commander",
                role: "hq",
                cost: 90,
                power: 7,
                movement: 20,
                ws: 3,
                bs: 2,
                strength: 5,
                toughness: 5,
                wounds: 6,
                attacks: 4,
                leadership: 9,
                save: 3
            },
            {
                name: "Ethereal",
                role: "hq",
                cost: 45,
                power: 2,
                movement: 6,
                ws: 3,
                bs: 4,
                strength: 3,
                toughness: 3,
                wounds: 4,
                attacks: 3,
                leadership: 9,
                save: 5
            },
            {
                name: "Cadre Fireblade",
                role: "hq",
                cost: 39,
                power: 2,
                movement: 6,
                ws: 3,
                bs: 2,
                strength: 3,
                toughness: 3,
                wounds: 5,
                attacks: 3,
                leadership: 8,
                save: 4
            },
            {
                name: "Commander Farsight",
                role: "hq",
                cost: 151,
                power: 8,
                movement: 8,
                ws: 2,
                bs: 2,
                strength: 5,
                toughness: 5,
                wounds: 6,
                attacks: 4,
                leadership: 9,
                save: 3
            },
            {
                name: "Commander Shadowsun",
                role: "hq",
                cost: 167,
                power: 9,
                movement: 8,
                ws: 3,
                bs: 2,
                strength: 4,
                toughness: 4,
                wounds: 5,
                attacks: 4,
                leadership: 9,
                save: 3
            },
            {
                name: "Aun'Shi",
                role: "hq",
                cost: 68,
                power: 4,
                movement: 6,
                ws: 2,
                bs: 4,
                strength: 3,
                toughness: 3,
                wounds: 5,
                attacks: 5,
                leadership: 9,
                save: 0
            },
            {
                name: "Aun'Va",
                role: "hq",
                cost: 65,
                power: 4,
                movement: 6,
                ws: 6,
                bs: 24,
                strength: 2,
                toughness: 3,
                wounds: 6,
                attacks: 1,
                leadership: 9,
                save: 5
            },
            {
                name: "Darkstrider",
                role: "hq",
                cost: 45,
                power: 3,
                movement: 8,
                ws: 3,
                bs: 2,
                strength: 5,
                toughness: 5,
                wounds: 6,
                attacks: 4,
                leadership: 9,
                save: 3
            },
        ];
        this.Troops = [
            {
                name: "Strike Team",
                role: "troops",
                cost: 0,
                power: 3,
                movement: 6,
                ws: 5,
                bs: 4,
                strength: 3,
                toughness: 3,
                wounds: 1,
                attacks: 1,
                leadership: 6,
                save: 4
            },
            {
                name: "Breacher Team",
                role: "troops",
                cost: 0,
                power: 3,
                movement: 6,
                ws: 5,
                bs: 4,
                strength: 3,
                toughness: 3,
                wounds: 1,
                attacks: 1,
                leadership: 6,
                save: 4
            }
        ];
        this.Elites = [

        ];
        this.FastAttack = [

        ];
        this.HeavySupport = [

        ];
        this.Transports = [

        ];
        this.LordOfWar = [

        ];
        this.Fliers = [

        ];
        this.Fortifications = [

        ];
    }
}
