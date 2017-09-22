import {Detachment} from "./detachment";

export class DetachmentBrigade extends Detachment {
    constructor() {
        super();

        this.Name = "Brigade";
        this.CP = 9;
        this.HQ.min = 3;
        this.Troops.min = 6;
        this.Elites.min = 4;
        this.FastAttack.min = 3;
        this.HeavySupport.min = 3;
    }
}
