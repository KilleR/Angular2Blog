import {ArmyList} from "./army-list";
import {Unit, UnitDataSource} from "./unit";

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
                models: [{
                    name: "Commmander",
                    cost: 76,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 8,
                    ws: 3,
                    bs: 2,
                    strength: 5,
                    toughness: 5,
                    wounds: 6,
                    attacks: 4,
                    leadership: 9,
                    save: 3
                }],
                dataSource: null
            },
            {
                name: "Coldstar Commander",
                role: "hq",
                cost: 90,
                power: 7,
                models: [{
                    name: "Commander",
                    cost: 90,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 20,
                    ws: 3,
                    bs: 2,
                    strength: 5,
                    toughness: 5,
                    wounds: 6,
                    attacks: 4,
                    leadership: 9,
                    save: 3
                }],
                dataSource: null
            },
            {
                name: "Ethereal",
                role: "hq",
                cost: 45,
                power: 2,
                models: [{
                    name: "Ethereal",
                    cost: 45,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 6,
                    ws: 3,
                    bs: 4,
                    strength: 3,
                    toughness: 3,
                    wounds: 4,
                    attacks: 3,
                    leadership: 9,
                    save: 5
                }],
                dataSource: null
            },
            {
                name: "Cadre Fireblade",
                role: "hq",
                cost: 39,
                power: 2,
                models: [{
                    name: "Cadre Fireblade",
                    cost: 39,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 6,
                    ws: 3,
                    bs: 2,
                    strength: 3,
                    toughness: 3,
                    wounds: 5,
                    attacks: 3,
                    leadership: 8,
                    save: 4
                }],
                dataSource: null
            },
            {
                name: "Commander Farsight",
                role: "hq",
                cost: 151,
                power: 8,
                models: [{
                    name: "Commander Farsight",
                    cost: 151,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 8,
                    ws: 2,
                    bs: 2,
                    strength: 5,
                    toughness: 5,
                    wounds: 6,
                    attacks: 4,
                    leadership: 9,
                    save: 3
                }],
                dataSource: null
            },
            {
                name: "Commander Shadowsun",
                role: "hq",
                cost: 167,
                power: 9,
                models: [{
                    name: "Commander Shadowsun",
                    cost: 167,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 8,
                    ws: 3,
                    bs: 2,
                    strength: 4,
                    toughness: 4,
                    wounds: 5,
                    attacks: 4,
                    leadership: 9,
                    save: 3
                }],
                dataSource: null
            },
            {
                name: "Aun'Shi",
                role: "hq",
                cost: 68,
                power: 4,
                models: [{
                    name: "Aun'Shi",
                    cost: 68,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 6,
                    ws: 2,
                    bs: 4,
                    strength: 3,
                    toughness: 3,
                    wounds: 5,
                    attacks: 5,
                    leadership: 9,
                    save: 0
                }],
                dataSource: null
            },
            {
                name: "Aun'Va",
                role: "hq",
                cost: 65,
                power: 4,
                models: [{
                    name: "Aun'va",
                    cost: 65,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 6,
                    ws: 6,
                    bs: 24,
                    strength: 2,
                    toughness: 3,
                    wounds: 6,
                    attacks: 1,
                    leadership: 9,
                    save: 5
                }],
                dataSource: null
            },
            {
                name: "Darkstrider",
                role: "hq",
                cost: 45,
                power: 3,
                models: [{
                    name: "Darkstrider",
                    cost: 45,
                    min: 1,
                    max: 1,
                    count: 1,
                    movement: 8,
                    ws: 3,
                    bs: 2,
                    strength: 5,
                    toughness: 5,
                    wounds: 6,
                    attacks: 4,
                    leadership: 9,
                    save: 3
                }],
                dataSource: null
            },
        ];
        for(let i=0; i < this.HQ.length; i++) {
            let HQ = this.HQ[i];
            HQ.dataSource = new UnitDataSource(HQ.models);
        }

        this.Troops = [];
        let u = new Unit();
        u.name = "Test";
        u.role =  "hq";
        u.power = 3;
        u.models = [{
            name: "Test",
            cost: 45,
            min: 1,
            max: 12,
            count: 5,
            movement: 8,
            ws: 3,
            bs: 2,
            strength: 5,
            toughness: 5,
            wounds: 6,
            attacks: 4,
            leadership: 9,
            save: 3
        }];
        u.constructor();
        this.Troops.push(u);
        // for(let i=0; i < this.Troops.length; i++) {
        //     let Troops = this.Troops[i];
        //     Troops.dataSource = new UnitDataSource(Troops.models);
        // }

        this.Elites = [

        ];
        for(let i=0; i < this.Elites.length; i++) {
            let Elites = this.Elites[i];
            Elites.dataSource = new UnitDataSource(Elites.models);
        }


        this.FastAttack = [

        ];
        for(let i=0; i < this.FastAttack.length; i++) {
            let FastAttack = this.FastAttack[i];
            FastAttack.dataSource = new UnitDataSource(FastAttack.models);
        }


        this.HeavySupport = [

        ];
        for(let i=0; i < this.HeavySupport.length; i++) {
            let HeavySupport = this.HeavySupport[i];
            HeavySupport.dataSource = new UnitDataSource(HeavySupport.models);
        }


        this.Transports = [

        ];
        for(let i=0; i < this.Transports.length; i++) {
            let Transports = this.Transports[i];
            Transports.dataSource = new UnitDataSource(Transports.models);
        }


        this.LordOfWar = [

        ];
        for(let i=0; i < this.LordOfWar.length; i++) {
            let LordOfWar = this.LordOfWar[i];
            LordOfWar.dataSource = new UnitDataSource(LordOfWar.models);
        }


        this.Fliers = [

        ];
        for(let i=0; i < this.Fliers.length; i++) {
            let Fliers = this.Fliers[i];
            Fliers.dataSource = new UnitDataSource(Fliers.models);
        }


        this.Fortifications = [

        ];
        for(let i=0; i < this.Fortifications.length; i++) {
            let Fortifications = this.Fortifications[i];
            Fortifications.dataSource = new UnitDataSource(Fortifications.models);
        }


    }
}
