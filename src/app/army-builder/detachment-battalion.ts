import {Detachment} from "./detachment";

export class DetachmentBattalion  extends Detachment {
    constructor() {
        super();

        this.Name = "Battalion";
        this.CP = 3;
        this.HQ.min = 2;
        this.HQ.max = 3;
        this.Troops.min = 3;
        this.Troops.max = 6;
        this.Elites.max = 6;
        this.FastAttack.max = 3;
        this.HeavySupport.max = 3;
        this.Fliers.max = 2;
    }
}
