import {Detachment} from "./detachment";

export class Army {
    cost: number;
    CP: number;
    name: string;

    Detachments: Detachment[];

    constructor() {
        this.cost = 0;
        this.name = "";
        this.Detachments = [];

        this.CP = this.sumArmyCP();
    }

    sumArmyCP() {
        let total = 0;
        for(let i=0; i<this.Detachments.length; i++) {
            total += this.Detachments[i].CP;
        }
        this.CP = total;
        return total;
    }

}
