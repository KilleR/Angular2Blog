import {ArmyList} from "./army-builder/army-list";

export class TauArmyList extends ArmyList {
    constructor() {
        super();
        this.Name = "Tau";
        this.HQ = [
            {
                name: "Commander",
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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
                type: "hq",
                cost: 0,
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

        ];
        this.Elites = [

        ];
        this.FastAttack = [

        ];
        this.HeavySupport = [

        ];
        this.Transport = [

        ];
        this.LordOfWar = [

        ];
        this.Fliers = [

        ];
        this.Fortifications = [

        ];
    }
}
