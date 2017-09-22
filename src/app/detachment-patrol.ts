import {Detachment} from "./detachment";

export class DetachmentPatrol extends Detachment {
    constructor() {
        super();

        this.Name = "Patrol";
        this.CP = 0;
        this.HQ.min = 1;
        this.Troops.min = 1;
    }
}
