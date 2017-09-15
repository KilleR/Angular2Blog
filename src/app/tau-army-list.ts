import {ArmyList} from "./army-list";

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
