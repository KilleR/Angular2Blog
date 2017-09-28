import {Detachment} from "./detachment";

export class Army {
    name: string;

    get CP(): number {
        return this.getCP();
    };
    get cost(): number {
        return this.getCost();
    }

    Detachments: Detachment[];

    constructor() {
        this.name = "";
        this.Detachments = [];
    }

    getCP() {
        let total = 3; // base CP
        for(let i=0; i<this.Detachments.length; i++) {
            total += this.Detachments[i].CP;
        }
        return total;
    }

    getCost() {
        let total = 0;
        for(let i=0; i<this.Detachments.length; i++) {
            total += this.Detachments[i].cost;
        }
        return total;
    }

}
