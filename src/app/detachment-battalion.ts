import {Detachment} from "./detachment";

export class DetachmentBattalion  extends Detachment {
    constructor() {
        super();

        this.Name = "Battalion";
        this.CP = 3;
        this.HQ.min = 2;
        this.Troops.min = 3;
    }
}
