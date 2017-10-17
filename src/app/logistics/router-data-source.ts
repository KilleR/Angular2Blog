import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import {Device} from "./device";

export class RouterDataSource extends DataSource<any>{
    constructor(private data: Device[]) {
        super();
    }

    connect(): Observable<Element[]> {
        return Observable.of(this.data)
    }

    disconnect() {

    }
}
