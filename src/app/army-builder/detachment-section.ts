import {Unit} from "./unit";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {DataSource} from "@angular/cdk/collections";

export class DetachmentSection {
    name: string;
    min: number;
    max: number;

    unitsDataSource: UnitDataSource;
    private unitObservable: UnitObervable;

    get cost(): number {
        return this.getCost();
    }

    get units(): Unit[] {
        return this.unitObservable.getUnits();
    }

    get valid(): boolean {
        let len = this.units.length;
        return (len <= this.max && len >= this.min);
    }

    constructor() {
        this.min = 0;
        this.max = 0;

        this.unitObservable = new UnitObervable();
        this.unitsDataSource = new UnitDataSource(this.unitObservable);
    }

    addUnit(u: Unit) {
        this.unitObservable.addUnit(u);
    }

    getCost() {
        let total = 0;
        for(let i=0; i<this.units.length; i++) {
            total += this.units[i].cost;
        }
        return total;
    }
}

export class UnitDataSource extends DataSource<any> {
    constructor(private _db: UnitObervable) {
        super();
    }

    connect(): Observable<Unit[]> {
        return this._db.dataChange
    }

    disconnect() {}

    setUnits(u: Unit[]) {
        this._db.setUnits(u)
    }
}

export class UnitObervable  {
    dataChange: BehaviorSubject<Unit[]> = new BehaviorSubject<Unit[]>([]);
    get data(): Unit[] { return this.dataChange.value; }

    constructor() {

    }

    setUnits(u: Unit[]) {
        this.dataChange.next(u)
    }

    getUnits() {
        return this.data.slice();
    }

    addUnit(u: Unit) {
        const copiedData = this.data.slice();
        copiedData.push(u);
        this.dataChange.next(copiedData);
    }
}