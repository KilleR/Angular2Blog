import {Detachment} from "./detachment";

export class DetachmentBrigade extends Detachment {
    constructor() {
        super();

        this.Name = "Brigade";
        this.CP = 9;
        this.HQ.min = 3;
        this.HQ.max = 5;
        this.Troops.min = 6;
        this.Troops.max = 12;
        this.Elites.min = 3;
        this.Elites.max = 8;
        this.FastAttack.min = 3;
        this.FastAttack.max = 5;
        this.HeavySupport.min = 3;
        this.HeavySupport.max = 5;
        this.Fliers.max = 2;
    }
}
