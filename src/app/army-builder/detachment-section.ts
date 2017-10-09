import {Unit} from "./unit";

export class DetachmentSection {
    name: string;
    min: number;
    max: number;

    get cost(): number {
        return this.getCost();
    }

    units: Unit[];
    // get units(): Unit[] {
    //     return this.unitObservable.getUnits();
    // }

    get valid(): boolean {
        let len = this.units.length;
        return (len <= this.max && len >= this.min);
    }

    constructor() {
        this.min = 0;
        this.max = 0;
        this.units = [];
    }

    addUnit(u: Unit) {
        this.units.push(u);
        console.log(u.dataSource);
    }

    getCost() {
        let total = 0;
        for(let i=0; i<this.units.length; i++) {
            total += this.units[i].cost;
        }
        return total;
    }
}
