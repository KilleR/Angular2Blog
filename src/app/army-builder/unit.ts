import {Model} from "./model";
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";

export class Unit {
    name: string;
    power: number;
    role: string;
    models: Model[];
    dataSource: UnitDataSource;

    get cost(): number {
        let total=0;
        for(let i=0; i<this.models.length; i++) {
            let m = this.models[i];
            total += (m.cost * m.count);
        }
        return total;
    }

    set cost(n) {

    }

    constructor() {
        this.dataSource = new UnitDataSource(this.models)
    }
}

export class UnitDataSource extends DataSource<any> {
    constructor(private data: Model[]) {
        super();
    }

    connect(): Observable<Model[]> {
        return Observable.of(this.data)
    }

    disconnect() {}
}